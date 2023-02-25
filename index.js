var counter = 0;
setInterval( function(){
  counter++; 
  if(counter <= 1000000000000){
    id = document.getElementById("repeat");
    var i = 0;
    
    var firstTxt = "I'm sorry, Ms. Jackson. I am for real. Never meant to  make your daughter cry. I apologize. ";
    
       var lastTxt = "I'm sorry, Ms. Jackson. I am for real. Never meant to  make your daughter cry. I apologize a trillion times.";
    
    var txt = "I'm sorry, Ms. Jackson. I am for real. Never meant to  make your daughter cry. I apologize " + counter + " times. ";
    var speed = 45;

    
function typeWriter() {
  if (counter == 1) {
    document.getElementById("repeat").innerHTML += firstTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  } else if(counter == 1000000000000) {
    document.getElementById("repeat").innerHTML += lastTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  } else {
     document.getElementById("repeat").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }
} 
    id = typeWriter();
  }
   
}, 7000);


//autoscroll

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,50);
}

setTimeout(function(){ pageScroll(); }, 3000);
