import responseHandler from '../utils/responseHandler.js';

export const getDefaultPage = async function (req, res) {
    responseHandler.successHandler(res, "1", "Welcome", null);
};
