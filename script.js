
let wrapper_height = document.getElementById("wrapper").offsetHeight;
let animated_box = document.getElementById("animated_box");
let animation_direction = 0; 

const animatedBox = () => {

    let position_left = animated_box.offsetLeft;
    let position_top = animated_box.offsetTop;

    if ((position_left + 100) >= screen.width || 
        (position_top + 100) >= wrapper_height) {
        animation_direction = 1;
    } else if (animated_box.offsetLeft < 0) {
        animation_direction = 0;
    }

    if (animation_direction === 0) {
        position_left = position_left + 10;
        position_top = position_top + 10;
    } else {
        position_left = position_left - 10;
        position_top = position_top - 10;
    }

    animated_box.style.left = position_left + "px";
    animated_box.style.top = position_top + "px";

    setTimeout(function () { animatedBox() }, 1000);
}

setTimeout(function () { 
    animatedBox();
}, 1000); // initialize 
