
setTimeout(() => {
    const box = document.getElementById('box');
    box.style.opacity="0";
  
  }, 1500); 
  setTimeout(() => {
    const box = document.getElementById('box2');
    box.style.opacity="0";
  
  },3500); 
  setTimeout(() => {
    const box = document.getElementById('box3');
    box.style.opacity="1";
  
  },4000); 
  setTimeout(() => {
    const box = document.getElementById('scrollIcon');
    box.style.opacity="1";
  
  },3500); 
  
  var pos1 = window.pageYOffset;
  window.onscroll = function() {
  var pos2 = window.pageYOffset;
    if (pos1 > pos2) {
      document.getElementById("tab").style.bottom = "0%";
    } else {
      document.getElementById("tab").style.bottom = "-200px";
    }
    pos1 = pos2;
  }
  
  
  
  
  
  