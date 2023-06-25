let aMoon, aMars, aEuropa, aTitan, firstSection, secondSection, titre1, pMoon, pDistance, pDistance2, pTTimes, pTTimes2,crewPost,crewName,crewBio,crewImg,sectionImgContaineur,div1,div2,div3,div4,technologyTitre,technologyDescription,imgTechnology,tdiv1,tdiv2,tdiv3,tp1,tp2,tp3,pHome,firstCross,secondCross,middleCross,header,headerButton

window.addEventListener("DOMContentLoaded", function() {
  aMoon = document.querySelector(".aMoon")
  aMars = document.querySelector(".aMars")
  aEuropa = document.querySelector(".aEuropa")
  aTitan = document.querySelector(".aTitan")
  firstSection = document.querySelector(".firstSection")
  secondSection = document.querySelector(".secondSection")
  titre1 = document.querySelector(".titre1")
  pMoon = document.querySelector(".pMoon")
  pDistance = document.querySelector(".pDistance")
  pDistance2 = document.querySelector(".pDistance2")
  pTTimes = document.querySelector(".pTTimes")
  pTTimes2 = document.querySelector(".pTTimes2")
  crewPost = document.getElementById("crew-post")
  crewName = document.getElementById("crew-name")
  crewBio = document.getElementById("crew-bio")
  crewImg = document.getElementById("crew-images")
  sectionImgContaineur = document.querySelector(".sectionImgContaineur")
  div1 = document.querySelector(".div1")
  div2 = document.querySelector(".div2")
  div3 = document.querySelector(".div3")
  div4 = document.querySelector(".div4")
  technologyTitre = document.querySelector(".technologyTitre")
  technologyDescription = document.querySelector(".technologyDescription")
  imgTechnology = document.querySelector(".imgTechnology")
  tdiv1 = document.querySelector(".tdiv1")
  tdiv2 = document.querySelector(".tdiv2")
  tdiv3 = document.querySelector(".tdiv3")
  tp1 = document.querySelector(".tp1")
  tp2 = document.querySelector(".tp2")
  tp3 = document.querySelector(".tp3")
  pHome = document.querySelector("pHome")
  firstCross = document.querySelector(".firstCross")
  secondCross = document.querySelector(".secondCross")
  middleCross = document.querySelector(".midleCross")
  header = document.querySelector("header")
  headerButton = document.querySelector(".headerButton")
  headerButton.addEventListener("click", toggleHeader)
})

 




function afficheMoon(){
  
  //Enlever les bordures des autres liens
  aMars.style.borderBottom = "none"
  aEuropa.style.borderBottom = "none"
  aTitan.style.borderBottom = "none"

  //mettre la bordure sur le lien moon
  aMoon.style.borderBottom = "3px solid white"

  //Changer l'image de fond de la premiere section
  firstSection.style.backgroundImage = "url(assets/destination/image-moon.png)"

  //Mettre a jour le contenue de a deuxieme section
  titre1.textContent = "MOON"
  pMoon.innerHTML = "See our planet as you’ve never seen it before. A perfect <br>relaxing trip away to help regain perspective and come <br>back refreshed. While you’re there, take in some history <br>by visiting the Luna 2 and Apollo 11 landing sites."
  pDistance2.textContent = "384,400 km"
  pTTimes2.textContent = "3 days"
}

function afficheMars(){
  
  //Enlever les bordures des autres liens
  aMoon.style.borderBottom = "none"
  aEuropa.style.borderBottom = "none"
  aTitan.style.borderBottom = "none"

  //mettre la bordure sur le lien mars
  aMars.style.borderBottom = "3px solid white"

  //Changer l'image de fond de la premiere section
  firstSection.style.backgroundImage = "url(assets/destination/image-mars.png)"

  //Mettre a jour le contenue de a deuxieme section
  titre1.textContent = "MARS"
  pMoon.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to <br>tackle Olympus Mons, the tallest planetary mountain in <br>our solar system. It’s two and a half times the size of <br>Everest!"
  pDistance2.textContent = "225 MIL. km"
  pTTimes2.textContent = "9 months"
}

function afficheEuropa(){
  
  //Enlever les bordures des autres liens
  aMoon.style.borderBottom = "none"
  aMars.style.borderBottom = "none"
  aTitan.style.borderBottom = "none"

  //mettre la bordure sur le lien europa
  aEuropa.style.borderBottom = "3px solid white"

  //Changer l'image de fond de la premiere section
  firstSection.style.backgroundImage = "url(assets/destination/image-europa.png)"

  //Mettre a jour le contenue de a deuxieme section
  titre1.textContent = "EUROPA"
  pMoon.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, <br>Europa is a winter lover’s dream. With an icy surface, it’s <br>perfect for a bit of ice skating, curling, hockey, or simple <br>relaxation in your snug wintery cabin."
  pDistance2.textContent = "628 MIL. km"
  pTTimes2.textContent = "3 years"
}


