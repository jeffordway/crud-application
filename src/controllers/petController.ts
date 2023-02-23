import { RequestHandler } from "express";
import { Pet } from "../models/pet";

const notfoundError = 'Sorry the pet you are looking for cannot be found.'
const cannotUpdateError = `Sorry we cannot update this pet's information.  Please try again.`


export const defaultPets: RequestHandler = (req, res, next) => {

    res.redirect('/pets');
};

export const allPets: RequestHandler = async (req, res, next) => {

    let petList: Pet[] = await Pet.findAll();
    res.render('all-pets', { petList })
};

export const getPetById: RequestHandler = async (req, res, next) => {

    let pId = parseInt(req.params.petId);

    let selectedPet: Pet | null = await Pet.findByPk(pId)

    if (selectedPet) {
        res.render('pet-details', { selectedPet })
    }
    else {
        res.status(404).render('error', { message: notfoundError })
    }
};

export const addPetPage: RequestHandler = (req, res, next) => {

    res.render('add-pet');
};

export const addPet: RequestHandler = async (req, res, next) => {

    let newPet: Pet = req.body;
    await Pet.create(newPet);

    res.redirect('/pets');
};

export const editPetPage: RequestHandler = async (req, res, next) => {

    let pId = req.params.petId;

    let selectedPet: Pet | null = await Pet.findByPk(pId);

    if (selectedPet) {
        res.render('edit-pet', { selectedPet })
    }
    else {
        res.status(404).render('error', { message: notfoundError })
    }
};

export const editPet: RequestHandler = async (req, res, next) => {

    let pId = req.params.petId;

    let updatedPet: Pet = req.body;

    let [updated] = await Pet.update(updatedPet, {
        where: { petId: pId }
    });

    if (updated === 1) {
        res.redirect('/pets')
    }
    else {
        res.render('error', { message: cannotUpdateError })
    }
};

export const deletePet: RequestHandler = async (req, res, next) => {

    let pId = req.params.petId;

    let deleted = await Pet.destroy({
        where: { petId: pId }
    })

    if (deleted) {
        res.redirect('all-pets')
    }
    else {
        res.status(404).render('error', { message: notfoundError })
    }
};


