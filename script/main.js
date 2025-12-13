
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
        { title: 'Cépet, un avenir qui nous rassemble', subtitle: '', button: 'Découvrez mon équipe' },
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
function initTeamSlider() {
    const teamMembers = [
        {
          name: "Jean Dupont",
          role: "Responsable finances",
          img: "https://picsum.photos/seed/team1/300/300",
          desc: "Description longue complète du membre. Elle peut dépasser largement 150 caractères sans problème. Ce texte sera tronqué dans la carte mais affiché en entier dans la modale."
        },
        
        {
            name: "Jean Dupont",
            role: "Responsable finances",
            img: "https://picsum.photos/seed/team2/300/300",
            desc: "Description longue complète du membre. Elle peut dépasser largement 150 caractères sans problème. Ce texte sera tronqué dans la carte mais affiché en entier dans la modale."
        },
    
        {
            name: "Jean Dupont",
            role: "Responsable finances",
            img: "https://picsum.photos/seed/team3/300/300",
            desc: "Description longue complète du membre. Elle peut dépasser largement 150 caractères sans problème. Ce texte sera tronqué dans la carte mais affiché en entier dans la modale."
        },
    
        {
            name: "Jean Dupont",
            role: "Responsable finances",
            img: "https://picsum.photos/seed/team4/300/300",
            desc: "Description longue complète du membre. Elle peut dépasser largement 150 caractères sans problème. Ce texte sera tronqué dans la carte mais affiché en entier dans la modale."
        },
    
        {
            name: "Jean Dupont",
            role: "Responsable finances",
            img: "https://picsum.photos/seed/team5/300/300",
            desc: "Description longue complète du membre. Elle peut dépasser largement 150 caractères sans problème. Ce texte sera tronqué dans la carte mais affiché en entier dans la modale."
        },
    
        {
            name: "Jean Dupont",
            role: "Responsable finances",
            img: "https://picsum.photos/seed/team6/300/300",
            desc: "Description longue complète du membre. Elle peut dépasser largement 150 caractères sans problème. Ce texte sera tronqué dans la carte mais affiché en entier dans la modale."
        }
        // … jusqu’à 21 membres
      ];
const teamSlider = document.getElementById('teamSlider');
let teamIndex = 0;
const perSlide = 3;
const totalSlides = Math.ceil(teamMembers.length / perSlide);

function renderTeam() {
    let html = '';

    for (let i = 0; i < teamMembers.length; i += perSlide) {
    html += '<div class="team-slide">';
    teamMembers.slice(i, i + perSlide).forEach((m, index) => {
        const globalIndex = i + index;
        html += `
        <div class="team-member">
            <img src="${m.img}" alt="${m.name}">
            <h3>${m.name}</h3>
            <p class="role">${m.role}</p>
            <p class="desc">${truncateText(m.desc)}</p>
            <button class="team-more" data-index="${globalIndex}">
            En savoir +
            </button>
        </div>
        `;
    });
    html += '</div>';
    }

    teamSlider.innerHTML = html;
    updateTeamSlider();
    bindMoreButtons();
}

function updateTeamSlider() {
    teamSlider.style.transform = `translateX(-${teamIndex * 100}%)`;
}

function bindMoreButtons() {
    document.querySelectorAll('.team-more').forEach(btn => {
    btn.addEventListener('click', () => {
        openTeamModal(btn.dataset.index);
    });
    });
}

renderTeam();

document.getElementById('prevTeam').onclick = () => {
    teamIndex = (teamIndex - 1 + totalSlides) % totalSlides;
    updateTeamSlider();
};

document.getElementById('nextTeam').onclick = () => {
    teamIndex = (teamIndex + 1) % totalSlides;
    updateTeamSlider();
};

setInterval(() => {
    teamIndex = (teamIndex + 1) % totalSlides;
    updateTeamSlider();}, 10000);

function openTeamModal(index) {
    const m = teamMembers[index];
    document.getElementById('modalImg').src = m.img;
    document.getElementById('modalName').textContent = m.name;
    document.getElementById('modalRole').className = 'role';
    document.getElementById('modalRole').textContent = m.role;
    document.getElementById('modalDesc').textContent = m.desc;
    document.getElementById('teamModal').style.display = 'flex';
    }
    
    document.getElementById('closeTeamModal').onclick = () => {
    document.getElementById('teamModal').style.display = 'none';
    };
    
    document.getElementById('teamModal').onclick = e => {
        if (e.target.id === 'teamModal') {
            document.getElementById('teamModal').style.display = 'none';
        }
    };
    
    function openTeamModal(index) {
        const m = teamMembers[index];
        const modal = document.getElementById('teamModal');
    
        // 1. Mettre l'image et le contenu
        document.getElementById('modalImg').src = m.img;
        document.getElementById('modalName').textContent = m.name;
        document.getElementById('modalRole').className = m.role;
        document.getElementById('modalRole').textContent = m.role;
        document.getElementById('modalDesc').textContent = m.desc;
    
        // 2. Afficher la modale
        modal.style.display = 'flex';
    
        // 3. Déclencher animation
        requestAnimationFrame(() => {
            modal.classList.add('show');
        });
    }
    
    function closeTeamModal() {
        const modal = document.getElementById('teamModal');
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }
    
    document.getElementById('closeTeamModal').onclick = closeTeamModal;
    document.getElementById('teamModal').onclick = e => {
        if (e.target.id === 'teamModal') closeTeamModal();
    };
    
    
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// === Actus Slider & Modal ===
function initActus() {
    const actusData = [
        { title: 'Réunion publique avec les habitants', text: 'une très longue actualités mais c\'est ok pas besoin d\'en faire tout un drame on va voir jusqu\'où ça va mais faut continuer longtemps pour arriver jusqu\'au trois petits points.', date: '15 décembre 2024', img: 'https://picsum.photos/seed/actus1/400/250' },
        { title: 'Rénovation du centre-ville', text: '...', date: '10 décembre 2024', img: 'https://picsum.photos/seed/actus2/400/250' },
        { title: 'Nouvelle saison des activités associatives', text: '...', date: '5 décembre 2024', img: 'https://picsum.photos/seed/actus3/400/250' },
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

function initGallery() {
    const galleryImages = [
        { src: "https://picsum.photos/seed/gallery1/1200/900", thumb: "https://picsum.photos/seed/gallery1/800/600", alt: "Photo 1" },
        { src: "https://picsum.photos/seed/gallery2/1200/900", thumb: "https://picsum.photos/seed/gallery2/800/600", alt: "Photo 2" },
        { src: "https://picsum.photos/seed/gallery3/1200/900", thumb: "https://picsum.photos/seed/gallery3/800/600", alt: "Photo 3" },
        { src: "https://picsum.photos/seed/gallery4/1200/900", thumb: "https://picsum.photos/seed/gallery4/800/600", alt: "Photo 4" },
        { src: "https://picsum.photos/seed/gallery5/1200/900", thumb: "https://picsum.photos/seed/gallery5/800/600", alt: "Photo 5" },
        { src: "https://picsum.photos/seed/gallery6/1200/900", thumb: "https://picsum.photos/seed/gallery6/800/600", alt: "Photo 6" },
        { src: "https://picsum.photos/seed/gallery1/1200/900", thumb: "https://picsum.photos/seed/gallery1/800/600", alt: "Photo 1" },
        { src: "https://picsum.photos/seed/gallery2/1200/900", thumb: "https://picsum.photos/seed/gallery2/800/600", alt: "Photo 2" },
        { src: "https://picsum.photos/seed/gallery3/1200/900", thumb: "https://picsum.photos/seed/gallery3/800/600", alt: "Photo 3" },
        { src: "https://picsum.photos/seed/gallery4/1200/900", thumb: "https://picsum.photos/seed/gallery4/800/600", alt: "Photo 4" },
        { src: "https://picsum.photos/seed/gallery5/1200/900", thumb: "https://picsum.photos/seed/gallery5/800/600", alt: "Photo 5" },
        { src: "https://picsum.photos/seed/gallery6/1200/900", thumb: "https://picsum.photos/seed/gallery6/800/600", alt: "Photo 6" },
        // ajouter les autres images ici
      ];

    const gallerySlider = document.getElementById("gallerySlider");
let galleryIndex = 0;
const perSlide = 3; // nombre d'images par slide

function renderGallery() {
  let html = "";
  for (let i = 0; i < galleryImages.length; i += perSlide) {
    html += '<div class="gallery-slide">';
    galleryImages.slice(i, i + perSlide).forEach(img => {
      html += `<a href="${img.src}" data-fancybox="gallery" data-caption="${img.alt}">
                 <img src="${img.thumb}" alt="${img.alt}">
               </a>`;
    });
    html += '</div>';
  }
  gallerySlider.innerHTML = html;
  updateGallerySlider();
}

function updateGallerySlider() {
  gallerySlider.style.transform = `translateX(-${galleryIndex * 100}%)`;
}

document.getElementById('prevGallery').addEventListener('click', () => {
  const totalSlides = Math.ceil(galleryImages.length / perSlide);
  galleryIndex = (galleryIndex - 1 + totalSlides) % totalSlides;
  updateGallerySlider();
});

document.getElementById('nextGallery').addEventListener('click', () => {
  const totalSlides = Math.ceil(galleryImages.length / perSlide);
  galleryIndex = (galleryIndex + 1) % totalSlides;
  updateGallerySlider();
});

// auto-slide optionnel
setInterval(() => {
  const totalSlides = Math.ceil(galleryImages.length / perSlide);
  galleryIndex = (galleryIndex + 1) % totalSlides;
  updateGallerySlider();
}, 5000);

renderGallery();
}

// === Initialisation ===
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHeroSlider();
    initTeamSlider();
    initActus();
    initGallery();
});