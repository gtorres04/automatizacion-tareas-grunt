module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        author: 'GOTS'
    });

    grunt.registerTask('nombrePrimeraTarea', 'Descripcion de mi primera tarea', function(){
        grunt.log.writeln("Hola esta es mi primera tarea en ejecucion por: "+grunt.config('author'));
    });
}