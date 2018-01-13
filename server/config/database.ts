import * as Promise from 'bluebird';
import * as debuggable from 'debug';
import * as mongoose from 'mongoose';
import * as models from '../models';
import * as uniqueValidator from 'mongoose-unique-validator';
import { join, resolve } from 'path';
import { PRODUCTION } from './production';
import { inspect } from 'util';

const debug = debuggable('dojo-detector');
export const database = `dojo-detector_${ databaseEntity() }`;

mongoose.connect(`mongodb://localhost/${ database }`);
(mongoose as any).Promise = Promise;

mongoose.plugin(uniqueValidator,  { message: '{PATH} must be unique' });

if (!PRODUCTION) {

  /*
  *  CONNECTION EVENTS
  *  When successfully connected
  */
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${ database }`);
  });

  /*
  *  If the connection throws an error
  */
  mongoose.connection.on('error', err => {
    console.error(`Mongoose default connection error: ${ err }`);

    process.exit(0);
  });

  /*
  * print mongoose logs when debugging
  */
  if (process.env.MONGOOSE_DEBUG) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
      debug(`${ collectionName }.${ method }`, inspect(query, false, 20), doc);
    });
  }

  /*
  *  When the connection is disconnected
  */
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  /*
  *  If the Node process ends, close the Mongoose connection
  */
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through program termination');
      process.exit(0);
    });
  });

}

function databaseEntity(): string {
  return process.env.NODE_ENV || 'development';
}
