import { Router } from "express";
import { BranchesController } from "./branches.controller";

const branchesRoutes = Router();
const controller = new BranchesController();

branchesRoutes.post(
  "/sync/:blingBranchId",
  controller.sendBranch.bind(controller)
);

export { branchesRoutes };
