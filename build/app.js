"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const petController_1 = require("./controllers/petController");
const petRoutes_1 = __importDefault(require("./routes/petRoutes"));
const models_1 = require("./models");
//application setup as express
const app = (0, express_1.default)();
//morgan middleware for logging
app.use((0, morgan_1.default)('dev'));
//application uses express middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//public folder to serve static files.
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public')));
//hbs view engine
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.set('view options', { layout: 'layout' });
//routing middleware
app.use('/pets', petRoutes_1.default);
app.use('/', petController_1.defaultPets);
//syncing mySQL database
models_1.db.sync().then(() => {
    console.log('SUCCESS: You are connected to the database.');
});
//default 404 error handler
app.use((req, res, next) => {
    res.status(404).render('error', {
        message: `Oops, we cannot find the page your are looking for!`
    });
});
//server listen on port 3000
app.listen(3000);
