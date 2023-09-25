/*document.addEventListener("mousemove", function(event) {	//Whenever the mouse moves, assign it's x and y values to mouseX and mouseY.

    var mouseX = event.clientX; 
    var mouseY = event.clientY;
});
  
function moveText(pos, inx, ary){	
    if(mouseX > pos && mouseX < ary[inx+1]){
              
    }

}
  
let c = document.getElementById('cvs');
let ctx = c.getContext('2d');
ctx.font = "50px Times, Times New Roman, serif";
ctx.lineWidth = 4; ctx.lineJoin = "round"; ctx.globalAlpha = 2 / 3;
ctx.strokeStyle = ctx.fillStyle = "#000000";
let txt = "welcome"
ctx.clearRect(30, 0, 600, 1500);
x = 30;
y = 100;
xseries = [];
yseries = [];
for (let i = 0; i < txt.length; i++){
    ctx.beginPath();
    xseries.push(x);
    ctx.strokeText(txt[i], x, y);
    x += ctx.measureText(txt[i]).width + ctx.lineWidth * Math.random();
}
c.addEventListener('onmouseover', function(){
    xseries.forEach()
});

document.getElementById('checker').innerHTML = "<p>x Values: " + xseries.toString() + "\ny Values: " + yseries.toString();*/
//On mouse hover, have the text within the bounds move (incomplete)

//Requires 'wkjavascript.js' in order for both device dimension variables and functions to operate properly.
let device_hypotenuse = document.documentElement.style.getPropertyValue(`--device_hypotenuse`);
let device_height = document.documentElement.style.getPropertyValue(`--device_height`);
let device_width = document.documentElement.style.getPropertyValue(`--device_width`);

function fadeInText(objId, fadeText){
    let container = document.getElementById(objId);
    let textObj = document.createElement('h1');
    container.appendChild(textObj);
    textObj.innerText = fadeText;
    textObj.className += 'center-text';
    textObj.style.opacity = 0;
    let i = 0;
    let fadeInTimeLoop = setInterval(function(){
        if(i < 1){
            i += 0.01;
            textObj.style.opacity = i;
        }
        else{
            clearInterval(fadeInTimeLoop);
        }
    }, 50);
}
//fadeInText('welcome_container', 'Welcome to WorldKrafter');

function animateDrawnText(containerId, txt, horizontalStart, verticalStart){
    let ctr = document.getElementById(containerId);
    let c = document.createElement('canvas');
    ctr.appendChild(c);
    //console.log(device_hypotenuse + " " + device_height + " " + device_width);
    //console.log(ctr.parentElement.getBoundingClientRect().width + " " + ctr.parentElement.getBoundingClientRect().height);
    c.style.width = ctr.parentElement.getBoundingClientRect().width;
    c.style.height = ctr.parentElement.getBoundingClientRect().height;
    c.width = ctr.parentElement.getBoundingClientRect().width;
    c.height = ctr.parentElement.getBoundingClientRect().height;
    let chypotenuse = Math.sqrt(Math.pow(c.width, 2) + Math.pow(c.height, 2));
    // c.style.paddingTop = '25vh';
    // c.style.paddingLeft = '20vw';

    let ctx = c.getContext("2d");
    let dashLen = 220, dashOffset = dashLen, speed = 30,
        x = (c.width/horizontalStart), i = 0, font = chypotenuse * 0.04;
    
    ctx.font = font + "px DejaVu Sans Mono, monospace";
    ctx.lineWidth = 3; ctx.lineJoin = "round"; ctx.globalAlpha = 2 / 3;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#ffffff";

    (function loop() {
        ctx.clearRect(x, 0, 60, 300);
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
        dashOffset -= speed;                                         // reduce dash length

        ctx.strokeText(txt[i], x, (c.height/verticalStart));                               // stroke letter

        if (dashOffset > 0) requestAnimationFrame(loop);             // animate
        else {
            ctx.fillText(txt[i], x, (c.height/verticalStart));                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < txt.length) requestAnimationFrame(loop);
        }
    })();
}

function fashionableDiceRoll(drId, contentTxt, horStart, vertStart){
    var sVal = Math.floor(Math.random()*2);
    switch(sVal){
        case 0:
            fadeInText(drId, contentTxt);
            break;
        case 1:
            animateDrawnText(drId, contentTxt, horStart, vertStart);
            break;
        case 2:
            break;
    }
}

// function flaredLoadText(htmlobj, toWrite) {
//     var sVal = Math.floor(Math.random()*3);
//     switch(sVal){
//         case 0:
//             htmlobj.innerHTML = "<h1 class='display-3'>" + toWrite + "</h1>";
//             break;
//         case 1:
//             htmlobj.innerHTML = "<canvas id='world_welcome_canvas' width='800' height='80'></canvas>"
//             animateDrawnText('world_welcome_canvas', toWrite);
//             break;
//         case 2:
//             htmlobj.innerHTML = "<h1 class='display-3'>" + toWrite + "</h1>";
//             //fadeInText(document.getElementById('world_welcome_heading'));
//             break;
//     }   
// }
//flaredLoadText(document.getElementById('world_welcome_heading'), 'Welcome to WorldKrafter');