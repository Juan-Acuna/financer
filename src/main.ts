import Servidor from "./core/Servidor";


const servidor = new Servidor(process.env.PORT || '8000');
servidor.start();

