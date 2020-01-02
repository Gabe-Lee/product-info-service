const DB = {
  PG: {
    LOCAL: {
      host: 'localhost',
      user: 'jimmy',
      password: 'superman64',
      database: 'SDC_PG',
      port: 5432,
    },
    REMOTE: {

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

const SERVER = {
  LOCAL: {
    PORT: 3333,
    HOST: 'localhost',
    URL: 'localhost:3333',
  },
};

const MODE = 'LOCAL';
const SERVICE = 'postgres';

export {
  DB, SERVER, MODE, SERVICE,
};
