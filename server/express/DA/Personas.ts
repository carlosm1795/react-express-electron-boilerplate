var express = require("express");
import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
var router = express.Router();

export const getPersonas = async (req: Request) => {
  const users = await prisma.persona.findMany();
  return users;
};

export const updatePersonas = async (req: Request) => {
  const users = await prisma.persona.update({
    where: {
      IdPersona: req.body.IdPersona,
    },
    data: {
      NombreTerrenal: req.body.NombreTerrenal,
      IdAgrupacionDePersonas: req.body.IdAgrupacionDePersonas,
      FechaNacimiento: req.body.FechaNacimiento,
      Direccion: req.body.Direccion,
      Email: req.body.Email,
      UltimaModificacion: `${new Date()}`,
      ModificadoPor: `Admin`,
      EstaActivo: req.body.EstaActivo,
      Consecutivo: req.body.Consecutivo,
    },
  });
  return users;
};

export const newPersona = async (req: Request) => {
  const users = await prisma.persona.create({
    data: {
      NombreTerrenal: req.body.NombreTerrenal,
      IdAgrupacionDePersonas: req.body.IdAgrupacionDePersonas,
      FechaNacimiento: req.body.FechaNacimiento,
      Direccion: req.body.Direccion,
      Email: req.body.Email,
      UltimaModificacion: `${new Date()}`,
      ModificadoPor: `Admin`,
      EstaActivo: req.body.EstaActivo,
      Consecutivo: req.body.Consecutivo,
    },
  });
  return users;
};

export const getPersonasById = async (req: Request) => {
    const users = await prisma.persona.findUnique({
        where:{
            IdPersona:req.body.IdPersona,
        }
    });
    return users;
  };

  export const deletePersona = async (req: Request) => {
    const users = await prisma.persona.delete({
        where:{
            IdPersona:req.body.IdPersona,
        }
    });
    return users;
  };

  export const getAgeByIdPersona = async (req: Request) => {
    const users = await prisma.$queryRaw`SELECT NombreTerrenal,FechaNacimiento,(strftime('%Y', 'now') - strftime('%Y', FechaNacimiento)) 
    - (strftime('%m-%d', 'now') < strftime('%m-%d', FechaNacimiento) ) Edad FROM Persona where IdPersona = ${req.body.IdPersona}`
    return users;
  };

  export const CalculateTimeFromNombreAstral = async (req: Request) => {
    const users = await prisma.$queryRaw`
    Select P.FechaNacimiento,I.FechaRecibido from Persona P,Iniciaciones I
    Where P.IdPersona = ${req.body.IdPersona} and I.IdPersona = ${req.body.IdPersona} and I.IdTipoIniciacion = 3;    
    `
    return users;
  };