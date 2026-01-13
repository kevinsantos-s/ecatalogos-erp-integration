import { Router } from "express";
import { CompaniesController } from "./companies.controller";

const companiesRoutes = Router();
const controller = new CompaniesController();

companiesRoutes.post(
  "/sync/:blingCompanyId",
  controller.sendCompany.bind(controller)
);

export { companiesRoutes };
