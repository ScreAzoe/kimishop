'use strict'



var mongoose= require('mongoose'); //cargando moongose
var app= require('./app');
var port= 3700;

mongoose.Promise= global.Promise;
mongoose.connect("mongodb://0.0.0.0:27017/kimishop")
	.then(()=> {
		console.log("Conexión a la base de datos establecida con  en 0.0.0.0...");
		//Creación del servidor
		app.listen(port,"0.0.0.0", ()=> {
			console.log("Servidor corriendo correctamente en la url: localhost:3700")
		})//listen de express

	})
	.catch(err => console.log(err));


	//mongodb+srv://admin:k1m1s1t4@kimishop.4py9p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
