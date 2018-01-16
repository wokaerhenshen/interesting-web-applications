	moveDirection		= null
	jumpDirection	 	= null
	timer            	= null
	jumpTimer 		 	= null
	jumpCounter 	 	= 0
	currentImage     	= 0
	window.onkeydown 	= checkKey;

	window.onload = function() {
		//windowWidth = document.body.offsetWidth;
		imgWidth = document.getElementById("c").width;
		//posTopLeft = windowWidth-imgWidth;
		boxwidth = document.getElementById("d").width;
		console.log(boxwidth);

	}


	yUp = 0;
	yDown = 60;


	function moveRight(){
		currentImage++
		if(currentImage >= 30){
			currentImage = 0
		}
		
		document.getElementById('c').src = "alien/alienrwalk" + currentImage + ".gif"
		imgWidthpx = imgWidth+"px";

		/*===========
			Alien moves left if it hits the right edge of the browser
		============*/
		if (document.getElementById("c").style.left == document.body.offsetWidth-imgWidth + "px") {
			clearInterval(timer)
			timer = setInterval("moveLeft()", 10)
			moveDirection = "left"


		}
		else if (parseInt(document.getElementById('c').style.left)+imgWidth-10+"px"   ==  document.getElementById("d").style.left){
			clearInterval(timer)
			timer = setInterval("moveLeft()", 10)
			moveDirection = "left"
			if (document.getElementById('d').style.left != document.body.offsetWidth-boxwidth + "px"){
				boxtimer = setInterval("boxMoveRight()",10)
			}
			
		}

		/*===========
			Otherwise Alien will keep moving right
		============*/
		else {
			document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) + 1 + "px"
		}
	}

	function moveLeft(){
		currentImage++
		if(currentImage >= 30){
			currentImage = 0
		}
		
		document.getElementById('c').src = "alien/alienlwalk" + currentImage + ".gif"

		/*===========
			Alien moves right if it hits the left edge of the browser
		============*/
		if (document.getElementById("c").style.left == "0px") {
			clearInterval(timer)
			timer = setInterval("moveRight()", 10)
			moveDirection = "right"


		}
		// I can change the equal to bigger sign
		else if (parseInt(document.getElementById('c').style.left)+"px"   ==  document.getElementById("d").style.left){
			clearInterval(timer)
			timer = setInterval("moveRight()", 10)
			moveDirection = "right"
			if (document.getElementById('d').style.left != "0px"){
				boxtimer = setInterval("boxMoveLeft()",10)
			}


		}
		
		
		/*===========
		Otherwise Alien will keep moving left
		============*/
		else {
			document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) - 1 + "px"
		}
	}

	function boxMoveRight(){
		document.getElementById('d').style.left=parseInt(document.getElementById('d').style.left) + 1 + "px"
		// console.log(document.getElementById('d').style.left)
		// console.log(document.body.offsetWidth-boxwidth)
		if (document.getElementById('d').style.left == document.body.offsetWidth-boxwidth + "px"){
			document.getElementById('d').src = "images/explosion.gif"
			clearInterval(boxtimer)
			
		}
	}

	function boxMoveLeft(){
		document.getElementById('d').style.left=parseInt(document.getElementById('d').style.left) - 1 + "px"
		if (document.getElementById('d').style.left == "0px"){
			document.getElementById('d').src = "images/explosion.gif"
			clearInterval(boxtimer)
			
		}
	}

	function jumperHelper(){
		clearInterval(timer) // clears the timer that calls the moveRight() or moveLeft() functions, therefore stopping the alien walk animation so that when the alien jumps, it will remain on one image
		clearInterval(jumpTimer)
		jumpTimer = setInterval("jump()", 10);
		setTimeout("clearInterval(jumpTimer)", 1210);
	}


	function jump() {
		// console.log("jump start")
		// console.log((parseInt(document.getElementById("c").style.left)+parseInt(document.getElementById("c").style.width)/2))
		// console.log((parseInt(document.getElementById("d").style.left)+parseInt(document.getElementById("d").style.width)/2))
		console.log(document.getElementById("c").style.top)
		if ((parseInt(document.getElementById("c").style.left)+parseInt(document.getElementById("c").style.width)/2) == (parseInt(document.getElementById("d").style.left)+parseInt(document.getElementById("d").style.width)/2)){
			 if (parseInt(document.getElementById("c").style.top) >10 && parseInt(document.getElementById("c").style.top)< 50){
			clearInterval(timer) // clears the timer that calls the moveRight() or moveLeft() functions, therefore stopping the alien walk animation so that when the alien jumps, it will remain on one image
			clearInterval(jumpTimer)
			document.getElementById("d").style.height = parseInt(document.getElementById("d").style.height)/2 +"px"
			if (moveDirection == "right"){
				timer = setInterval("moveRight()", 10)
				boxtimer = setInterval("boxMoveRight()",10)
			}
			else{
				timer = setInterval("moveLeft()", 10)
				boxtimer = setInterval("boxMoveLeft()",10)
			}

			
			 }
			// clearInterval(timer) // clears the timer that calls the moveRight() or moveLeft() functions, therefore stopping the alien walk animation so that when the alien jumps, it will remain on one image
			// clearInterval(jumpTimer)
			// return
		}


			if (yUp < 60) {
				console.log(moveDirection)
				document.getElementById('c').style.top=parseInt(document.getElementById('c').style.top) - 1 + "px";
				yUp++;
				//console.log("up")
				if (yUp == 60) {
					yDown = 60;
				}

				if (moveDirection == "right") {
				//	console.log("moving right up")
				//	console.log(document.getElementById("c").style.left)
				//	console.log(document.body.offsetWidth-imgWidth)
					if (parseInt(document.getElementById("c").style.left) == document.body.offsetWidth-imgWidth) {
						moveDirection = "left"
						document.getElementById('c').src = "alien/alienlwalk" + currentImage + ".gif"
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) - 1 + "px"

						
					} else {
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) + 1 + "px"
					}

				} else if (moveDirection == "left") {
				//	console.log("moving left up")

					if (parseInt(document.getElementById("c").style.left) == 0){
						moveDirection = "right"
						document.getElementById('c').src = "alien/alienlwalk" + currentImage + ".gif"
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) + 1 + "px"
					} 

					else {
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) - 1 + "px"
					}

				}

				
			} else if (yDown >= 0 ) {
				//document.getElementById('c').style.top--
				document.getElementById('c').style.top=parseInt(document.getElementById('c').style.top) + 1 + "px";
				yDown--;
			//	console.log("down")
				if (yDown == 0) {
					yUp = 0;
					if (moveDirection == "right" || moveDirection == "null"){
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) + 1 + "px"
						clearInterval(timer)
						clearInterval(jumpTimer)
						timer = setInterval("moveRight()", 10)
					}
					else {
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) - 1 + "px"
						clearInterval(timer)
						clearInterval(jumpTimer)
						timer = setInterval("moveLeft()", 10)
					}
				}

				if (moveDirection == "right") {
				//	console.log("moving right down")
				//	console.log(yDown);

					if (parseInt(document.getElementById("c").style.left) >= document.body.offsetWidth-imgWidth){
						moveDirection = "left"
						document.getElementById('c').src = "alien/alienlwalk" + currentImage + ".gif"
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) - 1 + "px"
					}
					else {
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) + 1 + "px"
					}



					// clearInterval(timer)
					// timer = setInterval("moveRight()", 10)

				} else if (moveDirection == "left") {
				//	console.log("moving left down")
				//	console.log(yDown);

					if (parseInt(document.getElementById("c").style.left) <= 0){
						moveDirection = "right"
						document.getElementById('c').src = "alien/alienlwalk" + currentImage + ".gif"
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) + 1 + "px"
					}
					else{
						document.getElementById('c').style.left=parseInt(document.getElementById('c').style.left) - 1 + "px"
					}

					
					// clearInterval(timer)
					// timer = setInterval("moveLeft()", 10)

				}

			}
		
	}

	function checkKey(e){
		var keyCode = null

		if(e.event){
			keyCode = e.event
		}else if(e.which){
			keyCode = e.which
		}
		if(keyCode == null){
			alert("can't handle this key")
		}

		if (document.getElementById('c').style.top == "60px") {

			if(keyCode == 39){
			    if(moveDirection != "right"){
					clearInterval(timer)
					timer = setInterval("moveRight()", 10)
					moveDirection = "right"
					console.log("moving right")
					console.log(moveDirection)

				}
			}else if(keyCode == 37){
			    if(moveDirection != "left"){
					clearInterval(timer)
					timer = setInterval("moveLeft()", 10)
					moveDirection = "left"
					console.log("moving left")
					console.log(moveDirection)
				}
				
			}else if(keyCode == 32) {
				clearInterval(timer) // clears the timer that calls the moveRight() or moveLeft() functions, therefore stopping the alien walk animation so that when the alien jumps, it will remain on one image
				clearInterval(jumpTimer)
				jumpTimer = setInterval("jump()", 10);
				setTimeout("clearInterval(jumpTimer)", 1210); //tells the jumpTimer to stop after 1210 milliseconds
			}

			//alert(keyCode)
		}		

	}