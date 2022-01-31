// Je déclare mes variables

let monImage = document.getElementById('monImage')

let btnPrev = document.getElementById('prevBtn')
let btnNext = document.getElementById('nextBtn')

// J'ajoute une évenement au click de de mon bouton
btnPrev.addEventListener('click',prevImage)
btnNext.addEventListener('click',nextImage)

let compteur = 1 // ne pas toucher cette var

let debut    = 1 // si la première est Sequence1
let nbImage  = 10 // modifier si plus ou moins de 10 photos


/*
NE RIEN MODIFIER SOUS CETTE LIGNE
--------
LAISSEZ LES PROFESSIONNELS
*/

//Function pour image precedente 
function prevImage(){
	console.log('compteur: ',compteur)
	if(compteur<=1){						//Si le compteur est inf ou egal à 1
		compteur=nbImage					//valeur du compteur est egale au nb d'image
	}else{
		compteur--							//Sinon compteur -1(soustraction avec --)
	}
	monImage.src ="Sequence"+compteur+".jpg" //On recupere la src de l'image et on affiche le compteur (quand on click sur precedent) 
	
}

//Function pour image suivante 
function nextImage(){
	
	if(compteur==nbImage){ // je reviens au début
		compteur=debut
	}else{
		compteur++
	}

	monImage.src ="Sequence"+compteur+".jpg"
	console.log('compteur: ',compteur)	
}

// Pour le diaporama

let playBtn = document.getElementById('playBtn')
playBtn.addEventListener('click',startDiaporama)

// à l'initialisation le diaporama n'est pas entrain de jouer

let isPlaying = false
// on set donc à false 

let intervalID = 0

function startDiaporama(){

	if(isPlaying){
		// je "tue" mon setInterval c-a-d je met en pause le diaporama
		clearInterval(intervalID)
		console.log('STOP')
		isPlaying = false  //j'appelle monisPlaying
		playBtn.textContent = '▶'
	}else{
		isPlaying = true
		playBtn.textContent = '⏸'
		intervalID = setInterval(nextImage, 1500) //<--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 1500?
	}
	
}


// clearInterval(intervalID)