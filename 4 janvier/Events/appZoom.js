
let monImage = document.getElementById('monImage')
let btnPlus  = document.getElementById('btnPlus')
let btnMoins = document.getElementById('btnMoins')


btnPlus.addEventListener('click',zoomIn)
btnMoins.addEventListener('click',zoomOut)

let scale = 1

function testEvent(){
	console.log('via addEventListener')
}

function zoomIn(){
	// monImage.style.width = (monImage.width+10)+'px'
	scale+=0.02
	monImage.style.transform ='scale('+scale+')'

	console.log(monImage.style.transform)

}

function zoomOut(){
	scale-=0.02
	monImage.style.transform ='scale('+scale+')'
	// console.log('ça zooom')
}


// onclick 

// css scale() !