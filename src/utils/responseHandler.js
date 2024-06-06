
export default {
    successHandler : async(res, statusId, message, data) => {
        res.status(200).json({
            statusId : statusId || "1",
            message : message || "Operation successful",
            resbody : data
        });
    },
    clientErrorHandler : async(res, statusId, message) => {
        res.status(400).json({
            statusId : statusId || "0",
            message : message || "Operation failed",
            resbody : null
        });
    },
    serverErrorHandler : async(res, statusId, message) => {
        res.status(500).json({
            statusId : statusId || "0",
            message : message || "Something went wrong..",
            resbody : null
        });
    },
    unauthorizedErrorHandler : async(res, statusId, message) => {
        res.status(401).json({
            statusId : statusId || "0",
            message : message || "invalid token",
            resbody : null
        });
    },

};