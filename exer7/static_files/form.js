// Function to create food card
function createFoodCard(name, description, imageURL, rank) {
	// Create card element and set its innerHTML
	// Add delete button with event listener
	// Append card to food-cards section
    const card = document.createElement("div");
    card.style.width = "300px";
    card.style.borderStyle = "solid";
	card.innerHTML = `<p><b>Name</b>: ${name}</p><p><b>Description</b>: ${description}</p><b>URL:</b> ${imageURL}</p><p><b>Rank</b>: ${rank}</p><p><button class="delete-button">Delete</button></div><br><br>`;


    // Add event listener to delete button
	const deleteButton = card.querySelector(".delete-button");
	deleteButton.addEventListener("click", function () {
		deleteFoodCard(card);
	});

	// Append card to food-cards section
	document.getElementById("food-cards").appendChild(card);
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

		// Validate form inputs
		// TO-DO

		// If inputs are valid, create food card and add to the DOM
		createFoodCard(fname, desc, url, rank);
	});


document.getElementById("food-cards").addEventListener("delete", function (event){
    event.preventDefault();

    card = document.getElementById("food-card")

    deleteFoodCard(card);
});
    
// Function to delete food card
function deleteFoodCard(card) {
	// Remove card from the DOM
    document.getElementById("food-cards").removeChild(card);
}

//     // 6. Remove an element
// const gamesList = document.getElementById("games-list")
// //gamesList.removeChild(games[2])