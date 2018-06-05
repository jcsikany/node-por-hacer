const fs = require('fs');




let listadoPorHacer = [];


const getListado = () => {

    cargarDB();
    return listadoPorHacer

}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err)=>{
        if(err) throw new Error('No se pudo gragar', err);
    } )

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {

        listadoPorHacer = [];   

    }    
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    //Le digo q me de el index o la posicion de la tarea si la descripcion d la tarea coincide
    //Si no coincide va a devolver un -1
    let index = listadoPorHacer.findIndex( tarea => {

        return tarea.descripcion === descripcion;        
    });

    if ( index >= 0 ){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if(index >=0 ){

        listadoPorHacer.splice(index,1);
        guardarDB();
        return 'Eliminado'
    }else{
        return 'Nada para eliminar';
    } 
}



module.exports = {
    crear, getListado, actualizar, borrar
}