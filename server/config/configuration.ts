import { ConnectionOptions } from 'mongoose';

import * as Promise from 'bluebird';

global.Promise = Promise;

export const configuration = {
  database: {
    default: {
      adapter: 'mongodb',
      host: 'localhost',
      port: 27017,
      options: {
        promiseLibrary: Promise,
        poolSize: 15,
      },
    },
    development: {
      database: 'detector_development',
    },
    test: {
      database: 'detector_test',
    },
    production: {
      database: 'detector_production',
      options: {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        ssl: true,
      },
    },
  },
};

export interface DbConfig {
  adapter?: string;
  database: string;
  host?: string;
  port?: number;
  options: ConnectionOptions;
}
