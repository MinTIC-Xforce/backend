const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./conections/conn.js')
const esquemaProducts = require("./dal/models/products.js");
const { updateOne } = require("./dal/models/products.js");



const app = express()
const port = 5001

app.listen(port, () => {
    console.log("Mi aplicacion se esta ejecutando en el puerto: "+ port)
})

//conectar bd
mongoose.connect(db.mongoURL,{ useNewUrlParser: true },function (err) {
 
    if (err) throw err;
  
    console.log('Successfully connected');
  
 });


app.use(bodyParser.json())

app.get('/',(req, res) =>{
    res.send('Bienvenidos a este microservicio')
})

//get AdminLista de todos los productos

app.get('/Products', (req, res) => {
    esquemaProducts.find(function (err, esquemaProducts) {
        if (err) return console.error(err)
        res.send(esquemaProducts);
    })

})

//get Clientes lista de los productos con stock
app.get('/ProductsStock', (req, res) => {
    esquemaProducts.find({ stock: { $gte: 1 } }, function (err, esquemaProducts) {
        if (err) return console.error(err)
        res.send(esquemaProducts);
    })

})


//post para crear nuevos productos
app.put('/createProduct',(req,res) => {
    esquemaProducts.insertMany([{
        id: "PROC-1",
        nombre: "Pan",
        stock:  "String",
        descripcion: "Pan de la casa",
        valor: "5000",
        imagen: "ja"}])
    res.send(esquemaProducts).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
})





//put para actualizar el stock
app.put('/ModifyStock', (req, res) => {
    //id del producto a modifcar
    //nueva cantidad de stock

    esquemaProducts.updateOne({ id: "PROD-001" }, { stock: "2000" }, function (err) {
        if (err) return console.error(err);

    })
    res.send("Dato Actualizado")

})

//put para actulziar los productos


