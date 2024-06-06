import * as dotenv from 'dotenv';
dotenv.config();

const api = {
    nodeEnv: process.env.NODE_ENV || "local",
    port: process.env.PORT || 3000,
    isLocalAdmin: process.env.IS_LOCAL_ADMIN || false,
    kid: process.env.KID || "JvByYHoKWNqL_Bu8VMpa2",
    jwks: process.env.JWKS_URI || "https://clouce.us.auth0.com/.well-known/jwks.json"
};

let db = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    user: process.env.PGUSER,
    port: process.env.PGPORT
};

if(api.nodeEnv !== "local") {
    db = {
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        user: process.env.PGUSER,
        port: process.env.PGPORT,
        ssl: {
            rejectUnauthorized: false,
            ca: process.env.CA_CERT,
        },
    };
}

export { api, db };
