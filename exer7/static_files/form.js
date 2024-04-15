// Function to create food card
function createFoodCard(name, description, imageURL, rank) {
	// Create card element and set its innerHTML
	// Add delete button with event listener
	// Append card to food-cards section
	const card = document.createElement("div");
    card.className = "food-card";
	card.id = rank;
	card.innerHTML = 
    `<img src="${imageURL}" alt="image of ${name}" style="width:250px">
    <p><b>Name</b>: ${name}</p>
    <p><b>Description</b>: ${description}</p>
    <p><b>Rank</b>: ${rank}</p>
    <p><button class="delete-button">Delete</button>
    </div><br><br>`;

	// Add event listener to delete button
	const deleteButton = card.querySelector(".delete-button");
	deleteButton.addEventListener("click", function () {
		deleteFoodCard(card);
	});

	return card;
}

document
	.getElementById("food-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		// Get input
		fname = document.getElementById("fname").value;
		desc = document.getElementById("desc").value;
		url = document.getElementById("url").value;
		rank = document.getElementById("rank").value;

		//create food card and add to the DOM
		const card = createFoodCard(fname, desc, url, rank);

		// Append card to food-cards section
		const cardsList = document.getElementById("food-cards");

		// If empty just add
		if (cardsList.childNodes.length === 3) {
			cardsList.appendChild(card);
		}

		// Else, do a sorted append
		else {
			for (node of cardsList.childNodes) {
				if (Number(rank) < Number(node.id)) {
					cardsList.insertBefore(card, node);
				} else {
					cardsList.appendChild(card);
				}
			}
		}
	});

document
	.getElementById("food-cards")
	.addEventListener("delete", function (event) {
		event.preventDefault();

		card = document.getElementById("food-card");

		deleteFoodCard(card);
	});

// Function to delete food card
function deleteFoodCard(card) {
	// Remove card from the DOM
	document.getElementById("food-cards").removeChild(card);
}
