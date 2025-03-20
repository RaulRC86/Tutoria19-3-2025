import { Router } from "express";
import { contactController, indexController } from "./controller/indexControllers.js";
import { staffController } from "./controller/staffControler.js";
import { serviceController } from "./controller/serviceController.js";
export const allRoutes = Router();

allRoutes.get("/", indexController);
allRoutes.get("/staff", staffController);
allRoutes.get("/service", serviceController);
allRoutes.get("/contact", contactController);

