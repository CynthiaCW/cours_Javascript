// gallery v 02 

let monImage = document.getElementById('monImage')

let btnPrev = document.getElementById('prevBtn')
let btnNext = document.getElementById('nextBtn')

btnPrev.addEventListener('click',prevImage)
btnNext.addEventListener('click',nextImage)

let mesImages = [
				'Sequence1.jpg',
				'Sequence3.jpg',
				'Sequence5.jpg',
				'Sequence6.jpg',
				'https://i.imgur.com/WlaXfua.gif',
				'https://images.unsplash.com/photo-1548280210-741c035fad0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
			]
let dureeDiaporamaEnMs = 1000


let compteur = 0 // ne pas toucher cette var

let debut    = 0 // si la première est Sequence1
let nbImage  = mesImages.length-1 // désormais automatique 


/*
NE RIEN MODIFIER SOUS CETTE LIGNE
--------
LAISSEZ LES PROFESSIONNELS
*/
function prevImage(){
	console.log('compteur: ',compteur)
	if(compteur<=debut){
		compteur=nbImage
	}else{
		compteur--
	}
	monImage.src ='img/'+mesImages[compteur]
}

function nextImage(){
	
	if(compteur==nbImage){ // je reviens au début
		compteur=debut
	}else{
		compteur++
	}
	monImage.src =mesImages[compteur]
	console.log('compteur: ',compteur)	
}


let playBtn = document.getElementById('playBtn')
playBtn.addEventListener('click',startDiaporama)

// à l'initialisation le diaporama n'est pas entrain de jouer

let isPlaying = false
// on set donc à false 

// on crée l'interval en dehors de la fonction à l'initialisation
let intervalID = 0 //!!!!!!!!!!!!!!!!!!!!!P O U R Q U O I!!!!!!!!!!!!!!!!!!!! 0?

function startDiaporama(){

	if(isPlaying){
		// je "tue" mon setInterval 
		// c-a-d je met en pause le diaporama
		clearInterval(intervalID)
		console.log('STOP')
		isPlaying = false
		playBtn.textContent = '▶'
	}else{
		isPlaying = true
		playBtn.textContent = '⏸'
		intervalID = setInterval(nextImage, dureeDiaporamaEnMs) 
	}

	
}
