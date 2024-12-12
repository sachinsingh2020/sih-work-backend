import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import ErrorMiddleware from './middlewares/Error.js';

// Load environment variables
config({
    path: './config/config.env',
});

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Setup CORS to allow all origins
app.use(cors({
    origin: '*', // Allow all origins
    credentials: false, // Disable credentials for public APIs
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
}));

// Importing routes
import agProdCont from './routes/agricultureProductRoutes.js';
import waterFootPrintCont from './routes/waterFootPrintRoutes.js';
import cropTypeCont from './routes/cropTypeRoutes.js';

// Use routes
app.use('/api/', agProdCont);
app.use('/api/', waterFootPrintCont);
app.use('/api/', cropTypeCont);

// Default route
app.get('/', (req, res) => {
    res.send('Server is working and publicly accessible!');
});

// Error handling middleware
app.use(ErrorMiddleware);

export default app;
