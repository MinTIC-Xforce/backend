import express from 'express';
import productsRoutes from './routes/products.routes.js';
import clientsRoutes from './routes/clients.routes.js';
import salesRoutes from './routes/sales.routes.js';
import authRoutes from './routes/auth.routes.js';
import CORS from 'Cors'



const app = express();

//middlewares
app.use(express.json());
app.use(CORS());

//routes
app.use(productsRoutes)
app.use(clientsRoutes)
app.use(salesRoutes)
app.use(authRoutes)


export default app;