"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DB = {
    PG: {
        LOCAL: {
            host: 'localhost',
            user: 'jimmy',
            password: 'superman64',
            database: 'SDC_PG',
            port: 5432,
            max: 20,
        },
        REMOTE: {
            host: '52.13.12.54',
            user: 'jimmy',
            password: 'superman64',
            database: 'SDC_PG',
            port: 5432,
            max: 20,
        },
    },
    MG: {
        LOCAL: {
            host: 'localhost',
            user: 'jimmy',
            password: 'superman64',
            database: 'SDC_MG',
            port: 27017,
        },
    },
};
exports.DB = DB;
var SERVER = {
    LOCAL: {
        PORT: 3333,
        HOST: 'localhost',
        URL: 'localhost:3333',
    },
};
exports.SERVER = SERVER;
var SERVICE = 'postgres';
exports.SERVICE = SERVICE;
//# sourceMappingURL=env.js.map