var express = require('express');
import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
var router = express.Router();


export const getPersonas = async(req:Request) => {
    const users = await prisma.persona.findMany()
    return users
}