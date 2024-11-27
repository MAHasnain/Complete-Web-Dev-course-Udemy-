import express from "express";
import cors from "cors";
import logger from "./logger.js";
import morgan from "morgan";
// import cookieParser from "cookie-parser";

const app = express();

// common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// app.use(cookieParser())

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

const morganFormat = ":method :url :status :response-time ms";

// Logger
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// import routes
// import { healthcheckRouter } from "./controller/healthcheck.controllers.js";
import userRouter from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errors.middlewares.js";

// app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);

app.use(errorHandler);

export { app };
