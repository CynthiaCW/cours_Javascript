console.log('thumbnailsApp')  


//Image thumnails

let THUMBNAILS = [ //Quand on declare une constante, c'est en majuscule
 /*0*/   'https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
 /*1*/   'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
 /*2*/   'https://images.unsplash.com/photo-1611457962168-9679dc470c49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
 /*3*/   'https://images.unsplash.com/photo-1611149469739-cf4647d61f07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
 /*4*/   'https://images.unsplash.com/photo-1566573208827-3aa9eadf0ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
];

/*
let cardBody = document.createElement('img')

  imgThum.src = THUMBNAILS[0]

document.querySelector('.card-body').append(imgThum);  

// cardBody.classList.add(".card-body")

for (let i = 0; i < THUMBNAILS.length; i++) {
    
    let imgThum = THUMBNAILS[i]
    imgT.classList.add('img-group-item')
    divCard.append(img)
    
    document.querySelector('.card-body').append(imgThum[i]);
      
}
*/

// On va chercher dans un tableau la source de l'image 

let card = document.querySelector('.card-body');

for (let i=0; i< THUMBNAILS.length; i++){

    // Chaque image avec l'index en fonction du nombre des éléments du tableau
      let imgSource = THUMBNAILS[i];
      let photos = document.createElement('img') //On déclare la variable photos et on dit qu'elle est egaleme a création de l'element 'img' dans le HTML

        //Il faut dire que la source de chaque img correspond a un index du tableau
        photos.src = imgSource;
        photos.style.margin = '5px';
        card.append(photos);


    photos.addEventListener('click', function(){
      console.log(i)
    })
}







/*
let leUl = document.createElement('ul')
leUl.classList.add("list-group")


for (var i = 0; i < TREKS.length; i++) {
    let leTrek = TREKS[i]
    let li = document.createElement('li')
    li.textContent = TREKS[i]
    leUl.append(li)
    li.classList.add('list-group-item')
    
    console.log(leTrek)
}

let cardBody = document.querySelector('.card-body')

document.querySelector('').append(leUl)   */