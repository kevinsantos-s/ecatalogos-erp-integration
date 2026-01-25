import { Router } from "express";
import { companiesRoutes } from "../modules/companies/companies.routes";
import { categoriesRoutes } from "@/modules/categories/categories.routes";
import { branchesRoutes } from "@/modules/branches/branches.routes";

const routes = Router();

routes.use("/companies", companiesRoutes);
routes.use("/branches", branchesRoutes)
routes.use("/categories", categoriesRoutes);


export {routes};
