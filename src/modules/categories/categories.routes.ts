import { Router } from "express";
import { CategoriesController } from "./categories.controller";

const categoriesRoutes = Router();
const controller = new CategoriesController();

categoriesRoutes.post(
  "/sync",
  controller.sync.bind(controller)
);

export { categoriesRoutes };
