
function setHeight(){
	

	var child = timeline.getElementsByTagName("li");
	var hauteur =  (child.length) * 155;
	timeline.style.height = hauteur * 1 + "px";

		for(var i = 0; i < child.length; i++){

			//child[i].style.top = i * 1.5 * child[0].offsetHeight + "px";
			child[i].style.MozTransform= "translate(0," + ((i * 50)+24) + "px)";
			child[i].style.webkitTransform= "translate(0," + ((i * 50)+24)+ "px)";
			child[i].style.transform= "translate(0," + ((i * 50)+24)+ "px)";

		};
	}

