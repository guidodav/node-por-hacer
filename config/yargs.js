const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'

}


const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'


}


const argv = require('yargs')
    .command('crear', 'Crear las tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea de acuerdo a su descripcion', {
        descripcion
    })

.help()
    .argv;

module.exports = {

    argv
}