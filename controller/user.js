const {response} = require('express');

const userGet = (req, res = response)=>{
    const {q, nombre = 'no name', apikey} = req.query;
    res.json({
        msj: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const userPost = (req, res = response)=>{
    const {nombre, edad} = req.body;
    res.json({
        msj: 'post API - controlador',
        nombre,
        edad
    });
}

const userPut = (req, res = response)=>{
    const id = req.params.id;
    res.json({
        msj: 'put API - controlador',
        id
    });
}

const userDelete = (req, res = response)=>{
    res.json({
        msj: 'delete API - controlador'
    });
}

const userPatch = (req, res = response)=>{
    res.json({
        msj: 'patch API - controlador'
    });
}

module.exports = {
    userGet, userPost, userPut, userDelete, userPatch
}