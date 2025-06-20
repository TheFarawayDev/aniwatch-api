import { config } from "dotenv";
import { cors } from "hono/cors";

config();

const corsConfig = cors({
  allowMethods: ["GET"],
  maxAge: 600,
  credentials: true,
  origin: "*", // This is the important change!
});

export default corsConfig;
