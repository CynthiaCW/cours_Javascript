console.log('rainbow')

let leHeader = document.querySelector('header')

let lesBtns  = document.querySelectorAll('#btn-container>.colorDiv')
console.log(lesBtns)



for (let i = 0; i < lesBtns.length; i++) {
	let unBtn = lesBtns[i] // un élément html 
	console.log(unBtn)
	unBtn.addEventListener('click',function(){
		console.log(unBtn.style.backgroundColor)
		//1er je veux enlever la classe selectedDiv 
		// à toutes les div 
		cleanDiv()

		//2ème étape 
		// on ajoute la classe selectedDiv SEULEMENT
		// sur la div cliquée
		unBtn.classList.add('selectedDiv')
		superChangeColor(unBtn.style.backgroundColor)
	})
}

function cleanDiv(){
	for (let i = 0; i < lesBtns.length; i++) {
			lesBtns[i].classList.remove('selectedDiv')
	}
}


// parenthèse et révision sur les boucles
// on implémente un filtre sur un tableau de note

let notes = [10,8,18,12,5]

let moyenneOnly = []
let onlyEven    = []

if(Array.isArray(notes)){

	for (let i = 0; i < notes.length; i++) {
		let laNote = notes[i]
		if(laNote>=10){
			moyenneOnly.push(laNote)
			console.log('la moyenne', laNote)
		}
		if(laNote%2==0) onlyEven.push(laNote)
	
	}
}



console.log(moyenneOnly)
console.log(onlyEven)

function superChangeColor(bgColor){
	console.log('superChangeColor')
	leHeader.style.backgroundColor = bgColor
}


/*
lesBtns[0].addEventListener('click',function(){
	superChangeColor('#0C4B54')
})
lesBtns[1].addEventListener('click',function(){
	superChangeColor('#15FF0D')
})
lesBtns[2].addEventListener('click',function(){
	superChangeColor('#F5EF0C')
})
lesBtns[3].addEventListener('click',function(){
	superChangeColor('#0D41FF')
})
lesBtns[4].addEventListener('click',function(){
	superChangeColor('#22D9F5')
})*/




