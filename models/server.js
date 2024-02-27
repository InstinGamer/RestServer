const express = require('express');
const cors = require('cors');

require('dotenv').config();

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //MIDDLEWARES
        this.middlewares();

        this.app.use(express.json())

        //RUTAS DE MI APLICACION
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use('/api/user', require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;