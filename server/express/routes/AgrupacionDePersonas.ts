var express = require('express');
import { PrismaClient } from '@prisma/client';
import { Request, Response, Router } from 'express';
const prisma = new PrismaClient();
var router = express.Router();

export const getAgrupacionDePersonas:Router = router.get('/getAgrupacionDePersonas',async(req:Request,res:Response):Promise<Response> => {
    const users = await prisma.agrupacionDePersonas.findMany()
    return res.send(users)
})