function getPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>createPhotoApi(data))
}

function createPhotoApi(PhotoApi){
    const mainSec = document.getElementById('photo-api')
    for(const photo of PhotoApi){
        const newPhoto = document.createElement('div');
        newPhoto.classList.add('photo-style');
        newPhoto.innerHTML=`
        <img src="${photo.url}"  width="100" height="100">
        <h3>title: ${photo.title} </h3>
        
        `
        mainSec.appendChild(newPhoto)
    }
}


getPhoto()