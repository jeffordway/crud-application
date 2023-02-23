"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.editPet = exports.editPetPage = exports.addPet = exports.addPetPage = exports.getPetById = exports.allPets = exports.defaultPets = void 0;
const pet_1 = require("../models/pet");
const notfoundError = 'Sorry the pet you are looking for cannot be found.';
const cannotUpdateError = `Sorry we cannot update this pet's information.  Please try again.`;
const defaultPets = (req, res, next) => {
    res.redirect('/pets');
};
exports.defaultPets = defaultPets;
const allPets = async (req, res, next) => {
    let petList = await pet_1.Pet.findAll();
    res.render('all-pets', { petList });
};
exports.allPets = allPets;
const getPetById = async (req, res, next) => {
    let pId = parseInt(req.params.petId);
    let selectedPet = await pet_1.Pet.findByPk(pId);
    if (selectedPet) {
        res.render('pet-details', { selectedPet });
    }
    else {
        res.status(404).render('error', { message: notfoundError });
    }
};
exports.getPetById = getPetById;
const addPetPage = (req, res, next) => {
    res.render('add-pet');
};
exports.addPetPage = addPetPage;
const addPet = async (req, res, next) => {
    let newPet = req.body;
    await pet_1.Pet.create(newPet);
    res.redirect('/pets');
};
exports.addPet = addPet;
const editPetPage = async (req, res, next) => {
    let pId = req.params.petId;
    let selectedPet = await pet_1.Pet.findByPk(pId);
    if (selectedPet) {
        res.render('edit-pet', { selectedPet });
    }
    else {
        res.status(404).render('error', { message: notfoundError });
    }
};
exports.editPetPage = editPetPage;
const editPet = async (req, res, next) => {
    let pId = req.params.petId;
    let updatedPet = req.body;
    let [updated] = await pet_1.Pet.update(updatedPet, {
        where: { petId: pId }
    });
    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: cannotUpdateError });
    }
};
exports.editPet = editPet;
const deletePet = async (req, res, next) => {
    let pId = req.params.petId;
    let deleted = await pet_1.Pet.destroy({
        where: { petId: pId }
    });
    if (deleted) {
        res.redirect('all-pets');
    }
    else {
        res.status(404).render('error', { message: notfoundError });
    }
};
exports.deletePet = deletePet;
