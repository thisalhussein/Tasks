const klke = document.querySelector(".klk"); //use const to creat variable equall klk class and use "document" to represent page and to access any element in HTML page and use querySelector to return the element that matches a css selector
klke.addEventListener("mouseover", (event)=>{
 const x = (event.pageX - klke.offsetLeft);
 const y = (event.pageY - klke.offsetTop);
 klke.style.setProperty("--xPos", x + "px");
 klke.style.setProperty("--yPos", y + "px");
})