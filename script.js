/* Section active */

var section = document.querySelectorAll(".section");
var sections = {};
section.forEach(function(e){
console.log(e.id , e.offsetTop)
section[e.id]=e.offsetTop;
})
window.onscroll = function(){
    var scrollPos = document.documentElement.scrollTop ||
        document.body.scrollTop;
    console.log('scrollPos');
 for(var x in sections){
     if(sections[x]<=scrollPos){
         document.querySelector('.active').setAttribute('class','');
         document.querySelector('a[href*='+x+']').setAttribute('class','active')
     }
 }   
}
/* Section active */

/*Section details */
// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');
var modal4 = document.getElementById('id04');
var modal5 = document.getElementById('id05');
var modal6 = document.getElementById('id06');
var modal7 = document.getElementById('id07');
var modal8 = document.getElementById('id08');
var modal9 = document.getElementById('id09');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    }  else if (event.target == modal3) {
        modal3.style.display = "none";
    } else if (event.target == modal4) {
        modal4.style.display = "none";
    } else if (event.target == modal5) {
        modal5.style.display = "none";
    } else if (event.target == modal6) {
        modal6.style.display = "none";
    } else if (event.target == modal7) {
        modal7.style.display = "none";
    } else if (event.target == modal8) {
        modal8.style.display = "none";
    } else if (event.target == modal9) {
        modal9.style.display = "none";
    }
}

/*Section details */