import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import { defaultPets } from './controllers/petController';
import petRoutes from './routes/petRoutes';
import { db } from './models';


//application setup as express
const app = express();

//morgan middleware for logging
app.use(morgan('dev'));

//application uses express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//public folder to serve static files.
app.use(express.static(path.join(__dirname, '../src/public')));

//hbs view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../src/views'));
app.set('view options', { layout: 'layout' });

//routing middleware
app.use('/pets', petRoutes);
app.use('/', defaultPets);

//syncing mySQL database
db.sync().then(() => {
    console.log('SUCCESS: You are connected to the database.')
})

//default 404 error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: `Oops, we cannot find the page your are looking for!`
    })
});

//server listen on port 3000
app.listen(3000);