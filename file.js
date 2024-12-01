const container = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');

function createGrid(size) {
    container.innerHTML = ''; // Réinitialiser le contenu de la grille

    // Dynamiser les colonnes et les lignes en fonction de la taille de la grille
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');

        // Ajout d'une couleur aléatoire au survol
        grid.addEventListener("mouseover", function () {
            const color1 = Math.floor(Math.random() * 256);
            const color2 = Math.floor(Math.random() * 256);
            const color3 = Math.floor(Math.random() * 256);
            grid.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
        });

        container.appendChild(grid);
    }
}

resetButton.addEventListener('click', function () {
    let size = parseInt(prompt("Enter the number of squares per side (max 100):"));

    if (!size || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(size);
});

createGrid(16); // Grille initiale de 16x16