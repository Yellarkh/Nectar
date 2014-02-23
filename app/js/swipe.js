var section = document.getElementsByClassName("boissons");
var numBulles = 0;


	function square(){

		for(var i = 0; i <drinks.length; i++){

			drinks[i].style.height = drinks[0].offsetWidth + "px";
		};

	};

	square();

	function page(symbol){

		var li = document.getElementById("bulles").children;
		var h1 = document.getElementById("titre");
		console.log(li);

		if(symbol == "+"){

			numBulles++;
		}

		else{

			numBulles--;
		}



		for( var i = 0; i <li.length; i++){

			li[i].className = "";
			li[numBulles].className = "thispage";
			switch (numBulles) {

			 case 0:
				
				
				h1.innerHTML = "Bières";
			 break;
			 case 1:
				
				h1.innerHTML = "Eaux-de-vie";
			 break;
			 case 2:
				
				h1.innerHTML = "Liqueurs";
			 break;
			 case 3:
				
				h1.innerHTML = "Cocktails";
			 break;
			 case 4:
				
				h1.innerHTML = "Vins et bulles";
			 break;
			};


		}

		
	}

	function left(){

		page("+");

		for(var i = 0;i <section.length; i++){

			var larg = (document.body.clientWidth);
			var matrix = getComputedStyle(section[i], null).webkitTransform || getComputedStyle(section[i], null).MozTransform;
			//console.log(matrix);
			var tabMatrix = matrix.split(',');
			var oldPos = parseFloat(tabMatrix[4]);
			section[i].style.MozTransform= "translate(" +(oldPos - larg) + "px,0)";
			section[i].style.webkitTransform= "translate(" + (oldPos - larg) + "px,0)";
			section[i].style.transform= "translate(" + (oldPos - larg) + "px,0)";

		};	
	};

	function right(){


		page("-");
		
		for(var i = 0;i <section.length; i++){

			var larg = (document.body.clientWidth);
			var matrix = getComputedStyle(section[i], null).webkitTransform || getComputedStyle(section[i], null).MozTransform;
			//console.log(matrix);
			var tabMatrix = matrix.split(',');
			var oldPos = parseFloat(tabMatrix[4]);		
			section[i].style.MozTransform= "translate(" +(oldPos + larg) + "px,0)";
			section[i].style.webkitTransform= "translate(" + (oldPos + larg) + "px,0)";
			section[i].style.transform= "translate(" + (oldPos + larg) + "px,0)";

		};	
	};

	
	
	
	for(var i = 0;i <section.length; i++){

		Hammer(section[0]).on("swipeleft",left);
		Hammer(section[1]).on("swipeleft",left);
		Hammer(section[1]).on("swiperight",right)
		Hammer(section[2]).on("swipeleft",left);
		Hammer(section[2]).on("swiperight",right);
		Hammer(section[3]).on("swiperight",right);
		Hammer(section[3]).on("swipeleft",left);
		Hammer(section[4]).on("swiperight",right);


	};
	
	window.addEventListener('resize', square, false);



