import { toSSG } from "hono/bun";
import app from "./index";

toSSG(app);