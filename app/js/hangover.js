var k = 0.8; // constante alcool
	var drinks = document.getElementsByClassName("square");
	var num = null;
	var alcoolemie = new Array();
	var timeline = document.getElementById('timeline');
	var index = null;
	var s = 1;

	function time(){

		var d = new Date();
		var hours = d.getHours();

		if(hours <10 ){

			hours = "0" + hours;
		}

		
		var min = d.getMinutes();

		if(min <10 ){

			min = "0" + min;
		}


		var when  = hours + ":" + min;
		return when;
	};

	function totaldrink (a, b) { 

	    	return a + b;
	};



	setInterval(function chrono(){ // dans la verion final declenché à la première boisson

	var alcool = document.getElementById("alcool");
		var time = (s++)*0.05;
		var total = alcoolemie.reduce(totaldrink, 0);
		var result = ((Math.round((total- time)*100))/100) ;
		tropBu(result);
		alcool.innerHTML = result + " grammes / litre de sang";
	},1200000);

	function supprime(){


	var alcool = document.getElementById("alcool");
			var timeline_li = this.parentNode;
			var chiffre =  timeline_li.getAttribute("tableau");
			delete alcoolemie[chiffre];
			var total = alcoolemie.reduce(totaldrink, 0);
			var result = ((Math.round((total)*100))/100) ;
			tropBu(result);
			alcool.innerHTML = result + " grammes / litre de sang";
			timeline_li.style.opacity = 0;

			setTimeout(function(){

				
				timeline_li.remove();
				setHeight();

			},400);

			
						
	};

	function create(ele){

		var timeline = document.getElementById('timeline');
		var li = timeline.appendChild(document.createElement('li'));
		var icon = li.appendChild(document.createElement('p'));
	   	var text = icon.appendChild(document.createElement('span'));
	    var date = li.appendChild(document.createElement('p'));
	    var empty = li.appendChild(document.createElement('a'));
	    var cross = ele.appendChild(document.createElement('span'));


	    setTimeout(function plus(){

	    	cross.className += ' tomb';
	    	
	    },0);

	    setTimeout(function moins(){

	    		cross.remove();
	    },1000);

	   
	     li.setAttribute("tableau",index++);
	     empty.innerHTML = 'x';
	    text.className += 'text';
	    text.innerHTML = ele.getAttribute('drink'); 
	    iconclass = ele.classList[1];
	  	icon.className += iconclass + " "; // !!!!!!!!!!!! n'oublie pas de remettre cette ligne
	  	icon.className += "icon";
	  	date.className += "date";
	  	date.innerHTML = time();
		console.log(time());
		//empty.addEventListener('click',supprime,false);
		Hammer(empty).on("tap",supprime,false);
		
	};

	function tropBu(ele){

		var text2 = document.getElementsByClassName("text2");
		var illu2 = document.getElementById("illu2");
		illu2.className = "";

		if(ele<0.5){

			illu2.className += "clef";
			text2[0].innerHTML = "Petit joueur, c’est tout ? Tu vas être bon pour jouer le taximan avec tes potes.";
			text2[1].innerHTML = "Enjoy... et n’oublies pas de faire des photos honteuses d’eux !";
			
		}

		else if(ele<1.5){

			illu2.className += "biere";
			text2[0].innerHTML = "On se met bien à ce que je vois! Pas vraiment saoul tu dis ? Tu t’en sors pas mal.";
			text2[1].innerHTML = "Après quelques heures tu seras frais comme un gardon.";
		}

		else if(ele<2.5){

			illu2.className += "verre";
			text2[0].innerHTML = "On a faire à un gros fêtard! Si t’as encore les idées claires, chapeau.";
			text2[1].innerHTML = "Prépares quand même l’aspirine pour demain.";
		}

		else if(ele<3.8){

			illu2.className += "croix";
			text2[0].innerHTML = "Et alors, on se met pas de limites? Prépares toi à vomir tes tripes!";
			text2[1].innerHTML = "T’es foutu, bonne grosse gueule de bois !";
		}

		else{

			illu2.className += "cercueil";
			text2[0].innerHTML = "Sérieusement? Si tu n’es pas déjà mort ou dans un coma profond, c'est que ça va arriver.";
			text2[1].innerHTML = "Saches que tu ne retrouveras ton état normal qu'au paradis ...";
		}

	};

	

	function hangover(){ // faire la même chose pour les bieres mais en changer la var drinks

		
		
		//console.log(this.getAttribute('pourcentage'));
		var ml = this.getAttribute('quantite');//quantité d'alcool
		var d = this.getAttribute('pourcentage');//pourcentage d'alcool (1° = 0.01%)
		var ds = getDif();//diffusion de l'alcool vis à vis du sexe de la personne
		var p = localStorage.getItem("poids");
		var taux = (ml*d*k)/(ds*p); // calcule l'alcoolémie
		alcoolemie.push(taux);
		
		var alcool = document.getElementById("alcool");
		var total = alcoolemie.reduce(totaldrink, 0);
		var result = (Math.round(total*100))/100;
		tropBu(result);
		alcool.innerHTML = result + " grammes / litre de sang";
		
		create(this);
		setHeight();
	};

	for (var i = 0; i < drinks.length; i++) {

		
		Hammer(drinks[i]).on("tap",hangover,false);
	    //drinks[i].addEventListener('click',hangover,false);
	   
	};


