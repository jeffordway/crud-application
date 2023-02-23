import { Router } from "express";
import { addPet, addPetPage, allPets, deletePet, editPet, editPetPage, getPetById } from "../controllers/petController";

const router = Router();

// GET /pets - renders the all-pets page
router.get('/', allPets);

// GET /pets/add - renders the add-pet page
router.get('/add', addPetPage);

// POST /pets/add - add the new pet to the database
router.post('/add', addPet);

// GET /pets/edit/:petId - renders the edit-pet page
router.get('/edit/:petId', editPetPage);

// POST /pets/edit/:petId - updated pet information in the database
router.post('/edit/:petId', editPet);

// POST /pets/delete/:petsId - delete selected pet from the database
router.post('/delete/:petId', deletePet);

// GET /pets/:pets - render pet-details for the selected pet
router.get('/:petId', getPetById);


export default router;