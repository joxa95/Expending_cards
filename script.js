const panels = document.querySelectorAll('.panels');

console.log(panels);
panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActivePanels();
		panel.classList.add('active');
	});
});

function removeActivePanels() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}
