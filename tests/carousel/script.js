var carousel = document.getElementById('carousel');
var boxes = ['One', 'Two', 'Three', 'Four', 'Five'];
var current = 0;
for (let i = 0; i < boxes.length; i++) {
    var div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = boxes[i];
    div.id = `box${i + 1}`;
    carousel.appendChild(div);
}
update()

function previous() {

    //by using this if else, the current will be moved to 4th index after 0
    if(current == 0){
        current = 4;
    }
    else{
    current--;
    }
    update();
}
function next() {

    //similar logic to prev
    if(current == 4){
        current = 0;
    }
    else{
    current++;
    }
    update();
}
function update() {
    var boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('previous', 'next', 'current');

    }
    //using if else to move the previous box to 4th index when current is 0, so that the circular queue continues.
    if(current == 0){
        boxes[4].classList.add('previous');
    }
    else{
        boxes[current-1].classList.add('previous');
    }

    boxes[current].classList.add('current');

    //using if else to move the previous box to 0th index when current is 4, so that the circular queue continues.
    if(current == 4){
        boxes[0].classList.add('next');
    }
    else{
        boxes[current+1].classList.add('next');
    }
   
}