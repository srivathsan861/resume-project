var navSelector = document.querySelectorAll('.nav-menu a');

for(var i=0;i < navSelector.length;++i){
	navSelector[i].addEventListener('click',function(event){
     event.preventDefault();
     var targetSectionID = this.textContent.trim().toLowerCase();
     var targetSection = document.getElementById(targetSectionID);
     var interval = setInterval(function(){
     var targetSectionCoordinates = targetSection.getBoundingClientRect();
     if(targetSectionCoordinates.top <= 0){
     	clearInterval(interval);
     	return;
     }
     window.scrollBy(0,50);
     },20);
	});
}

// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills-display');
// window.addEventListener('scroll',checkScroll);
// var animationDone = false;

// function initialiseBars(){
//     for(let bar of progressBars){
//         bar.style.width = 0 + '%';
//     }
// }

// initialiseBars();

// function fillBars(){
//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let CurrentWidth = 0;
//         let interval = setInterval(function(){
//             if(CurrentWidth > targetWidth){
//                  clearInterval(interval);
//                  return;
//             }
//             CurrentWidth++;
//             bar.style.width = CurrentWidth + '%';
//         },3);
//     }
// }

// function checkScroll(){
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top <= window.innerHeight){
//         animationDone = true;
//         fillBars();
//     }else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }
// }

var progressBars = document.querySelectorAll(".skill-progress > div");

for (var bar of progressBars) {
    initialiseBar(bar);
}


function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);