// JavaScript source code
setup = function () {
    paper = Raphael('happyface', 300, 220)
circ3 = paper.circle(100, 100, 80)
circ3.attr({
    'fill': '#FFFF00',
    'stroke': '#000',
    'stroke-width': '2'
})
eye_left = paper.circle(70, 80, 7)
eye_left.attr({
    'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
})

eye_right = paper.circle(130, 80, 7)
eye_right.attr({
    'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
})

mouth = paper.path(['M', 65, 125, 'Q', 100, 170, 135, 125]);

mouth.attr({
   
    'stroke': '#000000',
    'stroke-width': '4'
})

}
jQuery(document).ready(setup)

bigger_left = function () {
    eye_left.animate({'transform': 's1.5'} , 1000)
}

setup = function () {

    jQuery('#eyes').click(bigger_left)
}

jQuery(document).ready(setup)

bigger_right = function () {
    eye_right.animate({ 'transform': 's1.5' }, 1000)
}

setup = function () {

    jQuery('#eyes').click(bigger_right)
}

jQuery(document).ready(setup)

angle = 0;

mouth_rotate = function () {
    angle += 180
    mouth.animate({ 'transform': 'r' + angle }, 1000)
}

setup = function () {
  
    jQuery('#mouth').click(mouth_rotate);
    
}

jQuery(document).ready(setup)

setup = function () {
    paper = Raphael('tower', 300, 500)
    paper.text(150, 200, "My tower").attr({ "font-size": 20 }) 

    for (i = 1; i <= 8;i++){

        paper.rect(150 - 10 * i, 20 * i, 20 * i, 20).attr({
            'fill': "#f"+10*i,
            'stroke': '#000',
            "opacity": 1-0.1*i,
            'stroke-width': 0.75*i})
    }
}
jQuery(document).ready(setup)