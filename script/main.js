
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
        { title: 'Jean-Michel Fougeray', subtitle: 'Cépet, un avenir qui nous rassemble', button: 'Découvrez mon équipe', dataTarget: 'equipe' },
        { title: 'Pour une vision durable de Cépet', subtitle: '', button: 'Notre vision', dataTarget: 'programme' },
        { title: 'Tous ensemble aux municipales', subtitle: 'On se donne rendez-vous en 2026 !', button: 'S\'inscrire', dataTarget: 'vote' }
    ];

    let index = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[i].classList.add('active');
        dots[i].classList.add('active');
        heroText.innerHTML = `<h1>${texts[i].title}</h1><p>${texts[i].subtitle}</p><button data-target="${texts[i].dataTarget}">${texts[i].button}</button>`;
        index = i;
    }

    showSlide(0);
    setInterval(() => showSlide((index + 1) % slides.length), 5000);

    dots.forEach(dot => {
        dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
    });

    heroText.addEventListener('click', e => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const target = btn.dataset.target;
        if (target) window.location.href = `index.html#${target}`;
    });
    
}

// === Team Slider ===
function initTeamSlider(isMobile) {
    const teamMembers = [
        {
            name: "Coulombel Mickaël",
            role: "Ingénieur d'application à Orange", 
            img: "./css/mickaelCoulombel.jpg", 
            descShort: "Mickaël, 36 ans, 2 enfants, ingénieur d’application chez Orange.", 
            desc: "A Cépet depuis 2017, passionné par la vie locale, je participe activement à l’association Cép’a du  jeu afin de rassembler petits et grands autour des jeux de société.<br>Je rejoins la l'équipe pour améliorer les services publics, valoriser le côté boisé, fleuri et convivial de notre village, tout en accompagnant la commune vers des solutions modernes et connectées qui faciliteront la vie quotidienne de ses habitants. Je souhaite que la gouvernance du village reste transparente, ouverte et participative."
        },
        {
            name: "Vert ép Plages  Marion",
            role: "Infirmière puéricultrice", 
            img: "./css/DSC00425R Marion_portrait.jpg", 
            descShort: "Marion, 38 ans, 2 enfants, infirmière puéricultrice à l’hôpital des enfants de Purpan.", 
            desc: "Installée à Cépet avec ma famille depuis 8 ans, je suis impliquée dans le Comité des Parents d’élèves depuis plusieurs années.<br>Mes expériences de travail en équipe, de bienveillance, d’écoute et d’entraide sont des atouts que j’aimerai mettre en valeur dans l’investissement que je souhaite soumettre à la commune de Cépet."
        },
        {
            name: "MAZARS  Laure",
            role: "Assistante maternelle", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "Laure, 39 ans, 2 enfants, Assistante Maternelle sur la commune de Cépet.", 
            desc: "Investie au sein de la commune dans le cadre du Comité des parents d’élèves depuis 5 ans, je souhaite dynamiser la commune en offrant plus d’espace à la jeunesse et aux besoins de chacun afin de redynamiser le village avec notamment, des évènements festifs et conviviaux."
        },

        {
            name: "POTTIER Thomas",
            role: "Chef d'équipe ", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "Thomas, 38 ans, 2 enfants, chef d’équipe dans l’aéronautique.", 
            desc: "Concerné par les problématiques de la commune, je souhaite m’investir dans la vie du village et y apporter mes valeurs de transparence, de dialogue et de vie de famille."
        },
        {
            name: "CAILLAUD Mélanie",
            role: "Manager cheffe de projet", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: "Mélanie Caillaud, 40 ans, 2 enfants, manager et cheffe de projet.<br>J'ai toujours eu le goût et l'envie d'aider et de faire grandir les autres ou un collectif. C'est donc tout naturellement, qu'après m'être investie au sein des DPE et du Comité des parents d'élèves ces dernières années, je souhaite contribuer à apporter convivialité, bonne humeur et intégrité à la commune de Cépet."
        },
        {
            name: "GARRIGUES Bruno",
            role: "ingénieur aéronautique", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: "Je m'appelle Bruno Garrigues, j'ai 42 ans, je suis marié et père de deux enfants de 6 et 8 ans scolarisés à l'école du village. Originaire du Sud du département, après des études et quelques années de vie à Toulouse, j'ai fait le choix de construire ma famille à Cepet en 2017. Je suis ingénieur aéronautique. J'aime le sport en général, passer de bons moments en famille et avec les amis. J'ai souhaité intégrer cette aventure car je veux être acteur de la vie du village. Les valeurs qui me tiennent à cœur sont la bienveillance, la solidarité et le partage."
        },
        
        {
            name: "LE GALLO Laetitia",
            role: "AESH / Reflexologue", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: "Investie dans les associations sur Cépet, il me semblait naturel de participer d'avantage à l'organisation du village. Collaborer à créer un lien entre les générations, un lieu de vie, où il fait bon vivre. Les valeurs qui me portent sont le partage, le respect, la bienveillance et l'entraide."
        },
        {
            name: "FOLLET BOTELLA Céline",
            role: "Assistante de Direction", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: "Assistante de Direction mais forte de 18 années d'expériences dans le domaine du social, je suis profondément attachée aux valeurs d'écoute, de solidarité et de respect. Présidente de l'association qui gère ma rue de 42 logements depuis 2019 (ASL), je m'investis au sein du bureau pour le bon fonctionnement du vivre ensemble. Aujourd'hui je souhaite mettre mon énergie, mon sens de l'humain et mon esprit d'équipe au service des habitants pour faire vivre une commune dynamique, conviviale et proche de ses citoyens"
        },
        {
            name: "Crebassa  Jérôme",
            role: "Formateur à la sécurité routière ", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: "Je m’engage pour améliorer le cadre de vie à Cépet dans le but d’avoir un village plus animé ou il fait bon vivre ensemble. <br>Je souhaite pouvoir faire remonter les demandes des habitants de tout âge, afin que tout le monde puisse être entendu."
        },
        {
            name: "Ortega  Rébecca",
            role: "assistante de vie", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: "Je m'appelle Rébecca, j'ai 37 ans, je suis pacsée et j'ai deux enfants de 12 et 8 ans. Je suis assistante de vie auprès de particuliers, je travaille au sein même des foyers. <br>Je m'engage pour défendre les valeurs auxquelles je crois: la solidarité, la transparence et la proximité. De plus je souhaite pouvoir participer activement aux décisions qui impactent directement notre quotidien à tous et pouvoir le faire ensemble. "
        },
        {
            name: "Rivière Julien",
            role: "Responsable E-commerce", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "./css/DSC00393R Julien_portrait.jpg", 
            desc: "Marié, 3 enfants ,responsable E-commerce au sein d'une petite entreprise, je suis également président de l'association Cep'A du jeu, que j'ai créée avec ma femme il y a six ans dans notre village. J'ai démontré ma capacité à mobiliser, fédérer et concrétiser des projets en organisant avec succès trois festivals sur notre commune.<br>Fort de cette expérience associative, je souhaite m'investir dans la vie locale de notre village. Mes compétence professionnelles sont un atout pour dynamiser et moderniser les actions de notre commune.<br>Je rejoins cette liste apolitique pour mettre mon énergie et mon expertise au service d'un seul objectif : rendre notre commune un lieu de vie agréable, stimulant et innovant pour toutes les générations."
        },
        {
            name: "CARPANA Jess",
            role: "chauffeur routier", 
            img: "./css/DSC00399R Jess.jpg", 
            descShort: "", 
            desc: "Bonjour a tous , je m appelle Jess Carpana, j ai 46 ans ,marié 2 enfans , et je suis installé à Cépet depuis 9 ans. Mon parcours, que ce soit  professionnel ou personnel, m’a toujours conduit à m’engager pour les autres et à travailler de manière collaborative.<br>Si je souhaite aujourd’hui rejoindre l’équipe municipale, c’est avant tout par volonté de contribuer davantage à la vie de notre village. Je suis animé par des valeurs simples : le sens du service, l’écoute, la proximité et la transparence.<br>J’aimerais pouvoir mettre mon énergie au service de projets utiles à tous, comme <br>- le renforcement du lien social -l’amélioration du quotidien des habitants ou encore le soutien aux initiatives locales qui font vivre notre commune.<br>Je suis convaincu que c’est collectivement, dans le respect et le dialogue, que nous pouvons continuer à faire évoluer notre ville de manière positive"
        },
        {
            name: "Rivière Gaëlle",
            role: "Infirmière en mission de coordination", 
            img: "./css/DSC00339R Gaelle_portrait.jpg", 
            descShort: "", 
            desc: "Je m’appelle Gaëlle Rivière, j’ai 40 ans mariée 3 enfants et je suis infirmière, actuellement en mission de coordination à la Maison d'Accueil Spécialisée des Marronniers à Cépet. <br>Depuis 2019, j’ai l’honneur d’être présidente du comité des parents d’élèves, rôle à travers lequel j’aime imaginer et organiser des événements pour les enfants du village. <br>Avec mon époux, nous avons également fondé en 2019 l’association Cep’A Du Jeu, dont la vocation est de redonner aux familles et aux amis le plaisir de jouer ensemble et de partager des instants de convivialité et de rires. <br>Cet engagement m’a naturellement donné envie de poursuivre mon investissement auprès de la commune, afin de faire vivre et perdurer des moments festifs et joyeux qui renforcent le lien entre habitants et animent notre village."
        },
        {
            name: "PECAL Sébastien",
            role: "Manager dans l'aéronautique ", 
            img: "./css/Portrait PECAL Sébastien_.jpg", 
            descShort: "Sébastien Pécal, 42 ans, 2 enfants, Agent de maîtrise aéronautique", 
            desc: "J’ai construit mon parcours autour de la rigueur, du travail collectif et du sens des responsabilités. Fort de ces valeurs et expériences, je me présente pour la première fois aux élections municipales avec la volonté de m'engager concrètement au service des habitants et de l'intérêt général."
        },
        {
            name: "SANTAMARIA Laetitia ",
            role: "Educatrice spécialisée", 
            img: "./css/DSC00377R Laëtitia S.jpg", 
            descShort: "", 
            desc: "Attachée à notre commune et à ses habitants, je m'engage pour renforcer le lien social, favoriser les échanges entre les générations et être à l'écoute des familles. Mon expérience dans le domaine social me permet de proposer des actions concrètes au service de la solidarité et du vivre-ensemble. Je partage pleinement les valeurs de respect, de partage, de simplicité et de tolérance portées par cette équipe, convaincue qu'ensemble nous pouvons construire une commune plus solidaire, plus écologique et plus dynamique."
        },

        {
            name: "BAGNERIS Marlène",
            role: "Retraitée", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "Marlène, 72 ans, retraitée.", 
            desc: "Engagée dans le bénévolat et auprès des personnes malades ou démunies, j'ai une vraie volonté de partager du temps à l'écoute des familles afin de développer des moyens, un pôle leur permettant de faciliter leurs démarches au quotidien pour une qualité de vie plus sereine."
        },

        {
            name: "NARDARI  Ludovic",
            role: "Fonctionnaire", 
            img: "./css/DSC00442R Ludovic_portrait.jpg", 
            descShort: "Ludovic, 45 ans, 2 enfants, fonctionnaire.", 
            desc: "Animé par la volonté de m’investir au sein de la municipalité pour une croissance pertinente du village, je souhaite participer au développement des services et des structures existantes afin d’aider et accueillir convenablement les Cépétois."
        },

        {
            name: "MIR-MESNIER Lucile",
            role: "Technicienne de laboratoire d'analyse médicale", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "Lucile, 37 ans, 2 enfants, technicienne de laboratoire d’analyse médicale.", 
            desc: "Ayant grandi en partie dans ce village, j’ai vu évoluer Cépet et j’ai souhaité y construire ma famille. Je souhaite conserver un cadre de vie bienveillant et paisible ainsi qu’une âme de village accueillant pour tous. Selon moi, cela passe entre autres par une dynamisation de la commune et une écoute de tous."
        },

        {
            name: "SAHRAOUI Joachim",
            role: "", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: ""
        },

        {
            name: "FOUGERAY Jean-Michel",
            role: "", 
            img: "./css/JM.jpg", 
            descShort: "", 
            desc: ""
        },

        {
            name: "Le soldat inconnu",
            role: "", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "", 
            desc: ""
        }
    ];
    teamMembers.sort((a, b) =>
        a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' })
      );
    const teamSlider = document.getElementById('teamSlider');
    let teamIndex = 0;
    const perSlide = isMobile ? 1 : 3;
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

    function openTeamModal(index) {
        const m = teamMembers[index];
        const modal = document.getElementById('teamModal');

        document.getElementById('modalImg').src = m.img;
        document.getElementById('modalName').textContent = m.descShort;
        document.getElementById('modalDesc').innerHTML = m.desc;

        modal.style.display = 'flex';
        requestAnimationFrame(() => modal.classList.add('show'));
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
function initActus(isMobile) {
    const actusData = [
        { title: 'Réunion publique avec les habitants', text: 'une très longue actualités mais c\'est ok pas besoin d\'en faire tout un drame on va voir jusqu\'où ça va mais faut continuer longtemps pour arriver jusqu\'au trois petits points.', date: '15 décembre 2024', img: 'https://picsum.photos/seed/actus1/400/250' },
        { title: 'Rénovation du centre-ville', text: '...', date: '10 décembre 2024', img: 'https://picsum.photos/seed/actus2/400/250' },
        { title: 'Nouvelle saison des activités associatives', text: '...', date: '5 décembre 2024', img: 'https://picsum.photos/seed/actus3/400/250' },
        { title: 'Nouvelle saison des activités associatives', text: '...', date: '5 décembre 2024', img: 'https://picsum.photos/seed/actus3/400/250' }
    ];

    const actusSlider = document.getElementById('actusSlider');
    
    const perSlide = isMobile ? 1 : 3;
    let actusIndex = 0;


    function renderActus() {
        let html = '';
        for (let i = 0; i < actusData.length; i += perSlide) {
            html += '<div class="actus-slide"><div class="actus-cards">';
            actusData.slice(i, i + perSlide).forEach((article, idx) => {
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

    document.getElementById('prevActus').addEventListener('click', () => {
        actusIndex = (actusIndex-1 + Math.ceil(actusData.length/perSlide)) % Math.ceil(actusData.length/perSlide);
        updateActusSlider();
    });
    document.getElementById('nextActus').addEventListener('click', () => {
        actusIndex = (actusIndex+1) % Math.ceil(actusData.length/perSlide);
        updateActusSlider();
    });
}

function initGallery(isMobile) {
    const galleryImages = [
        { src: "css/recto flyer 2025.jpg", thumb: "css/recto flyer 2025.jpg", alt: "recto flyer élection municipale 2025" },
        { src: "css/verso flyer 2025.jpg", thumb: "css/verso flyer 2025.jpg", alt: "verso  flyer élection municipale 2025" }
        // ajouter les autres images ici
      ];

    const gallerySlider = document.getElementById("gallerySlider");
let galleryIndex = 0;
const perSlide = isMobile ? 1 : 3; // nombre d'images par slide

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


renderGallery();
}

function initContact()
{
    const form = document.getElementById('contactForm');
    const messageEl = document.getElementById('contactMessage');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const honeypot = form.querySelector('input[name="website"]').value;

        // BOT détecté
        if (honeypot !== '') {
            console.warn('Bot détecté');
            return; // on ne fait rien
        }

        // Simulation d’envoi OK
        messageEl.textContent = "Merci pour votre message, il a bien été envoyé.";
        messageEl.style.display = 'block';
        messageEl.style.color = '#4CAF50';

        form.reset();
    });
}


function initScrollTop()
{
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Afficher / cacher le bouton
    window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
    });

    // Remonter en haut
    scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    });

}


// === Initialisation ===
document.addEventListener('DOMContentLoaded', () => {

    const isMobile = window.innerWidth <= 768;

    initHeader();
    initHeroSlider();
    initTeamSlider(isMobile);
    initActus(isMobile);
    initGallery(isMobile);
    initContact();
    initScrollTop();
});