function afficheTitan(){
  
  //Enlever les bordures des autres liens
  aMoon.style.borderBottom = "none"
  aMars.style.borderBottom = "none"
  aEuropa.style.borderBottom = "none"

  //mettre la bordure sur le lien titan
  aTitan.style.borderBottom = "3px solid white"

  //Changer l'image de fond de la premiere section
  firstSection.style.backgroundImage = "url(assets/destination/image-titan.png)"

  //Mettre a jour le contenue de a deuxieme section
  titre1.textContent = "TITAN"
  pMoon.innerHTML = "The only moon known to have a dense atmosphere other <br>than Earth, Titan is a home away from home (just a few <br>hundred degrees colder!). As a bonus, you get striking <br>views of the Rings of Saturn."
  pDistance2.textContent = "1.6 BIL. km"
  pTTimes2.textContent = "7 years"
}

function crewOne(){
  
  //enlever la couleur aux autres div
  div2.style.opacity = "0.17"
  div3.style.opacity = "0.17"
  div4.style.opacity = "0.17"
  
  //mettre la couleur a la div selectionner
  div1.style.opacity = "1"

  //mettre a jour les info sur le crew-mate
  crewPost.textContent = "COMMANDER"
  crewName.textContent = "DOUGLAS HURLEY"
  crewBio.innerHTML = "Douglas Gerald Hurley is an American engineer, former <br>Marine Corps pilot and former NASA astronaut. He <br>launched into space for the third time as commander of <br>Crew Dragon Demo-2."

  //changer l'image du crew-mate
  crewImg.src = "assets/crew/image-douglas-hurley.png"

// vérifier la taille de la fenêtre
  if (window.innerWidth > 375) {
    // replacer et redimensionner l'image
    sectionImgContaineur.style.width = "568.07px"
    sectionImgContaineur.style.height = "712px"
    sectionImgContaineur.style.top = "198px"
    sectionImgContaineur.style.left = "734.93px"
  }


}

function crewtwo(){
  
  //enlever la couleur aux autres div
  div1.style.opacity = "0.17"
  div3.style.opacity = "0.17"
  div4.style.opacity = "0.17"
  
  //mettre la couleur a la div selectionner
  div2.style.opacity = "1"

  //mettre a jour les info sur le crew-mate
  crewPost.textContent = "Mission Specialist"
  crewName.textContent = "MARK SHUTTLEWORTH"
  crewBio.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of <br>Canonical, the company behind the Linux-based Ubuntu <br>operating system. Shuttleworth became the first South <br>African to travel to space as a space tourist."

  //changer l'image du crew-mate
  crewImg.src = "assets/crew/image-mark-shuttleworth.png"

  // vérifier la taille de la fenêtre
  if (window.innerWidth > 375) {
    // replacer et redimensionner l'image
    sectionImgContaineur.style.width = "453.44px"
    sectionImgContaineur.style.height = "654px"
    sectionImgContaineur.style.top = "246px"
    sectionImgContaineur.style.left = "800px"
  }


}

function crewtree(){
  
  //enlever la couleur aux autres div
  div1.style.opacity = "0.17"
  div2.style.opacity = "0.17"
  div4.style.opacity = "0.17"
  
  //mettre la couleur a la div selectionner
  div3.style.opacity = "1"

  //mettre a jour les info sur le crew-mate
  crewPost.textContent = "PILOT"
  crewName.textContent = "Victor Glover"
  crewBio.innerHTML = "Pilot on the first operational flight of the SpaceX Crew <br>Dragon to the International Space Station. Glover is a <br>commander in the U.S. Navy where he pilots an F/A-18.He <br>was a crew member of Expedition 64, and served as a <br>station systems flight engineer. "

  //changer l'image du crew-mate
  crewImg.src = "assets/crew/image-victor-glover.png"

  // vérifier la taille de la fenêtre
  if (window.innerWidth > 375) {
    // replacer et redimensionner l'image
    sectionImgContaineur.style.width = "554.39px"
    sectionImgContaineur.style.height = "681px"
    sectionImgContaineur.style.top = "246px"
    sectionImgContaineur.style.left = "743px"
  }


}

