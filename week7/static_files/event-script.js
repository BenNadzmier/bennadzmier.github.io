const removeButton = document.getElementById("remove-game")
const removeGame = () => {
  alert('Removing one game')
}

removeButton.addEventListener("click", removeGame)

// we can also remove event listeners
removeButton.removeEventListener("click", removeGame)