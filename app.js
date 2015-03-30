
/* Llamada a los paquetes necesitados */

var express = require('express'),
    bodyParser = require('body-parser'),
    app     = express(),
    morgan  = require('morgan');

/* Configutando app*/

app.use(morgan('dev'));

/*  Configuracion del parser*/

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

/************  Conexion BD MONGOdb  ************/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');
var users = require('./models/users');
var comment = require('./models/comment');


/*************** Routes para nuestra API     ***************/

var router = express.Router();

// middleware para todas las peticiones
router.use(function(req, res, next){
   console.log('Algo está pasando...');
    next();
});

//api por defecto para saber que hace algo
router.get('/',function(req, res){
   res.json({mensaje: 'Bienvenido a nuestra API!!'});
});


router.route('/users')
    /*crea un usuario*/
    .post(function(req,res){
       var usuario = new users();
        usuario.name = req.body.name;
        usuario.edad = req.body.edad;
        usuario.id = req.body.id;


        usuario.save(function(err){
            if(err) res.send(err);
            res.json({messaje: 'usuario creado'});
        });
    })

    .get(function(req, res){
        users.find(function(err, usuario){
            if(err) res.send(err);
            res.json(usuario);
        });
});




/************ Registrando los ROUTES */
app.use('/api',router);

/*************  Poniendo en marcha el Servidor: **************/
app.listen(3000, function () {
    console.log('API funcionando en http://localhost:3000/api');
});