import pg from 'pg';
import {db} from "./env.js";

let connectionPool = null;
const getDbConnectionPool = function() {
    if(!connectionPool) {
        connectionPool = new pg.Pool(db);
    }
    return connectionPool;
};

export {
    getDbConnectionPool
};
