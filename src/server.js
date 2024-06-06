import app from './app.js';
import { api } from "./utils/env.js";
import logger from "./utils/logger.js";

app.listen(api.port, (err) => {
    if (err) {
        logger.error(err);
    } else {
        logger.info(`Successfully launched in ${api.nodeEnv} environment on port ${api.port}`);
    }
});
