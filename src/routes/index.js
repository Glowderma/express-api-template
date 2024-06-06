import express from 'express';
import {
    getDefaultPage
} from "../controller/index.js";
const indexRouter = express.Router();
indexRouter.get('/', getDefaultPage);
export default indexRouter;
