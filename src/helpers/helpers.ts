import { Pet } from '../models/pet';
import Handlebars = require('handlebars');
import { getPetById } from '../controllers/petController';



Handlebars.registerHelper('dog', function (animalType) {
    if (animalType = 'Dog') {
        return
    }
})