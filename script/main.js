
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
            role: "Ingénieur d'application", 
            img: "./css/DSC00384R Portrait Mickaël.webp", 
            descShort: "Mickaël, 36 ans, 2 enfants, ingénieur d’application.", 
            desc: "A Cépet depuis 2017, passionné par la vie locale, je participe activement à l’association Cép’a du  jeu afin de rassembler petits et grands autour des jeux de société.<br>Je rejoins la l'équipe pour améliorer les services publics, valoriser le côté boisé, fleuri et convivial de notre village, tout en accompagnant la commune vers des solutions modernes et connectées qui faciliteront la vie quotidienne de ses habitants. Je souhaite que la gouvernance du village reste transparente, ouverte et participative."
        },
        {
            name: "Plages Vert Marion",
            role: "Infirmière puéricultrice", 
            img: "./css/DSC00425R Portrait Marion.webp", 
            descShort: "Marion, 38 ans, 2 enfants, infirmière puéricultrice à l’hôpital des enfants de Purpan.", 
            desc: "Installée à Cépet avec ma famille depuis 8 ans, je suis impliquée dans le Comité des Parents d’élèves depuis plusieurs années.<br>Mes expériences de travail en équipe, de bienveillance, d’écoute et d’entraide sont des atouts que j’aimerai mettre en valeur dans l’investissement que je souhaite soumettre à la commune de Cépet."
        },
        {
            name: "Mazars  Laure",
            role: "Assistante maternelle", 
            img: "./css/DSC00371R Portrait Laure.webp", 
            descShort: "Laure, 39 ans, 2 enfants, Assistante Maternelle sur la commune de Cépet.", 
            desc: "Investie au sein de la commune dans le cadre du Comité des parents d’élèves depuis 5 ans, je souhaite dynamiser la commune en offrant plus d’espace à la jeunesse et aux besoins de chacun afin de redynamiser le village avec notamment, des évènements festifs et conviviaux."
        },

        {
            name: "Pottier Thomas",
            role: "Chef d'équipe ", 
            img: "./css/DSC00992R Portrait Thomas.webp", 
            descShort: "Thomas, 38 ans, 2 enfants, chef d’équipe dans l’aéronautique.", 
            desc: "Concerné par les problématiques de la commune, je souhaite m’investir dans la vie du village et y apporter mes valeurs de transparence, de dialogue et de vie de famille."
        },
        {
            name: "Caillaud Mélanie",
            role: "Manager cheffe de projet", 
            img: "./css/DSC00412R Portrait Mélanie.webp", 
            descShort: "Mélanie Caillaud, 40 ans, 2 enfants, manager et cheffe de projet.", 
            desc: "J'ai toujours eu le goût et l'envie d'aider et de faire grandir les autres ou un collectif. C'est donc tout naturellement, qu'après m'être investie au sein des DPE et du Comité des parents d'élèves ces dernières années, je souhaite contribuer à apporter convivialité, bonne humeur et intégrité à la commune de Cépet."
        },
        {
            name: "Garrigues Bruno",
            role: "ingénieur aéronautique", 
            img: "./css/DSC00477R Portrait Bruno.webp", 
            descShort: "Bruno Garrigues, 42 ans, 2 enfants, Ingénieur aéronautique.", 
            desc: "Après avoir fait le choix de m’installer à Cépet avec ma famille, il me semblait naturel d’ intégrer cette aventure pour être acteur de la vie du village. Les valeurs qui me tiennent à cœur sont la bienveillance, la solidarité et le partage."
        },
        
        {
            name: "Le Gallo Laetitia",
            role: "AESH / Reflexologue", 
            img: "./css/DSC00353 Portrait Laetitia LG.webp", 
            descShort: "Laetitia Le Gallo,48 ans, 2 enfants, AESH/Réflexologue.", 
            desc: "Investie dans les associations sur Cépet, il me semblait naturel de participer davantage à l'organisation du village. Collaborer à créer un lien entre les générations, un lieu de vie, où il fait bon vivre. Les valeurs qui me portent sont le partage, le respect, la bienveillance et l'entraide."
        },
        {
            name: "Follet Botella Céline",
            role: "Assistante de Direction", 
            img: "./css/DSC00536R Portrait Céline.webp", 
            descShort: "Céline Follet Botella, 47 ans, 1 enfant, Assistante de direction.", 
            desc: "Forte de 18 années d'expériences dans le domaine du social, je suis profondément attachée aux valeurs d'écoute, de solidarité et de respect. Présidente d’association, je souhaite mettre mon énergie, mon sens de l'humain et mon esprit d'équipe au service des habitants pour faire vivre une commune dynamique, conviviale et proche de ses citoyens."
        },
        {
            name: "Crebassa  Jérôme",
            role: "Formateur à la sécurité routière ", 
            img: "./css/DSC00459R Portrait Jérôme.webp", 
            descShort: "Jérome, 44 ans, 2 enfants, formateur à la sécurité routière.", 
            desc: "Je m’engage pour améliorer le cadre de vie à Cépet dans le but d’avoir un village plus animé ou il fait bon vivre ensemble. Je souhaite pouvoir faire remonter les demandes des habitants de tout âge, afin que tout le monde puisse être entendu."
        },
        {
            name: "Ortega  Rébecca",
            role: "assistante de vie", 
            img: "./css/DSC00526 Portrait Rebecca.webp", 
            descShort: "Rébecca, 37 ans, 2 enfants, assistante de vie.", 
            desc: "Je m'engage pour défendre les valeurs auxquelles je crois : la solidarité, la transparence et la proximité. Je souhaite pouvoir participer activement aux décisions qui impactent notre quotidien à tous et pouvoir le faire ensemble."
        },
        {
            name: "Rivière Julien",
            role: "Responsable E-commerce", 
            img: "./css/DSC00393R Portrait Julien.webp", 
            descShort: "Julien, 41 ans, 3 enfants, responsable E-commerce.", 
            desc: "Je suis président de l'association Cep'A du jeu. J'aime mobiliser, fédérer et concrétiser des projets comme en organisant avec succès les trois festivals sur notre commune.<br>Fort de cette expérience associative, je souhaite m'investir dans la vie locale de notre village, dynamiser et moderniser les actions de notre commune.<br>Je rejoins cette liste pour mettre mon énergie et mon expertise au service d'un seul objectif : rendre notre commune, un lieu de vie agréable, stimulant et innovant pour toutes les générations."
        },
        {
            name: "Carpana Jess",
            role: "chauffeur routier", 
            img: "./css/DSC00399R Portrait Jess.webp", 
            descShort: "Jess, 46 ans, 2 enfants, Chauffeur routier.", 
            desc: "Mes parcours professionnel et personnel, m’ont conduit à m’engager pour les autres et à travailler de manière collaborative.<br>Ma présence dans l’équipe, c’est avant tout une volonté de contribuer davantage à la vie de notre village. Je suis animé par des valeurs simples : le sens du service, l’écoute, la proximité et la transparence.<br>Le renforcement du lien social, l’amélioration du quotidien des habitants ou encore le soutien aux initiatives locales qui font vivre notre commune me semble important.<br>Je suis convaincu que c’est collectivement, dans le respect et le dialogue, que nous pouvons continuer à faire évoluer notre ville de manière positive"
        },
        {
            name: "Rivière Gaëlle",
            role: "Infirmière en mission de coordination", 
            img: "./css/DSC00339R Portrait Gaëlle.webp", 
            descShort: "Gaëlle, 40 ans, 3 enfants, Infirmière coordinatrice à Cépet.", 
            desc: "Depuis 2019, je suis présidente du comité des parents d’élèves. J’aime imaginer et organiser des événements pour les enfants du village.<br>Je suis également co-fondatrice de l’association Cep’A Du Jeu, dont la vocation est de redonner aux familles et aux amis le plaisir de jouer ensemble et de partager des instants de convivialité et de rire. <br>Ces engagements m’ont naturellement donné envie de poursuivre mon investissement auprès de la commune, afin de faire vivre et perdurer des moments festifs et joyeux qui renforcent le lien entre habitants et animent notre village."
        },
        {
            name: "Pecal Sébastien",
            role: "Manager dans l'aéronautique ", 
            img: "./css/DSC00433R Portait Sébastien P.webp", 
            descShort: "Sébastien Pécal, 42 ans, 2 enfants, Agent de maîtrise aéronautique", 
            desc: "J’ai construit mon parcours autour de la rigueur, du travail collectif et du sens des responsabilités. Fort de ces valeurs et expériences, je me présente pour la première fois aux élections municipales avec la volonté de m'engager concrètement au service des habitants et de l'intérêt général."
        },
        {
            name: "Santamaria Laetitia ",
            role: "Educatrice spécialisée", 
            img: "./css/DSC00377R Portrait Laëtitia S.webp", 
            descShort: "Laetitia, 41 ans, 2 enfants, Educatrice spécialisée.", 
            desc: "Attachée à notre commune et à ses habitants, je m'engage pour renforcer le lien social, favoriser les échanges entre les générations et être à l'écoute des familles. Mon expérience dans le domaine social me permet de proposer des actions concrètes au service de la solidarité et du vivre-ensemble. Je partage pleinement les valeurs de respect, de partage, de simplicité et de tolérance portées par cette équipe, convaincue qu'ensemble nous pouvons construire une commune plus solidaire, plus écologique et plus dynamique."
        },

        {
            name: "Bagneris Marlène",
            role: "Retraitée", 
            img: "./css/DSC00498RR Portrait Marlène.webp", 
            descShort: "Marlène, 72 ans, retraitée.", 
            desc: "Engagée dans le bénévolat et auprès des personnes malades ou démunies, j'ai une vraie volonté de partager du temps à l'écoute des familles afin de développer des moyens, un pôle leur permettant de faciliter leurs démarches au quotidien pour une qualité de vie plus sereine."
        },

        {
            name: "Nardari  Ludovic",
            role: "Fonctionnaire", 
            img: "./css/DSC00442R Portrait Ludovic.webp", 
            descShort: "Ludovic, 45 ans, 2 enfants, fonctionnaire.", 
            desc: "Animé par la volonté de m’investir au sein de la municipalité pour une croissance pertinente du village, je souhaite participer au développement des services et des structures existantes afin d’aider et accueillir convenablement les Cépétois."
        },

        {
            name: "Mir-Mesnier Lucile",
            role: "Technicienne de laboratoire d'analyse médicale", 
            img: "https://picsum.photos/seed/team1/300/300", 
            descShort: "Lucile, 37 ans, 2 enfants, technicienne de laboratoire d’analyse médicale.", 
            desc: "Ayant grandi en partie dans ce village, j’ai vu évoluer Cépet et j’ai souhaité y construire ma famille. Je souhaite conserver un cadre de vie bienveillant et paisible ainsi qu’une âme de village accueillant pour tous. Selon moi, cela passe entre autres par une dynamisation de la commune et une écoute de tous."
        },

        {
            name: "Sahraoui Joachim",
            role: "Étudiant en droit", 
            img: "./css/DSC01002R Portrait Joachim.webp", 
            descShort: "Joachim, 21 ans, étudiant en droit.", 
            desc: "Candidat engagé, animé par l’envie sincère de représenter et défendre les intérêts de chacun. Je crois en une action collective basée sur le respect, le dialogue et la justice. Mon objectif est simple : améliorer concrètement notre quotidien en proposant des idées utiles, réalistes et accessibles à tous. Je souhaite m’investir pleinement afin de porter la voix de celles et ceux qui veulent être entendus, favoriser la coopération et encourager des initiatives positives. Être élu pour moi n’est pas un titre mais une responsabilité, celle d’agir avec honnêteté, détermination et transparence."
        },

        {
            name: "Fougeray Jean-Michel",
            role: "Cadre Enedis", 
            img: "./css/DSC00551R Portrait Jean-Michel.webp", 
            descShort: "Jean-Michel, 56 ans, 3 enfants, cadre à Enedis.", 
            desc: "Engagé de longue date au service de notre village, élu Conseiller municipale en 2015, premier maire-adjoint de 2020 à décembre 2025 et Vice-Président sortant de la Communauté de Communes du Frontonnais.<br>Installé à Cépet depuis près de 20 ans, j’ai très vite eu l’envie de m’investir et de servir notre village. <br>Depuis 2015, j’ai participé aux travaux menés par les équipes municipales accompagnées par les agents de la Collectivité territoriale.<br>Aujourd’hui, avec une nouvelle équipe, jeune, dynamique et investie depuis de longues années dans la vie locale, je souhaite poursuivre mon action municipale au service d’un projet réaliste, co-écrit avec les habitant.e.s. <br>Le 15 mars 2026, j’invite les Cépetoises et les Cépetois à nous accorder leur confiance en votant pour la liste « Cépet, Un avenir qui nous rassemble » afin de construire ensemble  un village dynamique, solidaire et résolument tourné vers l’avenir."
        },

        {
            name: "C. Sébastien",
            role: "Poissonnier", 
            img: "./css/DSC00346R Portrait Sébastien C.webp", 
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
        let slides = [];
      
        for (let i = 0; i < teamMembers.length; i += perSlide) {
          let slide = '<div class="team-slide">';
          teamMembers.slice(i, i + perSlide).forEach((m, index) => {
            const globalIndex = i + index;
            slide += `
              <div class="team-member">
                <img src="${m.img}" alt="${m.name}" loading="lazy" decoding="async">
                <h3>${m.name}</h3>
                <p class="role">${m.role}</p>
                <button class="team-more" data-index="${globalIndex}">
                  En savoir +
                </button>
              </div>
            `;
          });
          slide += '</div>';
          slides.push(slide);
        }
      
        // clones
        const first = slides[0];
        const last = slides[slides.length - 1];
      
        teamSlider.innerHTML = last + slides.join('') + first;
      
        teamIndex = 1;
        updateTeamSlider(false);
        bindMoreButtons();
    }
      

    function updateTeamSlider(withTransition = true) {
        teamSlider.classList.add('is-sliding');

        teamSlider.style.transition = withTransition ? 'transform 0.5s ease' : 'none';
        teamSlider.style.transform = `translateX(-${teamIndex * 100}%)`;

        setTimeout(() => {
            teamSlider.classList.remove('is-sliding');
        }, 500);
    }
      
    function bindMoreButtons() {
        document.querySelectorAll('.team-more').forEach(btn => {
        btn.addEventListener('click', () => {
            openTeamModal(btn.dataset.index);
        });
        });
    }
        
    teamSlider.addEventListener('transitionend', () => {
        if (teamIndex === 0 || teamIndex === totalSlides + 1) {
          teamSlider.style.transition = 'none';
      
          teamIndex = teamIndex === 0 ? totalSlides : 1;
          teamSlider.style.transform = `translateX(-${teamIndex * 100}%)`;
      
          // force un reflow propre
          teamSlider.getBoundingClientRect();
      
          requestAnimationFrame(() => {
            teamSlider.style.transition = 'transform 0.5s ease';
          });
        }
      });

    renderTeam();

    document.getElementById('prevTeam').onclick = () => {
        teamIndex--;
        updateTeamSlider();
    };
      
    document.getElementById('nextTeam').onclick = () => {
        teamIndex++;
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