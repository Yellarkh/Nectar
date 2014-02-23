var showMenu = document.getElementsByClassName("first");

	function openMenu(){

		document.getElementById("menu").className = "eaux";

	};

	function closeMenu(){

		document.getElementById("menu").className = "";
	}

	for(var i = 0; i < showMenu.length; i++){

		Hammer(showMenu[i]).on("swiperight",openMenu,false);
	};


	Hammer(document.getElementById('togg')).on('tap',openMenu,false);
	Hammer(document.getElementById('menu')).on('tap',closeMenu,false);