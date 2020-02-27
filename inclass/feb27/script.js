/* Shows an array of items that is added to a created ul li element */
function showToys() {
	let toys = ['Drum', 'Ball', 'Car', 'Bike'];
	let toyResults = document.getElementById('toys-results');
	toyResults.innerHTML = '';
	let ulElement = document.createElement('ul');
	toyResults.append(ulElement);

	for (let i in toys) {
		let liElement = document.createElement('li');
		liElement.textContent = toys[i];
		ulElement.append(liElement);
		console.log(toys[i]);

		// Highlight every other item
		if (i % 2 == 0) {
			liElement.classList.add('highlight');
		}
	}
}

let color = 'red';
function toggleToys() {
	let toyResults = document.getElementById('toys-results');
	toyResults.style.color = 'green';
	toyResults.classList.toggle('hidden');
	toyResults.style.color = color;

	// interval between red and green text
	if (color == 'red' && !toyResults.classList.contains('hidden')) {
		color = 'green';
	} else if (color == 'green' && !toyResults.classList.contains('hidden')) {
		color = 'red';
	}
}

showToys();
setInterval(toggleToys, 500);
//document.getElementById('show-toys-btn').onclick = toggleToys;
