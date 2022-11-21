const klke = document.querySelector(".klk"); //use const to creat variable equall klk class and use "document" to represent page and to access any element in HTML page and use querySelector to return the element that matches a css selector
klke.addEventListener("mouseover", (event)=>{
 console.log(event.pageX - klke.offsetLeft);
})