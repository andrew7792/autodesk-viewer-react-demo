import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import oauth from "./routes/oauth";
import oss from "./routes/oss";
import modelderivative from "./routes/modelderivative";
import { port, originURL } from "./utils/config";

const app = express();

app.use(
  cors({
    origin: originURL,
    credentials: true
  })
);

app.use(bodyParser.json());

app.use("/api/forge/oauth", oauth);

app.use("/api/forge/oss", oss);

app.use("/api/forge/modelderivative", modelderivative);

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
