import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';
import products from './data/products.json';
import { PrismaClient } from '@prisma/client';
import {PlayersCall,UsersCall} from "./entries/Players"
import {getAgrupacionDePersonas} from "./routes/AgrupacionDePersonas";
const  PersonasEntries = require("./routes/RoutePersona")
// Creates and configures an ExpressJS web server2.
class App {

    // ref to Express instance
    public express: express.Application;

    // Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger("dev"));
        this.express.use(cors());
        this.express.use('/images', express.static(path.join(__dirname, 'public/images')));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        const router = express.Router();
        // placeholder route handler
        router.get("/products", (req, res, next) => {
            res.json(products);
        });
        this.express.use("/", router);
        this.express.use("/Players",PlayersCall);
        this.express.use("/Users",UsersCall);
        this.express.use("/AgrupacionDePersonas",getAgrupacionDePersonas);
        this.express.use("/Personas",PersonasEntries);
        
        
    }
}

export default new App().express;
