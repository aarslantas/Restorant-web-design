

var mobNav = document.querySelector(".mobil-navigation");
var checkbox = document.getElementById("navi-toggle");


checkbox.addEventListener( 'change', function() {
    if(this.checked) {
    
  
    
       mobNav.setAttribute("style","height:auto");
       mobNav.style.visibility ="visible";
       mobNav.style.marginBottom =2+"rem";
      
      
    
        
    } else {
       
        mobNav.setAttribute("style","height:0");
        mobNav.style.visibility ="hidden";
    
    }

});

window.addEventListener('resize', function(){
    if(screen.width === window.innerWidth){
      
        mobNav.setAttribute("style","height:0");
        checkbox.checked = false;
    }
  });
