fetch('./championFull.json')
    .then(response => response.json())
    .then(data => {
        const champions = data.data;
        const grid = document.getElementById('grid');

        Object.values(champions).forEach(champion => {
            const card = document.createElement('div');
            card.classList.add('champion-card');

            const img = document.createElement('img');
            img.src = `./images/champion/${champion.image.full}`;
            img.alt = champion.name;

            const name = document.createElement('h3');
            name.textContent = champion.name;

            card.appendChild(img);
            card.appendChild(name);

            card.addEventListener('click', () => {
                window.location.href = `details_chmp/details.html?champion=${champion.id}`;
            });

            grid.appendChild(card);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des champions:', error));
