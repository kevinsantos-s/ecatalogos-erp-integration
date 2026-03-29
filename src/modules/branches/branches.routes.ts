import { Router } from "express";
import { BranchesController } from "./branches.controller";

const branchesRoutes = Router();
const controller = new BranchesController();

branchesRoutes.post(
  "/sync",
  controller.sync.bind(controller)
);

export { branchesRoutes };
