import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrarDocumentos';

const usuariosRef = db.collection('usuarios');

usuariosRef.orderBy('nombre')
    .get().then(retornaDocumentos);