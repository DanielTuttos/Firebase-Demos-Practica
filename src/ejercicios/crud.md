# referencia al documento
const usuariosRef = db.collection('usuarios');

## objeto
const usuario = {
    nombre: 'andreina',
    active: false,
    fechaNaci: 0,
    salario: 2000
}


## insertar registros
db.collection('usuarios')
    .add(usuario)
    .then(docRef => {
        console.log(docRef.delete());
    })
    .catch(e => console.error(e));

## actualizar registro
usuariosRef.doc('s42Tc6FwmvHHnG5vR6FP')
    .update({
        activo: false
    });

## actualiza un registro de manera destructiva, borra los demas campos del registro
usuariosRef.doc('s42Tc6FwmvHHnG5vR6FP')
    .set({
        activo: false
    })

## eliminar
usuariosRef.doc('s42Tc6FwmvHHnG5vR6FP')
    .delete()
    .then(() => console.log('Se borro correctamente'))
    .catch(console.log);

## leer registros / seleccionando registros
 usuariosRef
     .onSnapshot(retornaDocumentos)

## no escuchar el cambio
usuariosRef
     .get().then(retornaDocumentos);



## clausula where para condiciones
/*
    select * from usuarios where activo = true
*/
usuariosRef.where('active', '==', true).get().then(retornaDocumentos);

/*
    select * from usuarios where salario > 1800
*/
usuariosRef.where('salario', '>', 1800).get().then(retornaDocumentos);


/*
    select * from usuarios 
        -- where salario > 1800 and salario < 2300
        where salario between 1800 and 2300
*/
usuariosRef.where('salario', '>=', 1800)
    .where('salario', '<=', 2300)
    .get().then(retornaDocumentos);

/*
    select * from usuarios 
        -- where salario > 1800 
        and active = true
        
*/
usuariosRef.where('salario', '>=', 1800)
    .where('active', '==', true)
    .get().then(retornaDocumentos);


## orderby


usuariosRef.orderBy('nombre')
    .orderBy('salario')
    .get().then(retornaDocumentos);