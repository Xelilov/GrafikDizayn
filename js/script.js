"use strict"

$(function(){
  $('.homepage').masonry({
    // options
    itemSelector : '.item',
    columnWidth : 120
  });
});






/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("MySidenav").style.transform = 'translate3d(0, 0, 0)';
    document.getElementById("Main").style.transform = 'translate3d(250px, 0, 0)';
    document.getElementsByClassName("_full_opasity")[0].style.zIndex = '2';
    document.getElementsByClassName("_full_opasity")[0].style.backgroundColor = 'rgba(0,0,0,0.5)';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("MySidenav").style.transform = 'translate3d(-250px, 0, 0)';
    document.getElementById("Main").style.transform = 'translate3d(0, 0, 0)';
    document.getElementsByClassName("_full_opasity")[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.getElementsByClassName("_full_opasity")[0].style.zIndex = '-1';
}





// let x=(a, b)=>a+b;

// console.log(x(2,3));   

