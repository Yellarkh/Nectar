var button = document.getElementById("sousmenu").children;

	

	function hide(){

		var pages = document.getElementsByClassName("pages");

		for(var i = 0; i < pages.length; i++){

			
			pages[i].classList.remove("show");

		};

	};

	function show(ele){


			
			ele.classList.add("show");


	};

	function changePage(){

		hide();
		for(var i=1;i<button.length;i++){

			button[i].className = "";

		};
		this.className = "active";
		var lip = this.children;
		var p = lip[1];
		var titre = p.innerHTML.toLowerCase();
		var h1 = document.getElementById("titre");

		switch (titre) {

			 case "boissons":
				show(document.getElementById("bois"));
				h1.innerHTML = "Bières";
			 break;
			 case "effets":
				//show(document.getElementById("conso"));
				h1.innerHTML = "Effets";
			 break;
			 case "consommation":
				show(document.getElementById("conso"));
				h1.innerHTML = "Consommation";
			 break;
			 case "résultat":
				
				show(document.getElementById("result"));
				h1.innerHTML = "Résultat";
			 break;
			 case "profil":
				
				show(document.getElementById("profil"));
				h1.innerHTML = "Profil";
			 break;
			};
	};

	for(var i = 1; i < button.length; i++){

		Hammer(button[i]).on("tap",changePage,false);
	};