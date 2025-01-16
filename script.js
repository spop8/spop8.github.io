let pairs = {};
// determines what option of the dropdown is selected
document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("category").onchange = valueoption;
	function valueoption() {
		let option = document.getElementById("category").value;
		console.log(option);
		// creates the pairs depending on which dropdown option is selected
		if (option == "comidas") {
			pairs = [
				{ word: "el menú", match: "menu.jpg" },
				{ word: "el almuerzo", match: "lunch.avif" },
				{ word: "el/la camarero/a", match: "waiter.png" },
				{ word: "el desayuno", match: "breakfast.jpg" },
				{ word: "la sección de (no) fumar", match: "smoke.png" },
				{ word: "la cena", match: "dinner.jpg" },
				{ word: "los entremeses", match: "appetizer.jpg" },
				{ word: "la cuenta", match: "bill.jpg" },
				{ word: "el/la dueño/a", match: "owner.png" },
				{ word: "la propina", match: "tips.png" },
				{ word: "la comida", match: "food.jpg" },
				{ word: "delicioso/a", match: "delicious.png" },
				{ word: "el plato principal", match: "maindish.png" }
			];
		} else if (option == "frutas") {
			pairs = [
				{ word: "la banana", match: "banana.png" },
				{ word: "las frutas", match: "fruits.png" },
				{ word: "el limón", match: "lemon.png" },
				{ word: "la manzana", match: "apple.png" },
				{ word: "el melocotón", match: "peach.jpg" },
				{ word: "la naranja", match: "orange.png" },
				{ word: "la pera", match: "pear.png" },
				{ word: "las uvas", match: "grapes.png" },
				{ word: "las arvejas", match: "peas.jpg" },
				{ word: "la cebolla", match: "onion.png" },
				{ word: "el champiñión", match: "mushroom.jpg" },
				{ word: "la ensalada", match: "salad.jpg" },
				{ word: "los espárragos", match: "asparagus.jpg" },
				{ word: "los frijoles", match: "beans.jpg" },
				{ word: "la lechuga", match: "lettuce.png" },
				{ word: "el maíz", match: "corn.jpg" },
				{ word: "las papas/patatas fritas", match: "fries.jpg" },
				{ word: "el tomate", match: "tomato.png" },
				{ word: "las verduras", match: "vegetables.jpg" },
				{ word: "la zanahoria", match: "carrot.png" }
			];
		} else if (option == "carne") {
			pairs = [
				{ word: "el atún", match: "tuna.jpg" },
				{ word: "el bistec", match: "steak.jpg" },
				{ word: "los camarones", match: "shrimp.jpg" },
				{ word: "la carne", match: "meat.png" },
				{ word: "la carne de res", match: "beef.jpg" },
				{ word: "la chuleta (de cerdo)", match: "porkchop.jpg" },
				{ word: "la hamburguesa", match: "hamburger.jpg" },
				{ word: "el jamón", match: "ham.jpg" },
				{ word: "la langosta", match: "lobster.jpg" },
				{ word: "los mariscos", match: "shellfish.jpg" },
				{ word: "el pavo", match: "turkey.jpg" },
				{ word: "el pescado", match: "fish.jpg" },
				{ word: "el pollo (asado)", match: "chicken.jpg" },
				{ word: "la salchicha", match: "sausage.jpg" },
				{ word: "el salmón", match: "salmon.jpg" }
			];
		} else if (option == "otras") {
			pairs = [
				{ word: "el aceite", match: "oil.png" },
				{ word: "el ajo", match: "garlic.png" },
				{ word: "el arroz", match: "rice.jpg" },
				{ word: "el azúcar", match: "sugar.png" },
				{ word: "los cereales", match: "cereal.png" },
				{ word: "el huevo", match: "egg.jpg" },
				{ word: "la mantequilla", match: "butter.png" },
				{ word: "la margarina", match: "margarine.png" },
				{ word: "la mayonesa", match: "mayo.png" },
				{ word: "el pan (tostado)", match: "bread.png" },
				{ word: "la pimienta", match: "pepper.jpg" },
				{ word: "el queso", match: "cheese.png" },
				{ word: "la sal", match: "salt.png" },
				{ word: "el sándwich", match: "sandwich.jpg" },
				{ word: "la sopa", match: "soup.jpg" },
				{ word: "el vinagre", match: "vinegar.png" },
				{ word: "el yogur", match: "yogurt.png" }
			];
		} else if (option == "bebidas") {
			pairs = [
				{ word: "el agua (mineral)", match: "water.png" },
				{ word: "la bebida", match: "drinks.png" },
				{ word: "el café", match: "coffee.jpg" },
				{ word: "la cerveza", match: "beer.webp" },
				{ word: "el jugo de naranja", match: "juice.jpg" },
				{ word: "la leche", match: "milk.png" },
				{ word: "el refresco", match: "soda.jpg" },
				{ word: "el té (helado)", match: "tea.jpg" },
				{ word: "el vino (blanco/tinto)", match: "wine.png" },
				{ word: "el chocolate caliente", match: "hotchoc.jpg" },
				{ word: "el jugo de manzana", match: "applejuice.png" },
				{ word: "el batido", match: "milkshake.jpg" }
			];
		}

		let cards = document.getElementsByClassName("cards");
		console.log(cards);

		for (let i = 0; i < cards.length; i++) {
			cards[i].style.backgroundColor = "skyblue";
		}

		// shuffles the cards
		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				// Generate a random index from 0 to i
				const j = Math.floor(Math.random() * (i + 1));
				// Swap elements at indices i and j
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}
		function shuffleAssign() {
			cards = document.getElementsByClassName("cards");
			// shuffle list of pairs
			let shuffledPairs = shuffleArray(pairs);
			console.log(shuffledPairs);

			//create a new array for selected pairs this round
			let cardPairs = [];

			//add the first cards.length/2 pairs with word and match to new array
			for (let i = 0; i < cards.length / 2; i++) {
				cardPairs.push({ word: shuffledPairs[i].word, type: "word" });
				cardPairs.push({ word: shuffledPairs[i].match, type: "image" });
			}
			console.log(cardPairs);

			//shuffle that array
			cardPairs = shuffleArray(cardPairs);

			// iterate over that array to assign cards
			for (let i = 0; i < cardPairs.length; i++) {
				if (cardPairs[i].type == "word") {
					cards[i].innerHTML = "<p>" + cardPairs[i].word + "</p>";
					cards[i].onclick = isClicked;
				}
				if (cardPairs[i].type == "image") {
					cards[i].innerHTML = '<img class="words" src="images/' + cardPairs[i].word + '">';
					cards[i].onclick = isClicked;
				}
			}
			// creates a function to determine if the card is clicked and if so what to do
			function isClicked(e) {
				let tomatch1 = "";
				let tomatch2 = "";
				let cardClicked = e.srcElement;

				console.log(cardClicked.children.length);
				cardClicked.classList.add("clicked");
				let clicked = document.getElementsByClassName("clicked");
				if (clicked.length == 2) {
					if (clicked[0].localName == "p" || clicked[0].localName == "div") {
						//console.log("word");
						//console.log(clicked[0].innerText);
						tomatch1 = clicked[0].innerText;
					} else {
						//console.log("image");
						//console.log(clicked[0].src);
						let text = clicked[0].src;
						const myArray = text.split("/");
						let imagename = myArray.pop();
						console.log(imagename);
						tomatch1 = imagename;
					}
					if (clicked[1].localName == "p" || clicked[1].localName == "div") {
						//console.log("word");
						//console.log(clicked[0].innerText);
						tomatch2 = clicked[1].innerText;
					} else {
						//console.log("image");
						//console.log(clicked[0].src);
						let text = clicked[1].src;
						const myArray = text.split("/");
						let imagename = myArray.pop();
						console.log(imagename);
						tomatch2 = imagename;
					}
					// styling and such if the cards are a match
					if (isMatch(tomatch1, tomatch2)) {
						clicked[0].style.backgroundColor = "green";
						clicked[1].style.backgroundColor = "green";

						clicked[0].disabled = true;
						clicked[1].disabled = true;

						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					} else {
						clicked[0].classList.remove("clicked");
						clicked[0].classList.remove("clicked");
					}
				}
			}

			// creates a function to determine if player has won using a scoring system
			function win() {
				document.getElementById("yw").innerText = "YOU WIN!";
				document.getElementById("yw").hidden = false;
				document.getElementById("title").style.marginBottom = "5px";
			}
			let score = 0;
			document.getElementById("score").innerText = "Score: " + score;
			document.getElementById("yw").hidden = true;

			function isMatch(item1, item2) {
				for (let i = 0; i < pairs.length; i++) {
					if (
						(item1 == pairs[i].word && item2 == pairs[i].match) ||
						(item2 == pairs[i].word && item1 == pairs[i].match)
					) {
						score = score + 1;
						document.getElementById("score").innerText = "Score: " + score;
						if (score == 12) {
							win();
						}
						return true;
					}
				}
				return false;
			}

			// creates a restart function so that the player can continue playing
			document.getElementById("restart").onclick = function () {
				score = 0;
				document.getElementById("score").innerText = "Score: " + score;
				shuffleAssign(); // Shuffle and assign new cards
				document.getElementById("yw").hidden = true; // Hide the win message
				for (let i = 0; i < cards.length; i++) {
					cards[i].style.backgroundColor = "skyblue";
				}
			};
		}
		// calls the function in which the majority of the code is in
		shuffleAssign();
	}
});
