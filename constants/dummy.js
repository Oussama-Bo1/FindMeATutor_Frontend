import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Mathe",
    creator: "",
    price: 4.25,
    description:
      "Anforderungen an Abstraktion, Folgerichtigkeit und Exaktheit bei der Auseinandersetzung mit mathematischen Problemen schulen in besonderem Maße das systematische und logische Denken sowie das kritische Urteilen. Beim selbstständigen Bearbeiten von mathematischen Problemen nutzen und reflektieren die Schülerinnen und Schüler Heurismen und festigen das Vertrauen in ihre Denkfähigkeit. Bei der Bearbeitung von Problemen erfahren Schülerinnen und Schüler, dass Anstrengungsbereitschaft und Beharrlichkeit erforderlich sind, um zu Lösungen zu gelangen.Digitale Mathematikwerkzeuge ermöglichen durch die vielfältigen und schnell zugänglichen Darstellungsformen ein experimentelles Arbeiten. Mathematische Probleme können durch Variation und Erkundung der Konsequenzen eigenständig gefunden und gelöst werden. Dabei bietet sich die Gelegenheit, über die Tauglichkeit der eingesetzten Werkzeuge zu reflektieren.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Deutsch",
    creator: "",
    price: 7.25,
    description:
      "Für die Schülerinnen und Schüler ist dasFach Deutsch von grundlegender Bedeutung: Texte interessiert und verstehend lesen, ihnen weiterführende, sachgerechte Informationen entnehmen, sich mündlich undschriftlich in unterschiedlichen Situationenverständigen, verschiedene Schreibformenbeherrschen, Texte normgerecht verfassen,Kreativität entfalten, Medien einschließlichdigitaler Informations- und Kommunikationsangebote fachbezogen, reflektiert und kreativ für die eigene Kompetenzentwicklung nutzen, das sind Voraussetzungen, die für diekulturelle und gesellschaftliche Teilhabe, fürdie Vorbereitung einer beruflichen Ausbildung und für die Fortsetzung der Schullaufbahn wesentlich sind. Das Fach fördert denErwerb der grundlegenden schriftlichen undmündlichen Kommunikations- und Darstellungsfähigkeiten unter Berücksichtigung situativer Anforderungen und ihrer Gestaltungsnormen sowie unter Nutzung zeitgemäßer medialer Möglichkeiten und Werkzeuge.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "Latein",
    creator: "",
    price: 95.25,
    description:
      "",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "Englisch",
    creator: "",
    price: 54.25,
    description:
      "Am Ende von Schuljahrgang 4 sprechen die Schülerinnen und Schüler mit sehr einfachen bekannten Redemitteln zu Themen, die sich auf die eigene Person und die unmittelbare Lebenswelt beziehen.",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-05",
    name: "Französisch",
    creator: "",
    price: 10.25,
    description:
      "Ziel des Französischunterrichts in der Qualifikationsphase ist die Festigung und integrative Erweiterung der in den Schuljahrgängen 6 - 10 (bzw. 7 - 11 an der Gesamtschule) entwickelten Teilkompetenzen. Für die fortgeführte Fremdsprache orientieren sich die Erwartungen an der Niveaustufe B2 - in einzelnen Bereichen C1 - des Gemeinsamen europäischen Referenzrahmen für Sprachen",
    image: assets.nft05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "NFT-06",
    name: "Chemie",
    creator: "",
    price: 20.25,
    description:
      "Zu dem Kompetenzbereich Erkenntnisgewinnung zählen fachspezifische Denk- und Arbeitsweisen. Dazu gehört, dass Schülerinnen und Schüler chemische Fragestellungen erkennen, entwickeln und experimentell untersuchen. Folglich spielt das Experiment eine zentrale Rolle im Chemieunterricht.Zur Deutung der Phänomene müssen geeignete Modelle eingeführt, angewendet und kritisch reflektiert werden. Bei der Kompetenzentwicklung werden mathematische Methoden unter besonderer Be- rücksichtigung der Lernvoraussetzungen der Schülerinnen und Schüler verwendet, um einem unver- standenen und inhaltsleeren Umgang mit Formalismen entgegenzuwirken.Durch die wiederholte Auseinandersetzung mit chemischen Fragestellungen erhalten die Schülerin- nen und Schüler einen Einblick in den naturwissenschaftlichen Erkenntnisprozess. Dadurch wird ein Beitrag für die Entwicklung eines rationalen, naturwissenschaftlich begründeten Weltbildes geleistet.",
    image: assets.nft06,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "Biologie",
    creator: "",
    price: 18.25,
    description:
      "Problemorientierter naturwissenschaftlicher Unterricht erweitert kontinuierlich und kumulativ die Fähigkeiten der Schülerinnen und Schüler, naturwissenschaftliche Fragen als solche zu erkennen und mit geeigneten fachspezifischen Verfahren zu lösen. Dabei geht es im Wesentlichen um den Umgang mit Problemlösestrategien und um fachspezifische Arbeitstechniken. Besonders bedeutsam ist das hypothesengeleitete Experimentieren; schrittweise wird die Fähigkeit der Lernenden zur eigenständigen systematischen Planung aussagekräftiger Experimente entwickelt. Neben demExperimentieren spielt in der Biologie das Beobachten von Naturphänomenen eine wesentliche Rolle. Beiden zentralen Kompetenzen liegt der naturwissenschaftliche Erkenntnisweg nach dem hypothetisch-deduktiven Verfahren zugrunde.",
    image: assets.nft07,
    bids: [],
  },
  {
    id: "NFT-12",
    name: "Informatik",
    creator: "",
    price: 20.25,
    description:
      "In der Informatik werden Problemstellungen häufig mit Hilfe von Algorithmen gelöst. Der Informatikunterricht macht Schülerinnen und Schüler in unterschiedlichen Kontexten mit den Prinzipien der algorithmischen Problemlösung und der Implementierung ihrer Lösungsideen vertraut.",
    image: assets.informatik,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-08",
    name: "Physik",
    creator: "",
    price: 20.25,
    description:
      "Im Themenbereich Dauermagnetismus werden altersangemessen magnetische Phänomene in Experimenten erkundet. Mit dem Modell der Elementarmagnete erfolgt die Begegnung mit einem ersten physikalischen Modell und somit ein erster Einstieg in die klassischen Arbeitsweisen der Physik.",
    image: assets.physik,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-09",
    name: "Religion",
    creator: "",
    price: 20.25,
    description:
      "Die Lernenden beschäftigen sich mit der subjektiven Bedeutung von Erfahrungen, Prägungen und Voreinstellungen und die damit verbundene eigene Interpretation von Phänomenen. Sie schildern Alltagserfahrungen, beschreiben Sichtweisen und Gefühle und beschäftigen sich mit dem Verständnis von Problemen und Erfahrungen.",
    image: assets.religion,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-10",
    name: "Musik",
    creator: "",
    price: 20.25,
    description:
      "Die Kompetenzen werden im Kerncurriculum in Grundlagen und Erweiterungen geordnet und ausdifferenziert. Dabei legt die Fachkonferenz die Verteilung der Kompetenzen für die einzelnen Schuljahrgänge fest. Zur fachlichen Konkretisierung werden folgende Themen und Begriffe aufgeführt.",
    image: assets.musik1,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-11",
    name: "Politik & Wirtschaft",
    creator: "",
    price: 20.25,
    description:
      "Als Methodenkompetenz wird die Fähigkeit zur zielgerichteten Nutzung fachspezifischer Instrumente verstanden, welche zum zunehmend selbstständigen Erlangen neuer Erkenntnisse beiträgt. Fachspezifische Methoden und Arbeitstechniken werden an Inhalten erworben und eingesetzt. Politische und ökonomische Phänomene werden mithilfe fachspezifischer Methoden analysiert (z. B. Politikzyklus, Kreislaufmodell). Fachspezifische Arbeitstechniken werden zur methodischen Erschließung genutzt (z. B. von Statistiken, Karikaturen). Die Fachsprache wird kontextgebunden verwendet. Die Methodenkompetenz beinhaltet auch eine zunehmende Reflexionsfähigkeit hinsichtlich der Potenziale und Grenzen von fachspezifischen Methoden. Die Methodenkompetenz ist eher den prozessbezogenen Kompetenzen zugeordnet.",
    image: assets.bundestag,
    bids: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
];

export { NFTData };
