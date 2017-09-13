setup = function() {
  paper = Raphael('snowman', 400, 400)
  circ1 = paper.circle(200, 300, 80)
  circ1.attr({
    'fill': '#ffffff',
    'stroke': '#000',
    'stroke-width': '2'
  })
    circ2 = paper.circle(200, 200, 60)
  circ2.attr({
    'fill': '#ffffff',
    'stroke': '#000',
    'stroke-width': '2'
  })

      circ3 = paper.circle(200, 120, 40)
  circ3.attr({
    'fill': '#ffffff',
    'stroke': '#000',
    'stroke-width': '2'
  })
      eye_left = paper.circle(180, 110, 5)
  eye_left.attr({
    'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
  })
  
        eye_right = paper.circle(220, 110, 5)
  eye_right.attr({
    'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
  })
  
  mouse = paper.path(['M', 185, 135, 'Q', 200, 160, 215, 135]);
  
  mouse.attr({
	     
    'stroke': '#FF0000',
	 'stroke-width': '2'
  })
  
hand_left = paper.path("M140,195L90,180Z")

hand_left.attr({
	
	'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
	
})
  
hand_right = paper.path("M260,195L320,180Z")

hand_right.attr({
	
	'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
	
})  
  
  
  
        rect1 = paper.rect(160,80,80,10)
  rect1.attr({
    'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
  })
  
  
  rect2 = paper.rect(170,38,60,40)
		
  rect2.attr({
    'fill': '#000000',
    'stroke': '#000',
    'stroke-width': '2'
  })

  
  
}
jQuery(document).ready(setup)




bigger = function() {
 rect2.scale(1.1,1.0)
}

setup = function () {

    jQuery('#change').click(bigger)
}

jQuery(document).ready(setup)



