
import {createCard,createPagination} from './ui.js'
const pagination=document.querySelector('.pagination');
const URL="https://rickandmortyapi.com/api/";

createPagination();

async function requestFetch(url){    
    return fetch(url)
        .then(response=>response.json())
        .then(data=>data)
        .catch(error=>console.log(error))
}

async function GetCharacters(page=1){
    //requestFetch(`${URL}character/?page=${page}`)
        //.then(data=>{
            //showCharacters(data.results);
        //})
    const data=await requestFetch(`${URL}character/?page=${page}`);
    showCharacters(data.results);    
    }
    
async function getCharacterById(id, titleModal, bodyModal){
    requestFetch(`${ URL }character/${ id }`)
    .then(data=>{
        titleModal.innerHTML=data.name
        console.log(data)
        let htmlBody=`
        <img src="${data.image}">
        <p>${data.species}</p>
        <p>${data.origin.name}</p>
        `;
        htmlBody+=data.status==='Alive'? '<p><span class="badge text-bg-success">Live</span></p>':
        '<p><span class="badge text-bg-danger">Dead</span></p>';
        bodyModal.innerHTML=htmlBody;
    });
}


function showCharacters(personajes){
    const contenedor=document.querySelector('.characters');
    contenedor.innerHTML='';
    personajes.forEach(personaje=>{
        contenedor.appendChild(createCard(personaje));
    })
}   


function buttonAction(e){
    e.preventDefault()
    if(e.target.classList.contains('page-link')){
        const page=e.target.getAttribute('data-id');
        GetCharacters(page);
    }
    
}

function getButtonCard(e){
    e.preventDefault();
    if(e.target.classList.contains('btn')){
        const titleModal=document.querySelector('.modal-title');
        const bodyModal=document.querySelector('.modal-body');
        titleModal.innerHTML='Pading...';
        bodyModal.innerHTML='<i class="fa fa-refresh fa-spin fa-4"></i>'
        const id=e.target.getAttribute(`data-id`);
        
        getCharacterById(id, titleModal, bodyModal);
        

    }
}

pagination.innerHTML=createPagination();
GetCharacters();

pagination.addEventListener('click',buttonAction);
document.querySelector('.characters').addEventListener('click',getButtonCard);