import { API, PRODUCTION, session } from './config';
import { normalizePort } from './utils';
import { json, urlencoded } from 'body-parser';
import { resolve } from 'path';

import { routes, catchAll } from './routes';

import * as compress from 'compression';
import * as express from 'express';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as https from 'https';

const port = normalizePort(process.env.PORT || 8000);
const app = express();

app.set('production', PRODUCTION);
app.set('port', port);

// setup express middleware
app
  .use(helmet())
  .use(compress())
  .use(logger('dev'))
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(session)
  .use(express.static(resolve('dist/public')))
  .use(API, routes)
  .use(catchAll)

  .listen(port, () => console.log(`Express server listening on port ${port}`));
