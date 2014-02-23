var sexChoice = document.getElementById("sexeChoice").children;
	var sex = null;

	

	function getSex(){

		sex = this.getAttribute("sexe");
	};



	function getInfo(){

		var prenom = document.getElementById("name").value;
		var p = document.getElementById("poids").value;

		var pattern = "[0-9]*$";
		//p = parseFloat(p);

		if( p == "" || prenom == "" || sex == ""){

			document.getElementById("walkt").innerHTML = "Hey, tu es déjà bourré ou quoi ? On a vraiment besoin de ces infos.";
		}

		else{

			p = parseInt(p);
			localStorage.setItem("nom",prenom);
			localStorage.setItem("poids",p);
			localStorage.setItem("sexe",sex);

			document.getElementById("profil").classList.remove("show");
			document.getElementById("goDrink").classList.add("show");
		
			storage();
		}
	};

	

	for(var i = 0; i<sexChoice.length; i++){

		Hammer(sexChoice[i]).on("tap",getSex,false);

	};
	
	Hammer(document.getElementById("envoi")).on("tap",getInfo,false);