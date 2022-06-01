function OpenDataBase()

function CrearDB() {
    db = window.openDatabase("Clientes", "1.0", "Lista Clientes", 1000000);
}
document.addEventListener("deviceready", InicioDispositivo, false);


function InicioDispositivo() {
db = window.openDatabase("Clientes", "1.0", "Lista Clientes", 1000000);
}

function Iniciando() {
    document.addEventListener("deviceready", ConfigurarApp(), false);
}


function ConfiguraAPP() {
    document.addEventListener("resume", OtraFuncion(), false);    
}
    
function Transaction()