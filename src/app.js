import express from 'express';
import indexRouter from './routes/index.js';
import { auth, authLocal } from "./middlewares/auth.js";
import cors from "cors";
import { api } from "./utils/env.js";

const app = express();
app.disable("x-powered-by");

const corsOptions = {
    origin: ['https://example.com']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (api.nodeEnv !== "local" && api.nodeEnv !== "test") {
    app.use(auth);
} else {
    app.use(authLocal);
}

app.use('/', indexRouter);

app.all('*', function (req, res) {
    res.status(404).json({
        statusId: "0",
        message: req.method + " to " + req.url + " does not exist",
        resbody: null
    });
});


export default app;