function crewfour(){
  
  //enlever la couleur aux autres div
  div1.style.opacity = "0.17"
  div2.style.opacity = "0.17"
  div3.style.opacity = "0.17"
  
  //mettre la couleur a la div selectionner
  div4.style.opacity = "1"

  //mettre a jour les info sur le crew-mate
  crewPost.textContent = "Flight Engineer"
  crewName.textContent = "Anousheh Ansari"
  crewBio.innerHTML = "Anousheh Ansari is an Iranian American engineer and <br>co-founder of Prodea Systems. Ansari was the fourth <br>self-funded space tourist, the first self-funded woman to <br>fly to the ISS, and the first Iranian in space. "

  //changer l'image du crew-mate
  crewImg.src = "assets/crew/image-anousheh-ansari.png"

  // vérifier la taille de la fenêtre
  if (window.innerWidth > 375) {
    // replacer et redimensionner l'image
    sectionImgContaineur.style.width = "615.57px"
    sectionImgContaineur.style.height = "607px"
    sectionImgContaineur.style.top = "294px"
    sectionImgContaineur.style.left = "735px"
  }


}

function technologyOne(){

  //changer le titre et l'image
  technologyTitre.textContent = "LAUNCH VEHICLE"
  imgTechnology.src = "assets/technology/image-launch-vehicle-portrait.jpg"

  //changer le text de presentation
  technologyDescription.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled <br>vehicle used to carry a payload from Earth's surface to <br>space, usually to Earth orbit or beyond. Our WEB-X <br>carrier rocket is the most powerful in operation. Standing <br>150 metres tall, it's quite an awe-inspiring sight on the <br>launch pad!"

  //changer les style des rond a gauche
  tdiv3.style.backgroundColor = "transparent"
  tdiv2.style.backgroundColor = "transparent"
  tdiv3.style.border = "1px solid #ffffff26"
  tdiv2.style.border = "1px solid #ffffff26"
  tdiv1.style.backgroundColor = "white"
  tp3.style.color = "#FFFFFF"
  tp2.style.color = "#FFFFFF"
  tp1.style.color = "#0B0D17"

}


function technologyTwo(){

  //changer le titre et l'image
  technologyTitre.textContent = "SPACEPORT"
  imgTechnology.src = "assets/technology/image-spaceport-portrait.jpg"

  //changer le text de presentation
  technologyDescription.innerHTML = "A spaceport or cosmodrome is a site for launching (or <br>receiving) spacecraft, by analogy to the seaport for ships <br>or airport for aircraft. Based in the famous Cape <br>Canaveral, our spaceport is ideally situated to take <br>advantage of the Earth’s rotation for launch."

  //changer les style des rond a gauche
  tdiv1.style.backgroundColor = "transparent"
  tdiv3.style.backgroundColor = "transparent"
  tdiv1.style.border = "1px solid #ffffff26"
  tdiv3.style.border = "1px solid #ffffff26"
  tdiv2.style.backgroundColor = "white"
  tp1.style.color = "#FFFFFF"
  tp3.style.color = "#FFFFFF"
  tp2.style.color = "#0B0D17"

}

function technologyTree(){

  //changer le titre et l'image
  technologyTitre.textContent = "SPACE CAPSULE"
  imgTechnology.src = "assets/technology/image-space-capsule-portrait.jpg"

  //changer le text de presentation
  technologyDescription.innerHTML = "A space capsule is an often-crewed spacecraft that uses <br>a blunt-body reentry capsule to reenter the Earth's <br>atmosphere without wings. Our capsule is where you'll <br>spend your time during the flight. It includes a space <br>gym, cinema, and plenty of other activities to keep you <br>entertained."

  //changer les style des rond a gauche
  tdiv1.style.backgroundColor = "transparent"
  tdiv2.style.backgroundColor = "transparent"
  tdiv1.style.border = "1px solid #ffffff26"
  tdiv2.style.border = "1px solid #ffffff26"
  tdiv3.style.backgroundColor = "white"
  tp1.style.color = "#FFFFFF"
  tp2.style.color = "#FFFFFF"
  tp3.style.color = "#0B0D17"

}


function toggleHeader(){
    if (header.style.display === "block") {
      middleCross.style.display = "block";
      secondCross.style.transform = "none";
      firstCross.style.transform = "none";
      header.style.display = "none";
    } else {
      middleCross.style.display = "none";
      secondCross.style.transformOrigin = "50% 50%";
      secondCross.style.transform = "rotate(-45deg) translateY(-10px)";
      firstCross.style.transformOrigin = "50% 50%";
      firstCross.style.transform = "rotate(45deg) translateY(12px) translateX(3px)";
      header.style.display = "block";
    }
  }