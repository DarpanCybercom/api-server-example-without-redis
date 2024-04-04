import { Request, Response, NextFunction } from "express";
import { OK } from "http-status/lib";
import { HomeServices } from "./services";
import { getAppInfoQuery } from "@/types/request/home";
import { apiResponse } from "@/helpers/apiResponse";

const getAppInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const appInfoKey = req.query.key as getAppInfoQuery;
    const result = await HomeServices.getAppInfo(appInfoKey);

    res.status(OK).json(apiResponse(result));
  } catch (error) {
    next(error);
  }
};

const getEmployeesInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {

    console.log(req, "req");

    const result = await HomeServices.getEmployeesInfo();
    res.status(OK).json(apiResponse(result));
  } catch (error) {
    next(error);
  }
};

export default { getAppInfo, getEmployeesInfo };
