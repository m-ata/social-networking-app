import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from "./routes";
import './models';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    dotenv.config();
    this.serverConfig();
    this.mongoDBConnection();
  }

  private serverConfig(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(router);
  }

  private mongoDBConnection = async () => {
    try {
      await mongoose.connect(process.env.DB_URL as string, {
        autoIndex: false,
      },
        function (err) {
          if (err) {
            console.error(
              "Failed to connect to mongo on startup - retrying in 5 sec",
              err
            );
          } else {
            console.log('MongoDB Connected')
          }
        });
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening at port ${this.app.get('port')}`)
    });
  }
}
const server = new Server();

server.start();