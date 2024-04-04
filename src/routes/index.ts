import { Router } from "express";
import homeRouter from "@/components/employee/routes";
const router = Router();

router.use("/", homeRouter);

export default router;
