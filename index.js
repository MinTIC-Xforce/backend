import { DBconnection } from "./conections/conn.js";
import { PORT } from './config/development.js';
import app from './app.js';



DBconnection();
app.listen(PORT);
console.log("Server listening on port", PORT);