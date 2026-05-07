export interface CaseStudy {
  client: string;
  sector: string;
  challenge: string;
  strategy: string;
  results: { kpi: string; value: string; detail: string }[];
  testimonial?: { text: string; author: string; role: string };
}

export interface SolutionData {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  tag: string;
  color: string;
  valueProposition: string;
  problem: string;
  description: string;
  features: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  caseStudy: CaseStudy;
  metaTitle: string;
  metaDesc: string;
}

export const solutions: SolutionData[] = [
  {
    slug: "conseil-strategique",
    title: "Conseil Stratégique & Gouvernance",
    tagline: "Transformez votre vision en trajectoire de croissance maîtrisée",
    heroImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80",
    tag: "Stratégie",
    color: "#0A2A5E",
    valueProposition: "Vos décisions stratégiques méritent une expertise de haut niveau. Nous alignons vision, gouvernance et exécution pour créer une organisation performante et résiliente.",
    problem: "Les dirigeants font face à des environnements incertains, des organisations mal alignées et des stratégies difficiles à décliner opérationnellement. Le fossé entre ambition stratégique et réalité terrain coûte chaque année des millions à vos entreprises.",
    description: "Notre practice de conseil stratégique accompagne les comités de direction dans la définition, la priorisation et la mise en œuvre de leurs orientations. Nous combinons diagnostic rigoureux, benchmark sectoriel et co-construction avec vos équipes pour produire des plans stratégiques actionnables.",
    features: [
      { title: "Diagnostic stratégique 360°", desc: "Analyse SWOT approfondie, cartographie des forces concurrentielles, identification des leviers de différenciation et des risques stratégiques." },
      { title: "Plan stratégique 3-5 ans", desc: "Co-construction de la feuille de route avec vos équipes dirigeantes. Priorisation des initiatives, définition des KPIs et des jalons de pilotage." },
      { title: "Refonte de la gouvernance", desc: "Optimisation des instances de décision, clarification des rôles et responsabilités, mise en place de tableaux de bord stratégiques." },
      { title: "Accompagnement à la mise en œuvre", desc: "Suivi trimestriel, ajustement de la trajectoire, animation des comités de pilotage et gestion du changement." },
    ],
    benefits: [
      { title: "Clarté décisionnelle", desc: "Un cap clair, des priorités partagées par toutes vos équipes et des décisions prises avec méthode." },
      { title: "Alignement organisationnel", desc: "Vos structures, processus et talent sont alignés sur votre ambition stratégique." },
      { title: "Accélération de l'exécution", desc: "Réduction du time-to-market de vos initiatives stratégiques grâce à des méthodologies éprouvées." },
      { title: "Résilience renforcée", desc: "Une organisation préparée aux disruptions, capable d'adapter sa stratégie en temps réel." },
    ],
    caseStudy: {
      client: "Groupe industriel marocain",
      sector: "Industrie manufacturière",
      challenge: "Un groupe industriel de 2 000 collaborateurs traversait une crise de croissance : trois acquisitions récentes mal intégrées, une perte de 12 points de marge sur 18 mois et une gouvernance multi-têtes source de paralysie décisionnelle.",
      strategy: "Nous avons déployé un diagnostic stratégique sur 6 semaines combinant entretiens individuels des 40 cadres dirigeants, analyse de la chaîne de valeur et benchmark sectoriel. La phase de refonte a porté sur la clarification du périmètre stratégique (abandon de 2 segments non rentables), la mise en place d'une gouvernance unifiée avec un Comex rénové et la construction d'un plan à 3 ans autour de 5 priorités claires.",
      results: [
        { kpi: "Marge opérationnelle", value: "+8 pts", detail: "Récupération de 8 points de marge en 14 mois post-intervention" },
        { kpi: "Délai décisionnel", value: "-60%", detail: "Réduction du délai moyen de prise de décision stratégique" },
        { kpi: "Engagement des équipes", value: "87%", detail: "Score d'engagement collaborateur mesuré à 87% (vs 54% avant)" },
        { kpi: "ROI du projet", value: "4,2×", detail: "Retour sur investissement mesuré sur les 24 mois suivants" },
      ],
      testimonial: {
        text: "GlobalWay a su transformer notre complexité en clarté. Pour la première fois en 10 ans, nos 12 directeurs parlent le même langage stratégique.",
        author: "PDG",
        role: "Groupe industriel, Casablanca",
      },
    },
    metaTitle: "Conseil Stratégique & Gouvernance — GlobalWay International",
    metaDesc: "Accompagnement des dirigeants dans la définition et la mise en œuvre de leur stratégie. Diagnostic, plan stratégique 3-5 ans, refonte de gouvernance.",
  },
  {
    slug: "pmo-excellence-operationnelle",
    title: "PMO & Excellence Opérationnelle",
    tagline: "Pilotez vos programmes avec rigueur et délivrez de la valeur",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
    tag: "PMO",
    color: "#0A2A5E",
    valueProposition: "Chaque jour de retard dans vos projets a un coût. Notre PMO as-a-Service structure votre portefeuille de projets et garantit la délivrance selon les délais, budgets et qualités attendus.",
    problem: "70% des grands projets de transformation dépassent leurs délais ou leur budget. Les organisations peinent à maintenir une visibilité sur leurs portefeuilles de projets, à gérer les interdépendances et à prendre des décisions correctives à temps.",
    description: "Notre practice PMO propose une approche complète : de la mise en place du bureau de gestion de projets à l'excellence opérationnelle de vos processus. Nous combinons les meilleures méthodologies (PMBoK, Prince2, Agile, Lean) avec une pragmatique orientée résultats.",
    features: [
      { title: "Setup du bureau PMO", desc: "Conception et mise en place de votre PMO : processus, outils, templates, reporting et rituel de gouvernance des projets." },
      { title: "Gestion de portefeuille", desc: "Priorisation des initiatives, allocation des ressources, suivi des interdépendances et gestion proactive des risques." },
      { title: "Excellence des processus", desc: "Cartographie et optimisation de vos processus critiques. Réduction des gaspillages, automatisation des tâches à faible valeur." },
      { title: "Formation et montée en compétences", desc: "Certification de vos chefs de projets (PMP, Prince2), coaching des équipes et acculturation à l'agilité organisationnelle." },
    ],
    benefits: [
      { title: "Visibilité totale", desc: "Un tableau de bord en temps réel sur l'état de votre portefeuille de projets pour décider vite et bien." },
      { title: "Taux de succès élevé", desc: "Nos clients atteignent un taux de projets livrés dans les délais de 89% vs 42% en moyenne sectorielle." },
      { title: "Réduction des coûts", desc: "Élimination des gaspillages et optimisation des ressources pour un gain moyen de 15 à 25% sur les coûts projets." },
      { title: "Culture de l'excellence", desc: "Des équipes qui maîtrisent les meilleures pratiques de gestion de projet et produisent en continu." },
    ],
    caseStudy: {
      client: "Banque régionale africaine",
      sector: "Services financiers",
      challenge: "Une banque de second rang pilotait simultanément 34 projets de transformation avec seulement 3 chefs de projets. Résultat : 78% des projets en retard, 3 projets réglementaires en risque de pénalité et une direction générale sans visibilité claire.",
      strategy: "Déploiement d'un PMO en 90 jours en 3 phases : audit des projets existants et arrêt de 12 initiatives non stratégiques, mise en place d'un outil de gestion de portefeuille centralisé et formation de 8 nouveaux chefs de projets internes. Mise en place d'un comité de pilotage mensuel avec reporting standardisé.",
      results: [
        { kpi: "Projets dans les délais", value: "89%", detail: "Contre 22% avant l'intervention, mesuré sur 18 mois" },
        { kpi: "Économies réalisées", value: "4,1 M€", detail: "Grâce à l'arrêt des projets non rentables et à l'optimisation" },
        { kpi: "Conformité réglementaire", value: "100%", detail: "Zéro pénalité sur les projets réglementaires critiques" },
        { kpi: "Satisfaction DG", value: "9,2/10", detail: "Score de satisfaction de la direction générale sur la visibilité" },
      ],
      testimonial: {
        text: "En 6 mois, GlobalWay a transformé notre chaos en machine bien huilée. Nous avons enfin une photographie fidèle de notre portefeuille.",
        author: "DSI",
        role: "Banque régionale, Tunis",
      },
    },
    metaTitle: "PMO & Excellence Opérationnelle — GlobalWay International",
    metaDesc: "Mise en place de PMO, gestion de portefeuille projets, excellence opérationnelle et certification. Livrez vos projets dans les délais et budgets.",
  },
  {
    slug: "transformation-digitale",
    title: "Transformation Digitale",
    tagline: "Faites du digital un avantage compétitif durable",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80",
    tag: "Digital",
    color: "#0A2A5E",
    valueProposition: "La transformation digitale n'est pas qu'un projet IT. C'est un changement profond de culture, de processus et de business model. Nous vous guidons de la stratégie SI à l'adoption par vos équipes.",
    problem: "Nombreuses sont les organisations qui investissent massivement dans le digital sans en récolter les bénéfices attendus : résistance au changement, mauvais choix technologiques, absence de gouvernance data. Le fossé entre les ambitions digitales et la réalité terrain est souvent béant.",
    description: "Notre approche de la transformation digitale est holistique. Nous intervenons sur les 4 dimensions clés : stratégie et architecture SI, sélection et déploiement des solutions, gestion du changement et formation, et gouvernance de la donnée.",
    features: [
      { title: "Stratégie & Schéma Directeur SI", desc: "Définition de votre cible technologique à 3 ans, cartographie des applications, plan de migration et budget prévisionnel." },
      { title: "Sélection et intégration des solutions", desc: "Assistance à la maîtrise d'ouvrage (AMOA), appels d'offres, sélection des éditeurs et supervision de l'intégration." },
      { title: "Conduite du changement", desc: "Plan de communication, formation des utilisateurs, accompagnement des managers et mesure de l'adoption." },
      { title: "Gouvernance de la donnée", desc: "Data strategy, architecture data, mise en place de dashboards analytiques et acculturation à la data-driven culture." },
    ],
    benefits: [
      { title: "ROI mesurable", desc: "Nos clients constatent en moyenne un ROI positif sur leurs investissements digitaux dès la 2ème année." },
      { title: "Adoption réelle", desc: "Un taux d'adoption des nouvelles solutions de 85% grâce à notre approche change management centrée sur l'humain." },
      { title: "Agilité renforcée", desc: "Des organisations capables de s'adapter rapidement aux nouvelles opportunités et aux disruptions du marché." },
      { title: "Maîtrise des risques", desc: "Aucune surcoûte projet non anticipée grâce à notre AMOA rigoureuse et notre gouvernance de projet." },
    ],
    caseStudy: {
      client: "Distributeur retail multi-enseignes",
      sector: "Commerce & Distribution",
      challenge: "Un distributeur opérant 45 points de vente et un site e-commerce sous-performant subissait une pression concurrentielle intense. Son SI vieillissant (ERP de 2008, absence d'outil CRM, données en silo) l'empêchait d'offrir une expérience client omnicanale cohérente.",
      strategy: "Déploiement d'une transformation sur 18 mois en 4 vagues : refonte du schéma directeur SI avec priorisation de la donnée client, migration vers un ERP cloud (S/4HANA), intégration d'une plateforme CRM unifiée et lancement d'un programme de change management pour 280 collaborateurs.",
      results: [
        { kpi: "CA e-commerce", value: "+127%", detail: "Croissance du chiffre d'affaires digital en 12 mois post-migration" },
        { kpi: "Taux de rétention client", value: "+34%", detail: "Grâce au CRM unifié et aux programmes de fidélisation personnalisés" },
        { kpi: "Coûts IT", value: "-22%", detail: "Réduction des coûts d'infrastructure grâce à la migration cloud" },
        { kpi: "Délai de traitement des commandes", value: "-68%", detail: "Automatisation de la chaîne logistique end-to-end" },
      ],
      testimonial: {
        text: "GlobalWay a réussi l'équation impossible : une transformation ambitieuse livrée dans les délais, sans rupture d'activité et avec des équipes embarquées.",
        author: "DGA Digital",
        role: "Distributeur retail, Casablanca",
      },
    },
    metaTitle: "Transformation Digitale — GlobalWay International",
    metaDesc: "Stratégie SI, conduite du changement et gouvernance data. Accompagnement complet de votre transformation digitale avec ROI mesurable.",
  },
  {
    slug: "ia-automatisation",
    title: "Conseil IA & Automatisation",
    tagline: "Déployez l'IA là où elle crée vraiment de la valeur",
    heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80",
    tag: "IA",
    color: "#0A2A5E",
    valueProposition: "L'IA générative et la RPA ne sont pas des gadgets technologiques — ce sont des leviers de productivité extraordinaires. Nous identifions vos cas d'usage à ROI rapide et les déployons en production.",
    problem: "La plupart des organisations sont submergées d'opportunités IA mais ne savent pas par où commencer. Les POC ne passent jamais en production, les équipes IT et métier ne se comprennent pas, et les investissements s'accumulent sans impact mesurable.",
    description: "Notre practice IA & Automatisation part toujours de vos enjeux métier pour identifier les cas d'usage à plus forte valeur. Nous combinons la RPA (Robotic Process Automation) pour les processus répétitifs, l'IA générative pour les tâches cognitives et le machine learning pour la prédiction et l'optimisation.",
    features: [
      { title: "Audit & Cartographie des cas d'usage", desc: "Identification systématique des processus automatisables, scoring ROI/complexité et priorisation des quick wins." },
      { title: "Déploiement RPA", desc: "Automatisation des processus répétitifs avec des robots logiciels (UiPath, Automation Anywhere, Power Automate)." },
      { title: "Intégration IA Générative", desc: "Déploiement de LLM (GPT-4, Claude, Mistral) pour la génération de contenu, le service client et l'analyse documentaire." },
      { title: "ML & Analytics avancés", desc: "Modèles prédictifs pour la demand forecasting, la détection de fraude, le churn ou la maintenance prédictive." },
    ],
    benefits: [
      { title: "ROI en moins de 6 mois", desc: "Nos déploiements pilotes montrent un retour sur investissement positif en moins de 6 mois sur les cas standards." },
      { title: "Gain de productivité", desc: "Libérez vos équipes des tâches à faible valeur et concentrez leur énergie sur ce qui nécessite vraiment l'intelligence humaine." },
      { title: "Scalabilité immédiate", desc: "Un robot ne prend pas de congés. Les solutions déployées s'adaptent instantanément aux variations de charge." },
      { title: "Qualité et conformité", desc: "Zéro erreur humaine sur les processus automatisés, auditabilité complète et traçabilité des traitements." },
    ],
    caseStudy: {
      client: "Compagnie d'assurance régionale",
      sector: "Assurance",
      challenge: "Une compagnie d'assurance traitait 1 200 dossiers sinistres par mois avec une équipe de 18 gestionnaires. Le délai moyen de traitement atteignait 21 jours, le taux d'erreur sur les calculs d'indemnisation dépassait 8% et les gestionnaires consacraient 60% de leur temps à des tâches administratives répétitives.",
      strategy: "Déploiement d'un programme IA en 3 sprints de 6 semaines : automatisation RPA de la saisie et vérification des pièces justificatives, développement d'un modèle ML de scoring des dossiers pour priorisation automatique et intégration d'un assistant IA générative pour la rédaction des courriers d'indemnisation.",
      results: [
        { kpi: "Délai de traitement", value: "21 → 4 jours", detail: "Réduction de 81% du délai moyen de traitement des sinistres" },
        { kpi: "Taux d'erreur", value: "-94%", detail: "Quasi-élimination des erreurs de calcul d'indemnisation" },
        { kpi: "Productivité équipe", value: "+340%", detail: "Chaque gestionnaire traite 4× plus de dossiers complexes" },
        { kpi: "Satisfaction client NPS", value: "+42 pts", detail: "Score NPS passé de 23 à 65 grâce à la rapidité de traitement" },
      ],
      testimonial: {
        text: "Nous pensions que l'IA était réservée aux grandes entreprises. GlobalWay nous a prouvé le contraire en 4 mois.",
        author: "Directeur des Opérations",
        role: "Compagnie d'assurance, Tunis",
      },
    },
    metaTitle: "Conseil IA & Automatisation — GlobalWay International",
    metaDesc: "Identification et déploiement de cas d'usage IA, RPA et IA générative. ROI mesurable en moins de 6 mois pour vos processus métier.",
  },
  {
    slug: "conformite-iso",
    title: "Conformité Qualité & Certification ISO",
    tagline: "Obtenez votre certification ISO avec méthode et sérénité",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    tag: "ISO",
    color: "#0A2A5E",
    valueProposition: "La certification ISO n'est pas une contrainte administrative — c'est un levier de confiance client et d'excellence opérationnelle. Nous vous guidons vers la certification en moins de 9 mois.",
    problem: "De nombreuses organisations échouent leur audit de certification par manque de méthode, de documentation insuffisante ou d'une culture qualité inexistante. Les tentatives en autonomie aboutissent souvent à des cycles interminables et coûteux.",
    description: "Notre practice Qualité & ISO couvre l'ensemble du spectre des normes de management : ISO 9001 (qualité), ISO 27001 (sécurité de l'information), ISO 14001 (environnement), ISO 45001 (santé & sécurité) et ISO 22301 (continuité d'activité). Nous avons accompagné plus de 60 organisations vers la certification.",
    features: [
      { title: "Gap Analysis initiale", desc: "Évaluation de votre niveau de conformité actuel par rapport aux exigences de la norme cible. Identification des écarts et plan d'action priorisé." },
      { title: "Mise en place du SMQ", desc: "Rédaction de la documentation (politique qualité, procédures, enregistrements), formation des auditeurs internes et déploiement du système." },
      { title: "Préparation à l'audit", desc: "Simulation d'audit complet, correction des non-conformités et accompagnement jusqu'à l'audit de certification." },
      { title: "Maintien de la certification", desc: "Suivi post-certification, gestion des audits de surveillance et amélioration continue du système de management." },
    ],
    benefits: [
      { title: "Certification garantie", desc: "Notre taux de succès au premier passage est de 94%. Nous vous accompagnons jusqu'à l'obtention effective de la certification." },
      { title: "Délai maîtrisé", desc: "Notre méthode structurée permet d'atteindre la certification ISO 9001 en moins de 9 mois en moyenne." },
      { title: "Valeur business réelle", desc: "La certification ouvre des marchés (appels d'offres publics, contrats avec grandes entreprises) et renforce la confiance de vos clients." },
      { title: "Culture qualité ancrée", desc: "Au-delà de la certification, vos équipes intègrent une culture d'amélioration continue qui génère de la valeur durablement." },
    ],
    caseStudy: {
      client: "Cabinet d'ingénierie marocain",
      sector: "Ingénierie & Conseil",
      challenge: "Un cabinet d'ingénierie de 120 personnes perdait systématiquement des appels d'offres gouvernementaux faute de certification ISO 9001. Deux tentatives précédentes avaient échoué, laissant les équipes démotivées et skeptiques vis-à-vis de la démarche qualité.",
      strategy: "Notre approche en 4 phases sur 8 mois : gap analysis révélant 47 non-conformités majeures, restructuration complète du système documentaire avec 32 procédures clés, formation de 6 auditeurs internes et 3 simulations d'audit avec sessions de remédiation. Accompagnement personnalisé de la direction lors de l'audit de certification.",
      results: [
        { kpi: "Certification obtenue", value: "✓ ISO 9001", detail: "Obtention au premier passage, 0 non-conformité majeure lors de l'audit" },
        { kpi: "Nouveaux marchés", value: "+3,8 M€", detail: "Appels d'offres remportés grâce à la certification dans les 12 mois" },
        { kpi: "Satisfaction client", value: "+28 pts", detail: "Score CSAT amélioré grâce aux processus qualité formalisés" },
        { kpi: "Efficacité interne", value: "-35%", detail: "Réduction des reprises et non-conformités internes" },
      ],
      testimonial: {
        text: "Après deux échecs, nous avons failli abandonner. GlobalWay a transformé cette certification en véritable succès collectif. Un investissement qui s'est rentabilisé dès la première année.",
        author: "Directeur Général",
        role: "Cabinet d'ingénierie, Rabat",
      },
    },
    metaTitle: "Certification ISO 9001, 27001, 14001 — GlobalWay International",
    metaDesc: "Accompagnement vers la certification ISO 9001, 27001, 14001, 45001. Taux de succès de 94% au premier passage. Certification en moins de 9 mois.",
  },
  {
    slug: "cybersecurite",
    title: "Cybersécurité & Gestion des Risques",
    tagline: "Protégez votre organisation avant que les menaces frappent",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80",
    tag: "Cyber",
    color: "#0A2A5E",
    valueProposition: "Une cyberattaque coûte en moyenne 4,5 M€ à une organisation. La question n'est pas de savoir si vous serez attaqué, mais quand. Nous évaluons vos vulnérabilités et construisons votre résilience cyber.",
    problem: "Les menaces cyber évoluent plus vite que les défenses des organisations. Les équipes IT sont surchargées, les dirigeants sous-informés des risques réels, et la conformité RGPD reste partielle. Une violation de données peut ruiner des années de réputation en quelques heures.",
    description: "Notre practice Cybersécurité propose une approche de bout en bout : de l'audit de votre exposition aux risques jusqu'à la mise en place d'un Système de Management de la Sécurité de l'Information (SMSI) certifié ISO 27001. Nos experts certifiés (CISSP, CISM, CEH) traitent aussi bien les aspects techniques que organisationnels.",
    features: [
      { title: "Audit & Diagnostic Cyber 360°", desc: "Test d'intrusion (pentest), analyse de vulnérabilités, évaluation de la posture de sécurité et cartographie des actifs critiques." },
      { title: "Mise en conformité RGPD", desc: "Registre des traitements, analyse d'impact (PIA), mise en place des processus de gestion des droits et des violations de données." },
      { title: "SMSI & Certification ISO 27001", desc: "Conception et déploiement du Système de Management de la Sécurité de l'Information, jusqu'à la certification." },
      { title: "Plan de continuité & SOC", desc: "Business Continuity Plan (BCP), Disaster Recovery Plan (DRP) et mise en place d'un centre de surveillance (SOC)." },
    ],
    benefits: [
      { title: "Visibilité sur les risques réels", desc: "Un état précis de votre exposition et des priorités de remédiation classées par impact business." },
      { title: "Réduction drastique de l'exposition", desc: "Nos clients réduisent leur surface d'attaque de 70% en moyenne dans les 6 mois suivant l'intervention." },
      { title: "Conformité réglementaire", desc: "Mise en conformité RGPD, NIS2 et sectorielles (Banking, Assurance) pour éviter les sanctions et renforcer la confiance." },
      { title: "Résilience organisationnelle", desc: "Des processus et des équipes capables de détecter, répondre et se relever rapidement en cas d'incident." },
    ],
    caseStudy: {
      client: "ETI du secteur pharmaceutique",
      sector: "Pharmaceutique & Life Sciences",
      challenge: "Une ETI pharmaceutique de 500 salariés avait subi une tentative de ransomware ayant chiffré 30% de ses données de R&D. L'entreprise opérait sans SMSI formel, avec des droits d'accès non contrôlés et aucune procédure de gestion des incidents. La propriété intellectuelle (formules, brevets) était directement exposée.",
      strategy: "Mission de cybersécurité en mode crise puis reconstruction structurelle : réponse à l'incident et remédiation immédiate (72h), audit de l'architecture SI et des droits d'accès, déploiement d'une stratégie Zero Trust, implémentation d'un SMSI ISO 27001 et formation de l'ensemble des collaborateurs à la cyber-hygiène.",
      results: [
        { kpi: "Incidents de sécurité", value: "-89%", detail: "Réduction des incidents dans les 12 mois post-intervention" },
        { kpi: "Certification ISO 27001", value: "Obtenue", detail: "En 11 mois, avec zéro non-conformité majeure lors de l'audit" },
        { kpi: "Couverture des risques", value: "94%", detail: "Des risques critiques identifiés traités et résolus" },
        { kpi: "Temps de détection", value: "4h → 12 min", detail: "Réduction du temps de détection d'un incident grâce au SOC" },
      ],
      testimonial: {
        text: "L'attaque a failli nous coûter notre R&D de 10 ans. GlobalWay a non seulement sauvé nos données mais nous a rendu plus forts qu'avant.",
        author: "DSI",
        role: "Laboratoire pharmaceutique, Lyon",
      },
    },
    metaTitle: "Cybersécurité & Gestion des Risques — GlobalWay International",
    metaDesc: "Audit cyber, conformité RGPD, ISO 27001, plan de continuité. Protégez votre organisation des cybermenaces avec nos experts certifiés CISSP.",
  },
  {
    slug: "experts-a-la-demande",
    title: "Experts à la Demande",
    tagline: "Les meilleurs profils mobilisés en 48h pour vos défis critiques",
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
    tag: "Talents",
    color: "#0A2A5E",
    valueProposition: "Certains défis nécessitent une expertise que vous ne pouvez pas recruter en permanence. Nous vous donnons accès à un réseau de 200+ experts certifiés, mobilisables en 48h pour vos projets les plus exigeants.",
    problem: "Les organisations font face à des pics d'activité, des projets spécifiques ou des compétences rares qu'elles ne peuvent ni recruter ni maintenir en interne. Le management de transition ou les missions courtes nécessitent un niveau d'expertise et de confiance rarement trouvé via les plateformes génériques.",
    description: "Notre réseau d'experts à la demande couvre toutes nos spécialités : managers de transition, consultants sectoriels, experts techniques, formateurs certifiés et auditeurs ISO. Chaque expert est sélectionné selon un processus rigoureux et bénéficie d'un suivi qualité continu.",
    features: [
      { title: "Management de transition", desc: "DG, DAF, DSI, DRH ou Directeurs métier en mission de transition pour assurer la continuité dans vos moments critiques." },
      { title: "Experts projet certifiés", desc: "PMP, Prince2, CISSP, CISA, Lead Auditor ISO — des profils certifiés disponibles à la mission ou à la journée." },
      { title: "Staffing de renfort", desc: "Constitution d'équipes projets complètes pour vos pics d'activité ou vos transformations à durée déterminée." },
      { title: "Accompagnement et suivi", desc: "Chaque mission fait l'objet d'un suivi qualité mensuel et d'un reporting transparent vers votre direction." },
    ],
    benefits: [
      { title: "Mobilisation en 48h", desc: "Notre réseau préqualifié permet une mise en poste en 48 heures sur les profils standard et 5 jours sur les profils rares." },
      { title: "Zéro risque de recrutement", desc: "Pas de CDI à risque, pas de période d'essai — des experts opérationnels dès le premier jour." },
      { title: "Garantie de qualité", desc: "Chaque expert est évalué à 360° : compétences techniques, comportementales et soft skills vérifiés." },
      { title: "Flexibilité totale", desc: "De la mission d'une semaine au management de transition de 18 mois, nous nous adaptons à vos besoins." },
    ],
    caseStudy: {
      client: "Opérateur télécom en crise",
      sector: "Télécommunications",
      challenge: "Un opérateur télécom régional perdait son DSI de manière soudaine à 3 mois du lancement d'une migration réseau critique représentant 12 M€ d'investissement. Sans leadership technique, le projet risquait l'arrêt et la perte de la fenêtre de migration négociée avec les équipementiers.",
      strategy: "Mobilisation d'un DSI de transition en 36 heures : profil senior avec 20 ans d'expérience télécom, anciennement directeur technique chez un opérateur tier-1. Mission de 9 mois couvrant la continuité du management de la DSI (60 personnes), supervision de la migration réseau et recrutement et passation au DSI permanent.",
      results: [
        { kpi: "Migration réseau", value: "100%", detail: "Lancée dans les délais contractuels, sans retard ni surcoût" },
        { kpi: "Continuité d'activité", value: "0 rupture", detail: "Aucune interruption de service pendant la transition managériale" },
        { kpi: "Rétention des équipes IT", value: "97%", detail: "Seul 1 départ sur 60 collaborateurs pendant la transition" },
        { kpi: "Délai de remplacement", value: "36h", detail: "Délai entre l'appel de crise et la prise de poste de l'expert" },
      ],
      testimonial: {
        text: "En 36 heures, nous avions un DSI de transition opérationnel. Ce n'est pas de la chance, c'est un process. GlobalWay a évité un désastre.",
        author: "Directeur Général",
        role: "Opérateur télécom régional",
      },
    },
    metaTitle: "Experts à la Demande & Management de Transition — GlobalWay International",
    metaDesc: "200+ experts certifiés mobilisables en 48h. Management de transition, staffing projet, consultants spécialisés ISO, cyber, IA et stratégie.",
  },
  {
    slug: "formation-coaching",
    title: "Formation & Coaching",
    tagline: "Développez les compétences qui feront votre différence demain",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80",
    tag: "Formation",
    color: "#0A2A5E",
    valueProposition: "Les organisations qui investissent dans le développement de leurs talents surperforment de 24% leurs concurrents. Nos programmes de formation et coaching transforment les compétences individuelles en performance collective.",
    problem: "Les formations traditionnelles s'évaporent : 70% des connaissances acquises en formation sont oubliées en 24h sans application pratique. Les coachs sans ancrage sectoriel prodiguent des conseils déconnectés de la réalité des dirigeants. Le vrai développement des compétences nécessite une approche sur-mesure et ancrée dans la pratique.",
    description: "Notre practice Formation & Coaching propose des programmes certifiants en management de projet (PMP, Prince2), en audit interne ISO, et des programmes de développement du leadership sur-mesure. Nos coachs certifiés ICF accompagnent individuellement les dirigeants et leurs comités de direction.",
    features: [
      { title: "Programmes de certification", desc: "Préparation aux certifications PMP, Prince2 Foundation/Practitioner, Lead Auditor ISO 9001/27001, CISM et plus de 15 autres certifications." },
      { title: "Formation sur-mesure", desc: "Conception et animation de formations intra-entreprise alignées sur vos enjeux spécifiques et votre culture organisationnelle." },
      { title: "Coaching exécutif individuel", desc: "Accompagnement individuel des dirigeants et managers sur leurs défis de leadership, de prise de décision et d'impact." },
      { title: "Coaching de comité de direction", desc: "Accompagnement collectif des COMEX et CODIR pour renforcer la cohésion, l'efficacité collective et l'alignement stratégique." },
    ],
    benefits: [
      { title: "Impact mesurable en 3 mois", desc: "Nos programmes prévoient des KPIs de développement définis dès le départ et mesurés à 3, 6 et 12 mois." },
      { title: "Taux de certification élevé", desc: "93% de nos participants obtiennent leur certification au premier passage grâce à notre méthode d'accompagnement intensif." },
      { title: "Application immédiate", desc: "Des formations 100% ancrées dans la pratique : cas réels de votre secteur, exercices sur vos propres projets." },
      { title: "Rétention des talents", desc: "Les organisations qui investissent dans le coaching et la formation réduisent leur turnover de 30% en moyenne." },
    ],
    caseStudy: {
      client: "Groupe agroalimentaire en expansion",
      sector: "Agroalimentaire",
      challenge: "Un groupe agroalimentaire venait de promouvoir 14 managers intermédiaires issus du terrain à des postes de direction. Excellents opérationnellement, ces nouveaux managers peinaient à exercer leur leadership, à gérer des équipes et à contribuer aux décisions stratégiques. Le turnover dans leurs équipes atteignait 28%.",
      strategy: "Programme de développement du leadership sur 12 mois en 3 volets : formation aux fondamentaux du management (communication, délégation, feedback, conduite de réunion), coaching individuel bimensuel de chaque manager par un coach certifié ICF, et accompagnement du collectif managérial (2 séminaires de cohésion trimestriels).",
      results: [
        { kpi: "Turnover équipes", value: "28% → 9%", detail: "Réduction de 68% du turnover dans les équipes des managers formés" },
        { kpi: "Engagement collaborateurs", value: "+31 pts", detail: "Score d'engagement Gallup passé de 42 à 73% en 12 mois" },
        { kpi: "Performance managériale", value: "8,4/10", detail: "Score moyen évaluation 360° des managers formés (vs 5,1 avant)" },
        { kpi: "ROI formation", value: "6,8×", detail: "Retour sur investissement calculé sur la réduction des coûts de turnover" },
      ],
      testimonial: {
        text: "Ces managers sont méconnaissables — dans le bon sens du terme. Ils dirigent avec confiance, leurs équipes les suivent. C'est la meilleure décision RH de cette décennie.",
        author: "DRH Groupe",
        role: "Groupe agroalimentaire, Maroc-France",
      },
    },
    metaTitle: "Formation & Coaching Exécutif — GlobalWay International",
    metaDesc: "Programmes de certification PMP, ISO, coaching de dirigeants certifié ICF. 93% de taux de réussite. Développez les compétences de vos équipes.",
  },
];

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutions.find((s) => s.slug === slug);
}
