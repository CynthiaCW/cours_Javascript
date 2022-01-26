
// etape 1 : on récupère les éléments 
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#imgs img');


let idx = 0;

function changeImage(){

	if(idx> img.length-1){
		idx = 0;
	}else if(idx<0) {
		idx = img.length-1;
	}
	let translateVal = "translateX("+(-idx*500)+"px)";
	imgs.style.transform = translateVal;

}

function nextImage(){
	idx++;
	changeImage()
}

function prevImage(){
	idx--;	
	changeImage()
}

rightBtn.addEventListener('click',nextImage )
leftBtn.addEventListener('click',prevImage )