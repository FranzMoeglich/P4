// const kan ikke ændres til ny værdig
//querySelect ligesom getelementbyid men til class og sårn. all flere elementer
const slider = document.querySelectorAll(".slider img")

// index af slide
let slideIndex = 0;
let intervalId = null;

run();

function run(){
//cheker hvis slider lenght er større end nul
        if(slider.length > 0){
// slideIndex, hvliken slide den er på
       slider[slideIndex].classList.add("displaySlide");
//setInteval udfører en funktion gentagende med et interval
        intervalId = setInterval(nextSlide, 5354);
    }
}

function vis(index){
// cheker om index er højre end antal slide, og sætte den til nul vis den er 
    if(index >= slider.length){
      slideIndex = 0;
    }
// cheker om index er under nul, og sætte den til sidste slide vis den er 
    else if(index < 0) {
      slideIndex = slider.length - 1;
    } 
// Looper igennem de forskellige slides
    for(let i = 0; i < slider.length; i++){
// fjerne displayslide, så slide forgående slide ikke bliver vist
      slider[i].classList.remove('displaySlide');
    }
// tilføjer displayslide så nuværende slide bliver synligt
    slider[slideIndex].classList.add('displaySlide');
  }
//minusser slide index med en = går til forgående slide
function before(){
    slideIndex--;
    vis(slideIndex);
}
//øger slideIndex med en, går til næste slide
function nextSlide(){
    slideIndex++;
    vis(slideIndex);
}


