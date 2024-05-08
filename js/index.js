var audioControl = document.getElementById("audioControl");
var iconButton = document.getElementById("iconButton");
var zoneName = document.getElementById("zoneName");
var zoneSubTittle = document.getElementById("zoneSubTittle");
var zoneImage = document.getElementById("zoneImage");
var zoneBackground = document.getElementById("zoneBackground");
var loreInfoText = document.getElementById("lore-info-text");

var objectName = document.getElementById("objectName");
var weaponName = document.getElementById("weaponName");
var bossName = document.getElementById("bossName");

var modal = document.getElementById("modal");

var TopMenu = document.getElementById("TopMenu");






let zoneBackgroundA = ["url(./assets/images/Precaronte.png)", "url(./assets/images/Limbo.png)",
                        "url(./assets/images/Violencia.png)"];

let zoneImageA = ["./assets/images/Precaronte.png", "./assets/images/Limbo.png", "./assets/images/Violencia.png"];
let zoneNameA = ["Aqueronte", "Limbo", "Violencia"];
let zoneSubTittleA = ["Las almas en cobardía", "El valle del silencio", "El bosque estéril"];

let loreInfoTextA = ["En esta zona, se encuentran los cobardes que nada sirvieron en la vida. Estas almas no están ni dentro ni fuera del infierno, pues se trata del Aqueronte, Lugar donde Caronte, el barquero infernal, transporta las almas al lugar de su suplicio a la otra margen del Aqueronte.",
                    "Este es el primer circuo del infierno. Encuentra allí las almas que vivieron virtuosamente, pero que están excluídas del paraíso por no haber recibido el agua del bautismo. Los grandes poetas antiguos. Los espíritus magnos.",
                    "El nido de las arpías. Los arboles doloridos. Segunda zona de los violentos contra si mismos y su castigo. Diálogo con Pedro de las Viñas. Dos almas perseguidas por perros hambrientos. Castigo de los suicidas y de los destructores de bienes. Estado futuro y tormento perpetuo de los suicidas después del juicio final."]

let objectNameA = ["Ninguno", "Lámpara", "Objeto"];
let weaponNameA = ["Ninguno", "Lanza", "Arco"];
let bossNameA = ["Caronte", "Julio César", "Centauro"];

var carouselIndex = 0;

loreInfoText.innerHTML = loreInfoTextA[carouselIndex];
zoneBackground.style.backgroundImage = zoneBackgroundA[carouselIndex];
zoneImage.src = zoneImageA[carouselIndex];
zoneName.innerHTML = zoneNameA[carouselIndex];

zoneSubTittle.innerHTML = zoneSubTittleA[carouselIndex];

/*
var options_str = "";

cars.forEach( function(car) {
  options_str += '<option value="' + car + '">' + car + '</option>';
});

sel.innerHTML = options_str;
*/








// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
  
    } 
  };
  
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();


console.log("estoy funcionando");
objectName.innerHTML = objectNameA[carouselIndex];
weaponName.innerHTML = weaponNameA[carouselIndex];
bossName.innerHTML = bossNameA[carouselIndex];

function pausar() {
    console.log("audio");
    if (audioControl.paused) {
        audioControl.play();
        iconButton.src = "./assets/MusicActive.png"
    } else {
        audioControl.pause();
        iconButton.src = "./assets/MusicDesactive.png"
    }
}

function popup(){
    console.log("mentita");
    if(modal.style.display == "flex"){
      console.log("flexeo")
      modal.style.display = "none"
    }
    else{
      console.log("no flexeo")
      modal.style.display = "flex"
    }
}

function TopBar(){

  if(TopMenu.style.display == "flex"){
    console.log("flexeo")
    TopMenu.style.display = "none"
  }
  else{
    console.log("no flexeo")
    TopMenu.style.display = "flex"
  }

}

function nextObject() {

    carouselIndex++;
    if (carouselIndex >= zoneNameA.length) {
        carouselIndex = 0;
    }

    zoneBackground.style.backgroundImage = zoneBackgroundA[carouselIndex];
    zoneImage.src = zoneImageA[carouselIndex];
    zoneName.innerHTML = zoneNameA[carouselIndex];
    zoneSubTittle.innerHTML = zoneSubTittleA[carouselIndex];

    loreInfoText.innerHTML = loreInfoTextA[carouselIndex];

    objectName.innerHTML = objectNameA[carouselIndex];
    weaponName.innerHTML = weaponNameA[carouselIndex];
    bossName.innerHTML = bossNameA[carouselIndex];
    console.log("funciono next " + carouselIndex);

}

function prevObject() {
    carouselIndex--;
    if (carouselIndex < 0) {
        carouselIndex = zoneNameA.length - 1;
    }
    zoneBackground.style.backgroundImage = zoneBackgroundA[carouselIndex];
    zoneImage.src = zoneImageA[carouselIndex];
    zoneName.innerHTML = zoneNameA[carouselIndex];
    zoneSubTittle.innerHTML = zoneSubTittleA[carouselIndex];

    loreInfoText.innerHTML = loreInfoTextA[carouselIndex];

    objectName.innerHTML = objectNameA[carouselIndex];
    weaponName.innerHTML = weaponNameA[carouselIndex];
    bossName.innerHTML = bossNameA[carouselIndex];

    console.log("funciono prev " + carouselIndex);
}



