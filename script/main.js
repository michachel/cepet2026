
// === Header & Burger ===
function initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => nav.classList.toggle('open'));
}

// === Hero Slider ===
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const heroText = document.getElementById('hero-text');
    const texts = [
        { title: 'Jean-Michel Fougeray', subtitle: 'Le nouvel Hokage !', button: 'Découvrez mon équipe' },
        { title: 'Vers un nouveau chemin', subtitle: 'Pour une vision durable de Cépet', button: 'Notre vision' },
        { title: 'Tous ensemble aux municipales', subtitle: 'On se donne rendez-vous en 2026 !', button: 'Nos actus' }
    ];

    let index = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[i].classList.add('active');
        dots[i].classList.add('active');
        heroText.innerHTML = `<h1>${texts[i].title}</h1><p>${texts[i].subtitle}</p><button>${texts[i].button}</button>`;
        index = i;
    }

    showSlide(0);
    setInterval(() => showSlide((index + 1) % slides.length), 4000);

    dots.forEach(dot => {
        dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
    });

    heroText.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            if (e.target.textContent === 'Découvrez mon équipe') window.location.href = 'monequipe.html';
            else if (e.target.textContent === 'Voir notre vision') window.location.href = 'programme.html';
        }
    });
}

// === Team Slider ===
const teamMembers = [
    {
      name: "Jean Dupont",
      role: "Responsable finances",
      img: "https://picsum.photos/seed/team1/300/300",
      desc: "Description longue complète du membre. Elle peut dépasser largement 150 caractères sans problème. Ce texte sera tronqué dans la carte mais affiché en entier dans la modale."
    },
    // … jusqu’à 21 membres
  ];
function initTeamSlider() {
    const teamMembers = Array.from({ length: 21 }, (_, i) => ({
        name: `Nom ${i + 1}`,
        role: `Rôle ${i + 1}`,
        img: `https://picsum.photos/seed/team${i + 1}/300/300`,
        desc: `Description du membre ${i + 1}.`
    }));

    const teamSlider = document.getElementById('teamSlider');
    let teamIndex = 0;

    function renderTeam() {
        let html = '';
        for (let i = 0; i < teamMembers.length; i += 3) {
            html += '<div class="team-slide">';
            teamMembers.slice(i, i + 3).forEach(m => {
                html += `<div class="team-member"><img src="${m.img}"><h3>${m.name}</h3><p>${m.role}</p><p>${m.desc}</p></div>`;
            });
            html += '</div>';
        }
        teamSlider.innerHTML = html;
        updateTeamSlider();
    }

    function updateTeamSlider() {
        teamSlider.style.transform = `translateX(-${teamIndex * 100}%)`;
    }

    renderTeam();

    document.getElementById('prevTeam').addEventListener('click', () => {
        teamIndex = (teamIndex - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3);
        updateTeamSlider();
    });

    document.getElementById('nextTeam').addEventListener('click', () => {
        teamIndex = (teamIndex + 1) % Math.ceil(teamMembers.length / 3);
        updateTeamSlider();
    });

    setInterval(() => {
        teamIndex = (teamIndex + 1) % Math.ceil(teamMembers.length / 3);
        updateTeamSlider();
    }, 4000);
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// === Actus Slider & Modal ===
function initActus() {
    const actusData = [
        { title: 'Réunion publique avec les habitants', text: '...', date: '15 décembre 2024', img: 'https://picsum.photos/seed/actus1/400/250' },
        { title: 'Rénovation du centre-ville', text: '...', date: '10 décembre 2024', img: 'https://picsum.photos/seed/actus2/400/250' },
        { title: 'Nouvelle saison des activités associatives', text: '...', date: '5 décembre 2024', img: 'https://picsum.photos/seed/actus3/400/250' }
    ];

    const actusSlider = document.getElementById('actusSlider');
    let actusIndex = 0;


    function renderActus() {
        let html = '';
        if (actusData.length > 3) {
            for (let i = 0; i < actusData.length; i += 3) {
                html += '<div class="actus-slide"><div class="actus-cards">';
                actusData.slice(i, i + 3).forEach((article, idx) => {
                    const globalIndex = i + idx;
                    html += `<div class="actus-card">
                                <img src="${article.img}" alt="${article.title}">
                                <h3>${article.title}</h3>
                                <p class="actus-description">${truncateText(article.text, 150)}</p>
                                <div class="actus-footer">
                                    <span class="actus-date">${article.date}</span>
                                    <a href="#" class="actus-link" data-index="${globalIndex}">Lire l'article</a>
                                </div>
                             </div>`;
                });
                html += '</div></div>';
            }
        } else {
            html = '<div class="actus-slide"><div class="actus-cards">';
            actusData.forEach((article, idx) => {
                html += `<div class="actus-card">
                            <img src="${article.img}" alt="${article.title}">
                            <h3>${article.title}</h3>
                            <p class="actus-description">${truncateText(article.text,150)}</p>
                            <div class="actus-footer">
                                <span class="actus-date">${article.date}</span>
                                <a href="#" class="actus-link" data-index="${idx}">Lire l'article</a>
                            </div>
                         </div>`;
            });
            html += '</div></div>';
        }
        actusSlider.innerHTML = html;

        document.querySelectorAll('.actus-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openActusModal(parseInt(link.dataset.index));
            });
        });
        updateActusSlider();
    }

    function updateActusSlider() {
        actusSlider.style.transform = `translateX(-${actusIndex*100}%)`;
    }

    function openActusModal(index) {
        const modal = document.getElementById('actusModal');
        const article = actusData[index];
        modal.querySelector('.modal-image').src = article.img;
        modal.querySelector('.modal-image').alt = article.title;
        modal.querySelector('.modal-title').textContent = article.title;
        modal.querySelector('.modal-text').textContent = article.text;
        modal.querySelector('.modal-date').textContent = article.date;
        modal.style.display = 'flex';
    }

    function closeActusModal() {
        document.getElementById('actusModal').style.display='none';
    }

    document.getElementById('closeModal').addEventListener('click', closeActusModal);
    document.getElementById('actusModal').addEventListener('click', e => {
        if(e.target.id==='actusModal') closeActusModal();
    });
    document.addEventListener('keydown', e => {
        if(e.key==='Escape') closeActusModal();
    });

    renderActus();

    if(actusData.length > 3){
        document.getElementById('prevActus').addEventListener('click', () => {
            actusIndex = (actusIndex-1 + Math.ceil(actusData.length/3)) % Math.ceil(actusData.length/3);
            updateActusSlider();
        });
        document.getElementById('nextActus').addEventListener('click', () => {
            actusIndex = (actusIndex+1) % Math.ceil(actusData.length/3);
            updateActusSlider();
        });
        setInterval(() => {
            actusIndex = (actusIndex+1) % Math.ceil(actusData.length/3);
            updateActusSlider();
        },4000);
    } else {
        document.querySelector('.actus-nav').style.display='none';
    }
}

// === Initialisation ===
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHeroSlider();
    initTeamSlider();
    initActus();
});