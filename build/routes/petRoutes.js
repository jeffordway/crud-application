"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petController_1 = require("../controllers/petController");
const router = (0, express_1.Router)();
// GET /pets - renders the all-pets page
router.get('/', petController_1.allPets);
// GET /pets/add - renders the add-pet page
router.get('/add', petController_1.addPetPage);
// POST /pets/add - add the new pet to the database
router.post('/add', petController_1.addPet);
// GET /pets/edit/:petId - renders the edit-pet page
router.get('/edit/:petId', petController_1.editPetPage);
// POST /pets/edit/:petId - updated pet information in the database
router.post('/edit/:petId', petController_1.editPet);
// POST /pets/delete/:petsId - delete selected pet from the database
router.post('/delete/:petId', petController_1.deletePet);
// GET /pets/:pets - render pet-details for the selected pet
router.get('/:petId', petController_1.getPetById);
exports.default = router;
