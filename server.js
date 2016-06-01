// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var mongojs = require('mongojs');            // mongojs for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/html/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================
	// api ---------------------------------------------------------------------
	

// application -------------------------------------------------------------
/*
██████╗ ██╗   ██╗████████╗ █████╗ ███████╗
██╔══██╗██║   ██║╚══██╔══╝██╔══██╗██╔════╝
██████╔╝██║   ██║   ██║   ███████║███████╗
██╔══██╗██║   ██║   ██║   ██╔══██║╚════██║
██║  ██║╚██████╔╝   ██║   ██║  ██║███████║
╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚══════╝
Copiar este código y pegar abajo respetando un orden lexicográfico 
o alfabetico y sustituir Nombre_del_proyecto y NombreDelProyecto
app.get("/Proyectos/Nombre_del_proyecto",function(req, res) {
	res.sendfile(__dirname + '/public/html/NombreDelProyecto.html');
});*/
app.get("/",function(req, res) {
	res.sendfile(__dirname + '/public/html/home.html');
});
app.get("/Desarrollo_Sustentable",function(req, res) {
	res.sendfile(__dirname + '/public/html/ds.html');
});
app.get("/Objetivo",function(req, res) {
	res.sendfile(__dirname + '/public/html/objetivo.html');
});
app.get("/Proyectos",function(req, res) {
	res.sendfile(__dirname + '/public/html/proyectos.html');
});
app.get("/Proyectos/Azotea_verde",function(req, res) {
	res.sendfile(__dirname + '/public/html/azoteaVerde.html');
});
app.get("/Proyectos/Biblioteca_Vasconcelos",function(req, res) {
	res.sendfile(__dirname + '/public/html/bibliotecaVasconcelos.html');
});
app.get("/Proyectos/Biodiesel",function(req, res) {
	res.sendfile(__dirname + '/public/html/biodiesel.html');
});
app.get("/Proyectos/Cocina_sustentable",function(req, res) {
	res.sendfile(__dirname + '/public/html/cocinaSustentable.html');
});
app.get("/Proyectos/Container_City",function(req, res) {
	res.sendfile(__dirname + '/public/html/containerCity.html');
});
app.get("/Proyectos/Dame",function(req, res) {
	res.sendfile(__dirname + '/public/html/dameUnAventón.html');
});
app.get("/Proyectos/Dos_Patios",function(req, res) {
	res.sendfile(__dirname + '/public/html/dosPatios.html');
});
app.get("/Proyectos/EcoCasa",function(req, res) {
	res.sendfile(__dirname + '/public/html/proyecto1.html');
});
app.get("/Proyectos/Espacios",function(req, res) {
	res.sendfile(__dirname + '/public/html/espaciosOrgánicos.html');
});
app.get("/Proyectos/Estufa",function(req, res) {
	res.sendfile(__dirname + '/public/html/estufa.html');
});
app.get("/Proyectos/Foto",function(req, res) {
	res.sendfile(__dirname + '/public/html/fotodegradacion.html');
});
app.get("/Proyectos/Luxiuh",function(req, res) {
	res.sendfile(__dirname + '/public/html/luxiuh.html');
});
app.get("/Proyectos/NAMA",function(req, res) {
	res.sendfile(__dirname + '/public/html/proyecto5.html');
});
app.get("/Proyectos/PlantaE",function(req, res) {
	res.sendfile(__dirname + '/public/html/plantaE.html');
});
app.get("/Proyectos/Puente",function(req, res) {
	res.sendfile(__dirname + '/public/html/proyecto3.html');
});
app.get("/Proyectos/Reactores",function(req, res) {
	res.sendfile(__dirname + '/public/html/reactores.html');
});
app.get("/Proyectos/Sanitario",function(req, res) {
	res.sendfile(__dirname + '/public/html/sanitario.html');
});
app.get("/Proyectos/Tierra",function(req, res) {
	res.sendfile(__dirname + '/public/html/proyecto4.html');
});
app.get("/Proyectos/Torre_GSI",function(req, res) {
	res.sendfile(__dirname + '/public/html/proyecto2.html');
});
app.get("/Proyectos/Tu",function(req, res) {
	res.sendfile(__dirname + '/public/html/tuEnergía.html');
});
app.get("/Proyectos/TuboHotel",function(req, res) {
	res.sendfile(__dirname + '/public/html/tuboHotel.html');
});
app.get("/Proyectos/Vehicle",function(req, res) {
	res.sendfile(__dirname + '/public/html/vehiculo.html');
});

// listen (start app with node server.js) ======================================
app.listen(8090);
console.log("App listening on port 8090");