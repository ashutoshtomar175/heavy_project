


if (typeof window !== 'undefined'){
    document.addEventListener('DOMContentLoaded', () => {

    // Your code here
    var main = document.getElementById("main");
    var smal = document.getElementsByClassName("sm-im");
    smal[0].onclick = function(){
                    mainimg.src = smal[0].src;
    }
    smal[1].onclick = function(){
                    mainimg.src = smal[1].src;
                }
    smal[2].onclick = function(){
                    mainimg.src = smal[2].src;
    }
    smal[3].onclick = function(){
                    mainimg.src = smal[3].src;
    }




});}
