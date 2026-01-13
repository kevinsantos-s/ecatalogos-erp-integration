import { Router } from "express";
import { companiesRoutes } from "@/modules/companies/companies.routes";

const routes = Router();

routes.use("/companies", companiesRoutes);

export default routes;
