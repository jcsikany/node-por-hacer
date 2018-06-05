const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    descripcion: {
        default: true,
        alias: 'c',
        desc:'Marca como completado o pendiente la tarea'
    }
}


const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {descripcion})               
                .command('actualizar', 'Actualiza el estado completo de una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borrar un elemento hecho', {descripcion})
                .help()
                .argv;

module.exports = {
    argv
}
