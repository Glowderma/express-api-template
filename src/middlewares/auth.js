import responseHandler from "../utils/responseHandler.js";
import { api } from "../utils/env.js";
import jwt from "jsonwebtoken";
import jwksRsa from "jwks-rsa";

const adminRoutes = ["/admin"];

const auth = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization ?? null;
        if (!token) {
            return responseHandler.unauthorizedErrorHandler(res, 0, "No token received.");
        }
        const client = jwksRsa({
            jwksUri: api.jwks
        });
        const key = await client.getSigningKey(api.kid);
        const publicKey = key.getPublicKey();
        req.decodedToken = jwt.verify(token.split(' ')[1], publicKey);
        next();
    } catch (error) {
        console.log("token verification error: ", error);
        return responseHandler.unauthorizedErrorHandler(res, 0, "Unable to verify token");
    }
};

const authLocal = async (req, res, next) => {
    req.body.isAdmin = (/true/i).test(api.isLocalAdmin);
    const token = `${req.headers.authorization}`;
    if (!token) {
        return responseHandler.unauthorizedErrorHandler(res, 0, "No token received.");
    }
    if (adminRoutes.includes(req.path) && req.body.isAdmin === false) {
        return responseHandler.unauthorizedErrorHandler(res, 0, "You do not have access");
    }
    next();
};

export { auth, authLocal };
