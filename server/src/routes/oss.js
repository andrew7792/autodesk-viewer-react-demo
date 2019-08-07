import fs from "fs";
import express from "express";
import multer from "multer";
import { BucketsApi, ObjectsApi, PostBucketsPayload } from "forge-apis";

import { clientId } from "../utils/config";
import obtainToken from "../middleware/obtainToken";

const router = express.Router();

router.use(obtainToken);

router.get("/buckets", async (req, res, next) => {
  try {
    // Retrieve buckets from Forge using the [BucketsApi](https://github.com/Autodesk-Forge/forge-api-nodejs-client/blob/master/docs/BucketsApi.md#getBuckets)
    const buckets = await new BucketsApi().getBuckets(
      { limit: 64 },
      req.oauth_client,
      req.oauth_token
    );
    res.json(
      buckets.body.items.map(bucket => {
        return {
          id: bucket.bucketKey,
          // Remove bucket key prefix that was added during bucket creation
          text: bucket.bucketKey.replace(`${clientId.toLowerCase()}-`, ""),
          type: "bucket",
          children: true
        };
      })
    );
  } catch (err) {
    next(err);
  }
});

router.get("/items", async (req, res, next) => {
  const bucket_name = req.query.id;
  try {
    // Retrieve objects from Forge using the [ObjectsApi](https://github.com/Autodesk-Forge/forge-api-nodejs-client/blob/master/docs/ObjectsApi.md#getObjects)
    const objects = await new ObjectsApi().getObjects(
      bucket_name,
      {},
      req.oauth_client,
      req.oauth_token
    );
    res.json(
      objects.body.items.map(object => {
        return {
          id: Buffer.from(object.objectId).toString("base64"),
          text: object.objectKey,
          type: "object",
          children: false
        };
      })
    );
  } catch (err) {
    next(err);
  }
});

// POST /api/forge/oss/buckets - creates a new bucket.
// Request body must be a valid JSON in the form of { "bucketKey": "<new_bucket_name>" }.
router.post("/buckets", async (req, res, next) => {
  const payload = new PostBucketsPayload();
  payload.bucketKey = `${clientId.toLowerCase()}-${req.body.bucketKey}`;
  payload.policyKey = "transient"; // expires in 24h
  try {
    // Create a bucket using [BucketsApi](https://github.com/Autodesk-Forge/forge-api-nodejs-client/blob/master/docs/BucketsApi.md#createBucket).
    await new BucketsApi().createBucket(
      payload,
      {},
      req.oauth_client,
      req.oauth_token
    );
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

router.post(
  "/objects",
  multer({ dest: "uploads/" }).single("fileToUpload"),
  async (req, res, next) => {
    fs.readFile(req.file.path, async (err, data) => {
      if (err) {
        next(err);
      }
      try {
        // Upload an object to bucket using [ObjectsApi](https://github.com/Autodesk-Forge/forge-api-nodejs-client/blob/master/docs/ObjectsApi.md#uploadObject).
        await new ObjectsApi().uploadObject(
          req.body.bucketKey,
          req.file.originalname,
          data.length,
          data,
          {},
          req.oauth_client,
          req.oauth_token
        );
        res.status(200).end();
      } catch (error) {
        next(error);
      }
    });
  }
);

export default router;
