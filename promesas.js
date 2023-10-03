const datos=[1,2,3,4,5];

const getDataPromise=new Promise(
    (resolve,reject)=>{
        setTimeout(()=>{
            reject('No se pudo :(')
        },3000);
    }
);

//console.log(getDataPromise);

console.log('Iniciar la promesa :D ')
getDataPromise.then((result)=>{
    console.log(result);
    console.log('Termina la promesa D:')
}).catch(error=>console.log(error));