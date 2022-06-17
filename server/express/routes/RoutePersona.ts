var express = require('express');
var router = express.Router();
import { Request, Response } from 'express';
import {getPersonas,deletePersona,getAgeByIdPersona,getPersonasById,newPersona,updatePersonas,CalculateTimeFromNombreAstral} from "../DA/Personas";

router.get("/getPersonas",async(req:Request,res:Response) => {
    try {
        const results = await getPersonas(req);
        res.send(JSON.stringify(results));
    } catch (elError) {
        res.send({ error: elError });
    }
})

router.post("/deletePersona", async (req:Request,res:Response) => {
    try {
        const results = await deletePersona(req);
        res.send(JSON.stringify(results));
    } catch (elError) {
        res.send({ error: elError });
    }
});

router.post("/getAgeByIdPersona", async (req:Request,res:Response) => {
    try {
        console.log("aqui")
        const results = await getAgeByIdPersona(req);
        res.send(JSON.stringify(results));
    } catch (elError) {
        res.send({ error: elError });
    }
});

router.post("/getPersonasById", async (req:Request,res:Response) => {
    
    try {
        const results = await getPersonasById(req);
        res.send(JSON.stringify(results));
    } catch (elError) {
        res.send({ error: elError });
    }
});

router.post("/newPersona", async (req:Request,res:Response) => {
    
    try {
        const results = await newPersona(req);

        res.send(JSON.stringify(results));
    } catch (elError) {
        res.send({ error: elError });
    }
});

router.post("/updatePersona", async (req:Request,res:Response) => {
    
    try {
        const results = await updatePersonas(req);

        res.send(JSON.stringify(results));
    } catch (elError) {
        res.send({ error: elError });
    }
});

module.exports = router;

