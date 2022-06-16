var express = require('express');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Request, Response, Router } from 'express';
var router = express.Router();

export const PlayersCall:Router = router.get("/getPlayers", async (req:Request,res:Response) => {
    try {
        const results = [{id:1,name:"Messi"},{id:2,name:"CR7"}]
        res.send(results)
    } catch (error) {
        res.send({ error: error });
    }
})

export const UsersCall:Router = router.get('/users',async(req:Request,res:Response):Promise<Response> => {
    const users = await prisma.usuario.findMany()
    return res.send(users)
})

