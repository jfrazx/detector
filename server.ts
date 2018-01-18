import { API, PRODUCTION } from './server/config';
import { normalizePort } from './server/utils';
import { json, urlencoded } from 'body-parser';
import { join } from 'path';

import { routes, catchAll } from './server/routes';

import * as express from 'express';
import * as https from 'https';
import * as compress from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';

const port = normalizePort(process.env.PORT || 8000);
const root = __dirname;
const app = express();

app.set('port', port);

// setup express middleware
app.use(helmet())
  .use(compress())
  .use(logger('dev'))
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(express.static(join(root, 'public')))
  .use(API, routes)
  .use(catchAll)


  .listen(port, () => console.log(`Express server listening on port ${ port }`));
