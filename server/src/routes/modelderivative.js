import express from "express";

import {
  DerivativesApi,
  JobPayload,
  JobPayloadInput,
  JobPayloadOutput,
  JobSvfOutputPayload
} from "forge-apis";

import obtainToken from "../middleware/obtainToken";

const router = express.Router();

router.use(obtainToken);

router.post("/translate", async (req, res, next) => {
  const job = new JobPayload();
  job.input = new JobPayloadInput();
  job.input.urn = req.body.objectName;
  job.output = new JobPayloadOutput([new JobSvfOutputPayload()]);
  job.output.formats[0].type = "svf";
  job.output.formats[0].views = ["2d", "3d"];
  try {
    await new DerivativesApi().translate(
      job,
      {},
      req.oauth_client,
      req.oauth_token
    );
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

export default router;
