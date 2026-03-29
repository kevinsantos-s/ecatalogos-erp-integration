import { Router } from "express";
import { BlingAuthController } from "./auth.controller";

const blingAuthRoutes = Router();
const controller = new BlingAuthController();

blingAuthRoutes.get("/callback", controller.callback.bind(controller));

export { blingAuthRoutes };
