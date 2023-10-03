const teams=["Liverpool","Dortmun","Chelsie"];

setTimeout(()=>console.log('Tarea asinrona'),2000);

console.log('Sigue ejecutando');
console.log(teams);

function  getTeam(){
    return teams;
}

function asincGeTeams(){
    setTimeout(()=>teams,2000);
}

console.log(getTeam());
console.log('Final del codigo uwu')

console.log(asincGeTeams());
console.log('Termino el  llamado de la funcion :D')