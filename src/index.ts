import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrarDocumentos';

const faker = require('faker');

faker.locale = "es";

const usuariosRef = db.collection('usuarios');

function curpRandom(limit = 10) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < limit; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const registrarUsuarios = () => {
    for (let i = 0; i <= 2; i++) {
        const usuario = {
            curp: curpRandom(),
            date: Date.now(),
            lastName: faker.name.lastName(),
            name: faker.name.firstName(),
            rango: 'Directivo',
            escuela: {
                id: '7BsJ8ikPUIN85dwMicLQ'
            }
        }

        console.log(usuario);
        usuariosRef
            .add(usuario)
            .then(docRef => console.log('creado'))
            .catch(e => console.error(e));
    }
}
//registrarUsuarios();

const obtenerUsuarios = () => {
    usuariosRef
        .onSnapshot(retornaDocumentos);
}

// obtenerUsuarios();

//obtiene todos los directivos en general de todas las escuelas
usuariosRef
    .where('rango', '==', 'Directivo').
    onSnapshot(retornaDocumentos);

// obtiene los usuarios de la primera escuela 43YffzSHtJZP10eVWh3t
usuariosRef
    .where('rango', '==', 'Directivo')
    .where('escuela.id', '==', '43YffzSHtJZP10eVWh3t')
    .onSnapshot(retornaDocumentos);

//obtiene los usuarios de la segunda escuela
usuariosRef
    .where('rango', '==', 'Directivo')
    .where('escuela.id', '==', '7BsJ8ikPUIN85dwMicLQ')
    .onSnapshot(retornaDocumentos);