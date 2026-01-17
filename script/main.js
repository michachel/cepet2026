
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
        { title: 'Élections Municipales du 15 mars 2026<br>CÉPET', subtitle: 'Cépet, un avenir qui nous rassemble', button: 'Avec la liste citoyenne conduite par Jean-Michel FOUGERAY', dataTarget: 'equipe' },
        { title: 'Ensemble, préparons l’avenir de notre village', subtitle: '', button: 'Nos engagements', dataTarget: 'programme' }
    ];

    let index = 0;

    function showSlide(i) {
        slides.forEach((s, idx) => {
            s.classList.remove('active');
            s.style.animation = '';
        });
        dots.forEach(d => d.classList.remove('active'));
        slides[i].classList.add('active');
        slides[i].style.animation = 'zoom 12s infinite';
        dots[i].classList.add('active');
        let heroclass = "";
        if (texts[i].dataTarget == 'equipe') heroclass = "hero-subtitle";
        heroText.innerHTML = `<h1>${texts[i].title}</h1><p class="${heroclass}">${texts[i].subtitle}</p><button data-target="${texts[i].dataTarget}">${texts[i].button}</button>`;
        index = i;
    }
    

    showSlide(0);
    setInterval(() => showSlide((index + 1) % slides.length), 10000);

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
            name: "Mickaël COULOMBEL",
            role: "Ingénieur d'Application",
            age: "36",
            order: 7,
            img: "./css/DSC00384R Portrait Mickaël.webp", 
            descShort: "Mickaël COULOMBEL – 36 ans – 2 enfants – Ingénieur d’Application", 
            desc: "Installé à Cépet depuis 2017, je suis attaché à la vie locale et au dynamisme associatif de la commune. Investi au sein de l’association Cép’a du jeu, je contribue à rassembler petits et grands autour de moments de convivialité et de partage, renforçant ainsi le lien social entre les habitants.<br><br>Ingénieur d’application, je dispose de compétences solides en technologies numériques, en analyse et en recherche de solutions adaptées aux usages du quotidien. Mon parcours professionnel me permet d’apporter une approche méthodique et pragmatique, utile à l’amélioration des services publics et à l’accompagnement de projets modernes et connectés au service de la commune.<br><br>Attaché à une gouvernance transparente, ouverte et participative, je souhaite m’engager au sein de l’équipe municipale pour préserver le cadre de vie, valoriser le caractère boisé, fleuri et convivial du village, et contribuer à une action publique proche des habitants et tournée vers l’avenir."
        },
        {
            name: "Marion PLAGES VERT",
            role: "Infirmière Puéricultrice", 
            age: "38",
            order: 8,
            img: "./css/DSC00425R Portrait Marion.webp", 
            descShort: "Marion PLAGES VERT – 38 ans – 2 enfants – Infirmière Puéricultrice", 
            desc: "Installée à Cépet avec ma famille depuis plusieurs années, je suis impliquée dans la vie locale, notamment au sein du Comité des parents d’élèves. Cet engagement m’a permis de connaître les attentes des familles et des enjeux liés à l’enfance et à l’éducation au sein de la commune.<br><br>Infirmière puéricultrice à l’hôpital des enfants de Purpan, j’exerce un métier fondé sur l’écoute, la bienveillance et le travail en équipe. Mon expérience professionnelle m’a permis d’acquérir des qualités humaines et relationnelles essentielles, ainsi qu’un sens des responsabilités utile à l’action collective.<br><br>Attachée aux valeurs de solidarité, d’entraide et de respect, je souhaite partager mes compétences au service de la commune de Cépet."
        },
        {
            name: "Laure MAZARS",
            role: "Assistante Maternelle", 
            age: "39",
            order: 14,
            img: "./css/DSC00371R Portrait Laure.webp", 
            descShort: "Laure MAZARS – 39 ans – 2 enfants – Assistante Maternelle à Cépet", 
            desc: "Investie dans la vie locale depuis plusieurs années, je suis très active au sein du Comité des parents d’élèves depuis cinq ans. Cet investissement associatif m’autorise à dire que je connais les besoins des enfants, des familles et plus largement de la jeunesse de la commune.<br><br>Côté professionnel, je suis assistante maternelle sur la commune de Cépet. Écoute, bienveillance et accompagnement sont des qualités nécessaires pour mener mon activité.<br><br>Attachée à la dynamique du village, mon envie est de contribuer à redynamiser la commune en favorisant des espaces dédiés à la jeunesse et en soutenant des initiatives et des événements festifs et conviviaux à Cépet."
        },

        {
            name: "Thomas POTTIER",
            role: "Chef d’Équipe dans l’Aéronautique", 
            age: "38",
            order: 13,
            img: "./css/DSC00992R Portrait Thomas.webp", 
            descShort: "Thomas POTTIER – 38 ans – 2 enfants – Chef d’Équipe dans l’Aéronautique", 
            desc: "Attaché à la vie locale, je souhaite m’investir activement pour la commune de Cépet et contribuer à l’amélioration du cadre de vie. Sensible aux enjeux du quotidien et à la qualité du vivre ensemble, je m’engage dans une démarche de proximité et d’écoute des habitants.<br><br>Chef d’équipe dans le secteur aéronautique, je dispose d’une expérience fondée sur la coordination, le sens des responsabilités et le travail collectif. Très attaché aux valeurs de transparence, de dialogue et de vie familiale ma volonté est de mettre mes compétences au service d’une action municipale constructive tournée vers l’intérêt général."
        },
        {
            name: "Mélanie CAILLAUD",
            role: "Manager Cheffe de projet", 
            age: "40",
            order: 2,
            img: "./css/DSC00412R Portrait Mélanie.webp", 
            descShort: "Mélanie CAILLAUD - 40 ans – 2 enfants - Manager Cheffe de projet", 
            desc: "Je suis engagée depuis plusieurs années dans la vie locale, notamment au sein des Délégués de Parents d’Elèves et du Comité des parents d’élèves. À ce titre, J’ai acquis une connaissance précise des attentes des familles et du fonctionnement des instances éducatives et associatives de la commune. J’ai, par exemple, participé aux commissions restauration et périscolaires organisées par la municipalité et j’ai pu siéger au Conseil d'École.<br><br>Professionnelle du management et de la conduite de projets, je dispose d’une solide expérience en organisation, en coordination d’équipes et en pilotage d’actions collectives. Ces compétences constituent des atouts essentiels pour contribuer efficacement à l’action municipale et à la mise en œuvre de projets structurants pour la commune de Cépet.<br><br>Attachée aux valeurs de service public, de responsabilité et d’intégrité, je souhaite mettre mon engagement et mon expertise au service de l’intérêt général, dans une démarche constructive, rigoureuse et tournée vers l’amélioration du cadre de vie et du bien-vivre ensemble à Cépet."
        },
        {
            name: "Bruno GARRIGUES",
            role: "Ingénieur Aéronautique", 
            age: "42",
            order: 5,
            img: "./css/DSC00477R Portrait Bruno.webp", 
            descShort: "Bruno GARRIGUES – 42 ans – 2 enfants – Ingénieur Aéronautique", 
            desc: "Après avoir fait le choix de m’installer à Cépet avec ma famille, il me semblait naturel de participer à cette aventure pour être acteur de la vie de notre village. <br><br>Professionnel de l’ingénierie et de la gestion de projets complexes, je dispose d’une solide expérience en analyse, en organisation et en pilotage d’actions. Mon parcours m’a permis d’acquérir rigueur, méthode et sens des responsabilités, des compétences directement utiles à l’action municipale et à la conduite de projets structurants pour la commune.<br><br>Je souhaite mettre mon engagement et mon expertise au service de l’intérêt général, pour Cépet."
        },
        
        {
            name: "Laetitia LE GALLO",
            role: "AESH / Réflexologue", 
            age: "48",
            order: 4,
            img: "./css/DSC00353 Portrait Laetitia LG.webp", 
            descShort: "Laetitia LE GALLO - 48 ans - 2 enfants – Accompagnante d’Élèves en Situation de Handicap - Réflexologue", 
            desc: "Depuis plusieurs années, je suis investie dans le tissu associatif de Cépet. Je suis trésorière d’une importante association Cépetoise qui gère 4 intervenants indépendants. Cet engagement de terrain m’a permis de développer une connaissance concrète de la vie locale et des besoins des habitants, ainsi qu’une forte sensibilité aux enjeux de lien social et de solidarité entre les générations.<br><br>Professionnelle de l’accompagnement et du bien-être, j’exerce comme Assistante d’Élèves en Situation de handicap et réflexologue. Ces activités me confèrent une expérience reconnue dans l’écoute, le soutien aux personnes et l’attention portée aux situations individuelles, compétences essentielles pour une action municipale humaine et inclusive.<br><br>Attachée aux valeurs de respect, de partage, de bienveillance et d’entraide, je souhaite m’engager au service de l’intérêt général afin de contribuer à une commune de Cépet accueillante, solidaire et favorable au bien-vivre ensemble."
        },
        {
            name: "Céline FOLLET BOTELLA",
            role: "Assistante de Direction", 
            age: "47",
            order: 6,
            img: "./css/DSC00536R Portrait Céline.webp", 
            descShort: "Céline FOLLET BOTELLA – 47 ans – 1 enfant – Assistante de Direction", 
            desc: "Forte de 18 années d’expérience dans le domaine social, je suis profondément attachée aux valeurs d’écoute, de solidarité et de respect. Investie dans la vie locale, je m’engage avec conviction au service des habitants et du lien social au sein de la commune.<br><br>Assistante de direction, je dispose d’une solide expérience en organisation, en gestion administrative et en coordination. Mon parcours professionnel m’a permis de développer rigueur, sens des responsabilités et esprit d’équipe, des compétences utiles à l’action municipale et au travail collectif.<br><br>Présidente d’association syndicale de propriétaires (ASL), je souhaite mettre mon énergie, mon sens de l’humain et mon engagement au service de l’intérêt général, dans une démarche constructive et tournée vers une commune dynamique, conviviale et proche de ses citoyens."
        },
        {
            name: "Jérôme CREBASSA",
            role: "Formateur à la Sécurité Routière ", 
            age: "44",
            order: 11,
            img: "./css/DSC00459R Portrait Jérôme.webp", 
            descShort: "Jérôme CREBASSA – 44 ans – 2 enfants – Formateur à la Sécurité Routière", 
            desc: "Engagé pour l’amélioration du cadre de vie à Cépet, je souhaite contribuer à une commune dynamique et agréable à vivre, où le bien-vivre ensemble occupe une place centrale. Attentif aux réalités du quotidien, je serai à l’écoute des habitants de tous âges et soucieux de faire remonter leurs attentes.<br><br>Formateur à la sécurité routière, je dispose d’une expérience fondée sur la prévention, la pédagogie et la responsabilisation. Mon parcours professionnel m’a permis de développer des compétences en sensibilisation, en transmission des savoirs et en accompagnement, utiles à l’action municipale et aux projets de sécurité et de mobilité.<br><br>Attaché aux valeurs de proximité, de dialogue et de participation citoyenne, je m’engage au sein de l’équipe municipale pour contribuer à des actions concrètes en faveur de la sécurité, de la qualité de vie et d’une gouvernance attentive aux besoins de toutes et tous."
        },
        {
            name: "Rebecca ORTEGA",
            role: "Assistante de Vie", 
            age: "37",
            order: 12,
            img: "./css/DSC00526 Portrait Rebecca.webp", 
            descShort: "Rebecca ORTEGA – 37 ans – 2 enfants – Assistante de Vie", 
            desc: "Mon quotidien professionnel est d’être présente auprès des personnes. Je suis attachée aux valeurs de solidarité, de proximité et d’entraide. Sensible aux réalités sociales et humaines, je souhaite m’investir au service d’une commune attentive aux besoins de chacun.<br><br>Assistante de vie, j’exerce un métier fondé sur l’écoute, l’accompagnement et la relation de confiance. J’ai développé un sens aigu des responsabilités, de l’attention portée aux autres et de l’engagement, des qualités essentielles dont je souhaite me servir pour contribuer à l’action municipale.<br><br>Attachée aux valeurs de transparence, de participation citoyenne et de dialogue, je m’inscris pleinement dans une démarche municipale collective visant à associer les habitants aux décisions qui impacteront leur quotidien."
        },
        {
            name: "Julien RIVIÈRE",
            role: "Responsable E-commerce", 
            age: "41",
            order: 3,
            img: "./css/DSC00393R Portrait Julien.webp", 
            descShort: "Julien RIVIÈRE - 41 ans – 3 enfants - Responsable E-commerce", 
            desc: "Engagé depuis plusieurs années dans la vie associative locale en tant que Président de l’association Cep’A du Jeu, j’ai conduit et coordonné l’organisation de plusieurs événements pour la commune, dont trois festivals, en mobilisant bénévoles, partenaires et acteurs locaux.<br><br>Professionnel du numérique et du développement commercial, je dispose d’une solide expérience en gestion de projets, en organisation et en pilotage d’actions collectives. Je mettrai à profit ces compétences pour accompagner la modernisation des services, renforcer la communication et soutenir le dynamisme local de notre village.<br><br>Souhaitant m’investir durablement dans la vie publique, je souhaite mettre mon énergie et mon expertise au service de l’intérêt général, avec pour objectif de contribuer à une commune de Cépet plus attractive, plus innovante et plus attentive aux besoins de l’ensemble de ses habitants."
        },
        {
            name: "Jess CARPANA",
            role: "Chauffeur Routier", 
            age: "46",
            order: 9,
            img: "./css/DSC00399R Portrait Jess.webp", 
            descShort: "Jess CARPANA - 46 ans - 2 enfants - Chauffeur Routier", 
            desc: "Mes parcours professionnel et personnel, m’ont conduit à m’engager pour les autres et à travailler de manière collaborative.<br><br>Ma présence dans l’équipe, c’est avant tout une volonté de contribuer davantage à la vie de notre village. Je suis animé par des valeurs simples : le sens du service, l’écoute, la proximité et la transparence.<br><br>Le renforcement du lien social, l’amélioration du quotidien des habitants ou encore le soutien aux initiatives locales qui font vivre notre commune me semble important.<br><br>Je suis convaincu que c’est collectivement, dans le respect et le dialogue, que nous pouvons continuer à faire évoluer notre village de manière positive"
        },
        {
            name: "Gaëlle RIVIÈRE",
            role: "Infirmière en Mission de Coordination", 
            age: "40",
            order: 10,
            img: "./css/DSC00339R Portrait Gaëlle.webp", 
            descShort: "Gaëlle RIVIÈRE – 40 ans – 3 enfants – Infirmière en Mission de Coordination à Cépet", 
            desc: "Engagée dans la vie locale depuis plusieurs années, je m’investis activement au service des familles et du lien social au sein de la commune. Présidente du comité des parents d’élèves depuis 2019, je participe à l’organisation de nombreux événements destinés aux enfants et aux familles, favorisant les temps de rencontre et de convivialité.<br><br>Infirmière coordinatrice à Cépet, j’exerce un métier fondé sur l’écoute, la coordination et le travail en équipe. Mon parcours professionnel m’a permis de développer des compétences en organisation, en accompagnement et en gestion de projets collectifs, utiles à l’action municipale et à la vie associative locale.<br><br>Co-fondatrice de l’association Cép’A du jeu, je souhaite désormais poursuivre mon engagement au service de la commune afin de faire vivre et pérenniser des moments festifs et fédérateurs, renforçant le lien entre les habitants et contribuant à une commune dynamique, solidaire et conviviale."
        },
        {
            name: "Sébastien PÉCAL",
            role: "Responsable Qualité Aéronautique", 
            age: "42",
            order: 15,
            img: "./css/DSC00433R Portait Sébastien P.webp", 
            descShort: "Sébastien PÉCAL – 42 ans – 2 enfants – Responsable Qualité Aéronautique", 
            desc: "Fort d’un parcours professionnel construit autour de la rigueur, du travail collectif et du sens des responsabilités, mon souhait est de mettre mon expérience au service de la commune de Cépet. Sensible aux enjeux du quotidien et à la qualité du cadre de vie, je m’engage avec sérieux et esprit d’équipe.<br><br>Responsable qualité dans le secteur aéronautique, je dispose d’une solide expérience en organisation, en coordination et en respect des exigences de qualité et de sécurité. J’ai appris à développer méthode, fiabilité et capacité à travailler en équipe.<br><br>Candidat pour la première fois aux élections municipales, ma volonté est de m’investir concrètement au service des habitants et de l’intérêt général, dans une démarche constructive et responsable."
        },
        {
            name: "Laetitia SANTAMARIA",
            role: "Éducatrice Spécialisée", 
            age: "41",
            order: 18,
            img: "./css/DSC00377R Portrait Laëtitia S.webp", 
            descShort: "Laetitia SANTAMARIA – 41 ans – 2 enfants – Éducatrice Spécialisée", 
            desc: "Attachée à la commune de Cépet et à ses habitant.e.s, mon souhait est de m’engager pour renforcer le lien social et favoriser les échanges entre les générations. À l’écoute des familles, je porte une attention particulière aux besoins des publics les plus fragiles et au vivre-ensemble au sein du village.<br><br>Éducatrice spécialisée, je dispose d’une solide expérience dans le domaine social. Mon approche est concrète, humaine et adaptée. Elle est fondée sur l’accompagnement, la médiation et la coopération, des compétences utiles à l’action municipale.<br><br>Partageant pleinement les valeurs de respect, de solidarité, de simplicité et de tolérance portées par l’équipe, je m’inscrit dans une démarche collective, constructive, écologique et plus dynamique à Cépet."
        },

        {
            name: "Marlène BAGNERIS",
            role: "Technicienne de Laboratoire à la Retraite", 
            age: "72",
            order: 16,
            img: "./css/DSC00498RR Portrait Marlène.webp", 
            descShort: "Marlène BAGNERIS – 72 ans – Technicienne de Laboratoire à la Retraite", 
            desc: "Lorsque j’étais en activité, j’occupais un poste à responsabilité au sein du laboratoire où je travaillais.<br><br>Engagée depuis de nombreuses années dans le bénévolat, je m’investis avec constance auprès des personnes malades ou en situation de fragilité. Attentive aux besoins des familles, je place l’écoute, la solidarité et la bienveillance au cœur de mon engagement.<br><br>Depuis plusieurs années, je suis également bénévole et, dans certains cas, impliquée dans l’organisation de plusieurs festivals ; celui des créations télévisuelles de Luchon, du film politique de Carcassonne,  du film européen des Arcs, du film historique de Plaisance du Touch et de musique de jazz de Luchon. J’attache beaucoup d’importance à la culture accessible à toutes et à tous.<br><br>Forte de cette expérience de vie et de mon implication associative, ma volonté est de contribuer à renforcer les dispositifs de proximité et d’accompagnement au sein de la commune. Mon idée est de faciliter les démarches du quotidien et d'améliorer la qualité de vie des habitants, en particulier des plus vulnérables."
        },

        {
            name: "Ludovic NARDARI",
            role: "Fonctionnaire", 
            age: "45",
            order: 17,
            img: "./css/DSC00442R Portrait Ludovic.webp", 
            descShort: "Ludovic NARDARI – 45 ans – 2 enfants – Fonctionnaire", 
            desc: "Animé par la volonté de m’investir au service de la commune, je souhaite contribuer à un développement équilibré et pertinent de Cépet. Attentif aux enjeux de croissance du village, je m’engage dans une démarche de réflexion et d’action au service de l’intérêt général.<br><br>Fonctionnaire, je connais le fonctionnement des services publics et des collectivités. Lors de mon parcours professionnel, j’ai développé rigueur, sens de l’organisation et compréhension des besoins des usagers, autant de compétences utiles à l’amélioration et au développement des services et des structures existantes.<br><br>Attaché à une action publique efficace et proche des habitants, je veux participer à l’adaptation et au renforcement des services municipaux afin d’accompagner au mieux l’accueil et les besoins des Cépetoises et Cépetois."
        },

        {
            name: "Lucile MIR-MESNIER",
            role: "Technicienne de Laboratoire d’Analyses Médicales", 
            age: "37",
            order: 20,
            img: "./css/DSC00363 Lucile_portrait.webp", 
            descShort: "Lucile MIR-MESNIER – 37 ans – 2 enfants – Technicienne de Laboratoire d’Analyses Médicales", 
            desc: "Ayant grandi en partie à Cépet, je suis très attentive à l’évolution de la commune et au cadre de vie qu’elle offre à ses habitants. J’ai fait le choix de fonder ma famille dans le village qui m’a vue grandir. Ma volonté est de préserver une qualité de vie bienveillante, paisible et une véritable âme de village, accueillante pour tous.<br><br>Technicienne de laboratoire d’analyses médicales, je suis très rigoureuse et j’ai le sens des responsabilités. Je travaille avec méthode, fiabilité et respect des protocoles, des compétences utiles à l’action collective et à la gestion de projets au service de notre village. Attachée à l’écoute, au dialogue et à la participation citoyenne, je souhaite servir ma commune dans une démarche collective visant à dynamiser la commune de Cépet."
        },

        {
            name: "Joachim SAHRAOUI",
            role: "Étudiant en Droit Fiscal", 
            age: "21",
            order: 19,
            img: "./css/DSC01002R Portrait Joachim.webp", 
            descShort: "Joachim SAHRAOUI - 21 ans - Étudiant en Droit Fiscal", 
            desc: "Candidat engagé, animé par l’envie sincère de représenter et défendre les intérêts de chacun. Je crois en une action collective basée sur le respect, le dialogue et la justice. Mon objectif est simple : améliorer concrètement notre quotidien en proposant des idées utiles, réalistes et accessibles à tous. Je souhaite m’investir pleinement afin de porter la voix de celles et ceux qui veulent être entendus, favoriser la coopération et encourager des initiatives positives. Être élu pour moi n’est pas un titre mais une responsabilité, celle d’agir avec honnêteté, détermination et transparence."
        },

        {
            name: "Jean-Michel FOUGERAY",
            role: "Cadre Enedis", 
            age: "56",
            order: 1,
            img: "./css/DSC00551R Portrait Jean-Michel.webp", 
            descShort: "Jean-Michel FOUGERAY – 56 ans – 3 enfants – Cadre Enedis", 
            desc: "Installé à Cépet depuis près de 20 ans, j’ai très vite eu l’envie de m’investir et de servir notre village.<br><br>Elu Conseiller Municipal en 2015, Premier Maire-Adjoint de 2020 à décembre 2025 et Vice-Président sortant de la Communauté de Communes du Frontonnais, j’ai participé aux travaux menés par les équipes municipales et communautaires.<br><br>Fort de cette expérience de dix années au sein du Conseil Municipal, nourri par de nombreux échanges avec les habitant.e.s et le tissu associatif du village, je suis convaincu qu’une nouvelle impulsion est aujourd’hui nécessaire pour Cépet en associant les Cépetoises et les Cépetois.<br><br>C’est dans cet esprit que je me présente aujourd’hui aux élections municipales de mars 2026, avec une équipe jeune, dynamique composée de candidates et de candidats investis et représentatifs de notre village, prêts à proposer, à agir et à rassembler. Ensemble, nous voulons préserver l’identité de Cépet, améliorer le cadre de vie et porter des projets utiles à toutes les générations.<br><br>Parce que je crois à la force du collectif, à l’écoute et au dialogue, je veux construire avec vous un avenir qui nous rassemble.<br><br>Le 15 mars 2026, j’invite les Cépetoises et les Cépetois à nous accorder leur confiance en votant pour la liste « Cépet, Un avenir qui nous rassemble » afin de construire ensemble un village dynamique, solidaire et résolument tourné vers l’avenir."
        },

        {
            name: "Sébastien CASTEL",
            role: "Artisan Poissonnier", 
            age: "49",
            order: 21,
            img: "./css/DSC00346R Portrait Sébastien C.webp", 
            descShort: "Sébastien CASTEL – 49 ans – 2 enfants – Artisan Poissonnier", 
            desc: "Artisan poissonnier, j’exerce mon activité professionnelle à Cépet depuis de nombreuses années, notamment à travers un service de livraison de proximité. Attaché à la ruralité et à la dimension humaine de la commune, je suis très attentif aux réalités du quotidien et aux besoins des habitants.<br><br>Mon parcours d’artisan m’a conduit à développer des valeurs fortes de travail, de rigueur et de proximité avec les clients. Cette expérience me confère une connaissance concrète des enjeux économiques locaux et de l’importance de services accessibles et pérennes pour maintenir la vitalité du village.<br><br>Attaché aux valeurs humaines, au dévouement et à l’intégrité, je désire m’engager au service de la commune afin de contribuer à la pérennisation des services publics, au soutien de l’activité économique locale et au renforcement du lien social à Cépet."
        }
    ];


    teamMembers.sort((a, b) => a.order - b.order);

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
                <h3>${m.age} ans</h3>
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

function initGallery(isMobile) {
    const galleryImages = [
        { src: "css/meilleurs voeux.jpeg", thumb: "css/meilleurs voeux.jpeg", alt: "Meilleurs voeux 2026" },
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
    emailjs.init("H6BNibIlXuJ0F4ypL");

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

        const formData = {
            prenom: form.prenom.value,
            nom: form.nom.value,
            email: form.email.value,
            message: form.message.value
        };

        messageEl.style.display = 'block';
        messageEl.style.color = '#333';
        messageEl.textContent = "Envoi du message en cours...";

        emailjs.send(
            "service_okyh1u8",
            "template_5vg0b92",
            formData
        ).then(() => {
            messageEl.textContent = "Merci pour votre message, il a bien été envoyé.";
            messageEl.style.color = '#4CAF50';
            form.reset();
        }).catch(err => {
            console.error(err);
            messageEl.textContent = "Une erreur est survenue. Veuillez réessayer plus tard.";
            messageEl.style.color = '#e53935';
        });
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
    initGallery(isMobile);
    initContact();
    initScrollTop();
});