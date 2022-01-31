console.log('cardBattle')

// On recupere les elements

//Life level Raymond

let barreDeVieR = document.querySelector(".mainCard>.content_display>.life_progress::-webkit-progress-bar") 
// let leBtnAttack = document.querySelector()
let leBtnAttackR = document.querySelector(".footer__action>.btn_attack")


//barreDeVieR.style.background = 'rgb(253, 71, 16)'

/*let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.querySelector(".mainCard>.content_display>.life_progress::-webkit-progress-bar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}*/



//Life level Jacqueline

let barreDeVieJ = document.querySelector(".content_display>.life_progress")


//barreDeVieJ.style.background = 'rgb(253, 71, 16)'


leBtnAttackR.classList.toggle()