//=========================
//puerto
//=========================

process.env.PORT = process.env.PORT || 3000;

//=========================
//Entorno
//=========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=========================
//Vencimiento del token
//=========================
//60 segundos
//60 min
//24 hr
//30 días
process.env.CADUCIDAD_TOKEN = '48h';


//=========================
//SEED de autenticación
//=========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//=========================
//Base de datos
//=========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//=========================
//google Client ID
//=========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '701628999229-0aim6dosm1994pcl329qpm7th03klqe3.apps.googleusercontent.com';