var express = require('express');
var router = express.Router();
import { Request, Response } from 'express';
import {getPersonas} from "../DA/Personas";

router.get("/getPersonas",async(req:Request,res:Response) => {
    try {
        const results = await getPersonas(req);
        res.send(JSON.stringify(results));
    } catch (elError) {
        res.send({ error: elError });
    }
})

module.exports = router;

