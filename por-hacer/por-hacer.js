const fs = require('fs');


let listadoPorHacer = [];

const guardadb = () => {

    let data = JSON.stringify(listadoPorHacer);
    console.log(data);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
        else {
            console.log('./db/data.json');
        }

    })
}


const cargardb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];

    }



}

const crear = (descripcion) => {

    cargardb();
    let porHacer = {

        descripcion,
        completado: 'false'
    };

    listadoPorHacer.push(porHacer);
    guardadb();


    return (porHacer);



}


const getListado = () => {

    cargardb();
    return listadoPorHacer;
}




const actualizar = (descripcion, completado) => {

    cargardb();
    let index = listadoPorHacer.findIndex(tarea => {

            return tarea.descripcion === descripcion;
        }

    )

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardadb();
        return true;
    } else
        return false;
}


const borrar = (descripcion) => {
    cargardb();
    console.log("Entre aqui");
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });


    if (listadoPorHacer.length === nuevoListado.length) {

        return false;
    } else {

        listadoPorHacer = nuevoListado;
        guardadb();
        return true;
    }







}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}