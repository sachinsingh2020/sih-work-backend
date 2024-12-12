import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ErrorMiddleware from './middlewares/Error.js';
import morgan from 'morgan';

config({
    path: "./config/config.env",
})

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cookieParser());

// Setup CORS to handle multiple origins
const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:3000"];
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (e.g., mobile apps, curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Importing and using routes 
import agProdCont from "./routes/agricultureProductRoutes.js"
import waterFootPrintCont from "./routes/waterFootPrintRoutes.js"
import cropTypeCont from "./routes/cropTypeRoutes.js"

app.use('/api/', agProdCont);
app.use('/api/', waterFootPrintCont);
app.use('/api/', cropTypeCont);


// Printing server is working 
app.get('/', (req, res) => {
    res.send('Server is working');
})

export default app;

app.use(ErrorMiddleware);
