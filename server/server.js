import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import connectMongoDb from './db/connectMongoDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //To parse form data
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Add a route for the root URL
app.get('/', (req, res) => {
        res.send('Welcome to the home page!');
});

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        connectMongoDb();
});
