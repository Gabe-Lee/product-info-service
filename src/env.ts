const DB = {
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

const SERVER = {
  LOCAL: {
    PORT: 3333,
    HOST: 'localhost',
    URL: 'localhost:3333',
  },
};

const SERVICE = 'postgres';

export {
  DB, SERVER, SERVICE,
};
