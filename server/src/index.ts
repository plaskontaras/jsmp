import { startSheduler } from './sheduler/sheduler';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
const config = require('config');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const app: Application = express();
const server = require('http').createServer(app);

const PORT = config.get('port') || 5000;

mongoose.set('useFindAndModify', false);
async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('error', (error: any) => console.log(error));
    mongoose.Promise = global.Promise;

    require('./auth/auth');
    app.use(cors());
    const routes = require('./routes/routes');

    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(
      '/api/challenge',
      passport.authenticate('jwt', { session: false }),
      require('./routes/challenge.routes')
    );

    app.use(
      '/api/currenttask',
      passport.authenticate('jwt', { session: false }),
      require('./routes/currenttask.routes')
    );

    app.use(
      '/api/currentachievement',
      passport.authenticate('jwt', { session: false }),
      require('./routes/currentachievement.routes')
    );

    app.use(
      '/api/cas',
      passport.authenticate('jwt', { session: false }),
      require('./routes/cas.routes')
    );

    app.use(
      '/api/taskarchive',
      passport.authenticate('jwt', { session: false }),
      require('./routes/taskarchive.routes')
    );

    app.use(
      '/api/seed',
      passport.authenticate('jwt', { session: false }),
      require('./routes/seed.routes')
    );

    app.use('/api/', routes);

    // Handle errors.
    app.use(function (err: any, req: Request, res: Response, next: any) {
      res.status(err.status || 500);
      res.json({ error: err });
    });

    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
    startSheduler();
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
