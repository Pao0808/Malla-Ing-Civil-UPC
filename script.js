const malla = [
  {
    semestre: "1er semestre",
    materias: [
      { id: "ci709", nombre: "CI709 Introducción a la Ingeniería Civil" },
      { id: "ma420", nombre: "MA420 Matemática Básica" },
      { id: "ch421", nombre: "CH421 Química General" },
      { id: "fi423", nombre: "FI423 Física General I" },
      { id: "eg702", nombre: "EG702 Expresión Gráfica" },
    ]
  },
  {
    semestre: "2do semestre",
    materias: [
      { id: "ma262", nombre: "MA262 Cálculo I", requiere: ["ma420"] },
      { id: "fi424", nombre: "FI424 Física General II", requiere: ["fi423"] },
      { id: "cs705", nombre: "CS705 Computación" },
      { id: "eg703", nombre: "EG703 Dibujo Técnico Asistido por Computadora" },
      { id: "hu701", nombre: "HU701 Redacción Técnica" },
    ]
  },
  {
    semestre: "3er semestre",
    materias: [
      { id: "ma263", nombre: "MA263 Cálculo II", requiere: ["ma262"] },
      { id: "ma264", nombre: "MA264 Álgebra Lineal y Geometría Analítica", requiere: ["ma262"] },
      { id: "fi321", nombre: "FI321 Mecánica General", requiere: ["fi424"] },
      { id: "ci708", nombre: "CI708 Geología General", requiere: ["ch421"] },
      { id: "ci703", nombre: "CI703 Topografía I" },
    ]
  },
  {
    semestre: "4to semestre",
    materias: [
      { id: "ma265", nombre: "MA265 Ecuaciones Diferenciales", requiere: ["ma263"] },
      { id: "ci706", nombre: "CI706 Resistencia de Materiales I", requiere: ["fi321"] },
      { id: "ci704", nombre: "CI704 Topografía II", requiere: ["ci703"] },
      { id: "ci707", nombre: "CI707 Materiales de Construcción", requiere: ["ch421"] },
      { id: "hu702", nombre: "HU702 Sociología y Ética Profesional" },
    ]
  },
  {
    semestre: "5to semestre",
    materias: [
      { id: "ci705", nombre: "CI705 Mecánica de Suelos I", requiere: ["ci706"] },
      { id: "ci710", nombre: "CI710 Hidráulica I", requiere: ["ma265"] },
      { id: "ci711", nombre: "CI711 Instalaciones Sanitarias", requiere: ["ci707"] },
      { id: "ci712", nombre: "CI712 Vías de Comunicación I", requiere: ["ci704"] },
      { id: "hu703", nombre: "HU703 Medio Ambiente y Desarrollo Sostenible" },
    ]
  },
  {
    semestre: "6to semestre",
    materias: [
      { id: "ci713", nombre: "CI713 Mecánica de Suelos II", requiere: ["ci705"] },
      { id: "ci714", nombre: "CI714 Hidráulica II", requiere: ["ci710"] },
      { id: "ci715", nombre: "CI715 Estructuras I", requiere: ["ci706"] },
      { id: "ci716", nombre: "CI716 Hormigón I", requiere: ["ci707"] },
      { id: "ci717", nombre: "CI717 Vías de Comunicación II", requiere: ["ci712"] },
    ]
  },
  {
    semestre: "7mo semestre",
    materias: [
      { id: "ci718", nombre: "CI718 Cimentaciones", requiere: ["ci713"] },
      { id: "ci719", nombre: "CI719 Obras Hidráulicas", requiere: ["ci714"] },
      { id: "ci720", nombre: "CI720 Estructuras II", requiere: ["ci715"] },
      { id: "ci721", nombre: "CI721 Hormigón II", requiere: ["ci716"] },
      { id: "ci722", nombre: "CI722 Pavimentos", requiere: ["ci717"] },
    ]
  },
  {
    semestre: "8vo semestre",
    materias: [
      { id: "ci723", nombre: "CI723 Organización de Obras", requiere: ["ci721"] },
      { id: "ci724", nombre: "CI724 Ingeniería Legal" },
      { id: "ci725", nombre: "CI725 Ingeniería Ambiental", requiere: ["ci719"] },
      { id: "ci726", nombre: "CI726 Estructuras Metálicas", requiere: ["ci720"] },
      { id: "ci727", nombre: "CI727 Gestión y Evaluación de Proyectos" },
    ]
  },
  {
    semestre: "9no semestre",
    materias: [
      { id: "ci728", nombre: "CI728 Planificación y Control de Obras", requiere: ["ci723"] },
      { id: "ci729", nombre: "CI729 Costos y Presupuestos de Obras", requiere: ["ci723"] },
      { id: "ci730", nombre: "CI730 Ingeniería de Transporte", requiere: ["ci722"] },
      { id: "ci731", nombre: "CI731 Electivo I" },
      { id: "ci732", nombre: "CI732 Electivo II" },
    ]
  },
  {
    semestre: "10mo semestre",
    materias: [
      { id: "ci733", nombre: "CI733 Electivo III" },
      { id: "ci734", nombre: "CI734 Trabajo Dirigido" },
      { id: "ci735", nombre: "CI735 Proyecto de Grado" },
      { id: "ci736", nombre: "CI736 Práctica Profesional Supervisada" },
    ]
  }
];
