<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Plan de Estudios - Ingeniería Civil</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Puedes reemplazar todo este bloque por tu CSS */
    body {
      font-family: sans-serif;
      background: #f4f4f4;
      padding: 2rem;
    }
    h1 {
      text-align: center;
    }
    .controls {
      text-align: center;
      margin-bottom: 1rem;
    }
    .controls button {
      margin: 0.3rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      background: #007bff;
      color: white;
      cursor: pointer;
    }
    .semestre {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .materia {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid #ddd;
    }
    .materia:last-child {
      border-bottom: none;
    }
    .materia input:disabled + label {
      color: #aaa;
    }
    .creditos {
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <h1>📘 Plan de Estudios - Ingeniería Civil</h1>

  <div class="controls">
    <button onclick="marcarTodo()">✅ Marcar todo</button>
    <button onclick="reiniciar()">🔄 Reiniciar</button>
    <button onclick="toggleOcultar()">🙈 Ocultar Aprobadas</button>
  </div>

  <div class="creditos">Créditos aprobados: <span id="creditos">0</span></div>

  <div id="plan-estudios"></div>

  <script>
const materias = [
  // 📘 SEMESTRE 1
  { codigo: "HU625", nombre: "🗣️ Comprensión y Producción de Lenguaje I", creditos: 4, semestre: 1 },
  { codigo: "CI161", nombre: "🖊️ Dibujo Asistido por el Computador", creditos: 4, semestre: 1 },
  { codigo: "CI709", nombre: "🏗️ Introducción a la Ingeniería Civil", creditos: 3, semestre: 1 },
  { codigo: "MA420", nombre: "📐 Matemática Básica", creditos: 6, semestre: 1 },
  { codigo: "MA465", nombre: "🧪 Química", creditos: 4, semestre: 1 },

  // 📘 SEMESTRE 2
  { codigo: "HU626", nombre: "🗣️ Comprensión y Producción de Lenguaje II", creditos: 4, semestre: 2, requisitos: ["HU625"] },
  { codigo: "MA262", nombre: "📊 Cálculo I", creditos: 6, semestre: 2, requisitos: ["MA420"] },
  { codigo: "HU159", nombre: "📖 Seminario de Investigación Académica I", creditos: 1, semestre: 2, requisitos: ["HU625"] },
  { codigo: "HU612", nombre: "💡 Creatividad y Liderazgo", creditos: 3, semestre: 2 },
  { codigo: "CI556", nombre: "🗺️ Topografía", creditos: 4, semestre: 2, requisitos: ["CI161", "MA420"] },

  // 📘 SEMESTRE 3
  { codigo: "MA263", nombre: "📊 Cálculo II", creditos: 6, semestre: 3, requisitos: ["MA262"] },
  { codigo: "MA444", nombre: "📈 Estadística", creditos: 4, semestre: 3, requisitos: ["MA262"] },
  { codigo: "MA466", nombre: "🧲 Física I", creditos: 4, semestre: 3, requisitos: ["MA262"] },
  { codigo: "CI164", nombre: "🏗️ Materiales de Construcción", creditos: 4, semestre: 3, requisitos: ["CI709", "MA420", "MA465"] },
  { codigo: "HU548", nombre: "🧭 Ética y Ciudadanía", creditos: 2, semestre: 3 },

  // 📘 SEMESTRE 4
  { codigo: "MA264", nombre: "📐 Ecuaciones Diferenciales y Álgebra Lineal", creditos: 6, semestre: 4, requisitos: ["MA263"] },
  { codigo: "CI119", nombre: "⚖️ Estática", creditos: 4, semestre: 4, requisitos: ["MA466"] },
  { codigo: "MA462", nombre: "⚙️ Física II", creditos: 4, semestre: 4, requisitos: ["MA466"] },
  { codigo: "CI557", nombre: "🧱 Tecnología del Concreto", creditos: 3, semestre: 4, requisitos: ["CI164"] },
  { codigo: "ELECT1", nombre: "🔎 Electivo 1", creditos: 3, semestre: 4 },

  // 📘 SEMESTRE 5
  { codigo: "CI560", nombre: "🏗️ Construcción I", creditos: 4, semestre: 5, requisitos: ["MA444", "CI557"] },
  { codigo: "CI558", nombre: "🔄 Dinámica", creditos: 5, semestre: 5, requisitos: ["MA263", "CI119"] },
  { codigo: "CI559", nombre: "🚧 Ingeniería de Carreteras", creditos: 3, semestre: 5, requisitos: ["MA263", "CI556"] },

  // 📘 SEMESTRE 6
  { codigo: "CI168", nombre: "🧲 Mecánica de Materiales", creditos: 5, semestre: 6, requisitos: ["MA263", "CI119"] },
  { codigo: "CI561", nombre: "🌍 Mecánica de Suelos", creditos: 5, semestre: 6, requisitos: ["MA263", "CI119"] },
  { codigo: "CI706", nombre: "🧮 Análisis Estructural", creditos: 5, semestre: 6, requisitos: ["CI168"] },
  { codigo: "CI707", nombre: "🏗️ Ingeniería de Cimentaciones", creditos: 5, semestre: 6, requisitos: ["CI561"] },
  { codigo: "CI708", nombre: "📉 Análisis Numérico", creditos: 4, semestre: 6, requisitos: ["CI558", "MA264"] },
  { codigo: "CI565", nombre: "🌊 Mecánica de Fluidos", creditos: 5, semestre: 6, requisitos: ["CI558", "MA264"] },
  { codigo: "CI566", nombre: "🏙️ Modelación de Edificaciones", creditos: 2, semestre: 6, requisitos: ["CI560"] },

  // 📘 SEMESTRE 7
  { codigo: "CI568", nombre: "🏛️ Diseño en Concreto", creditos: 5, semestre: 7, requisitos: ["CI706"] },
  { codigo: "CI569", nombre: "🔩 Construcción II", creditos: 5, semestre: 7, requisitos: ["CI566"] },
  { codigo: "CI570", nombre: "💵 Costos y Presupuestos", creditos: 3, semestre: 7, requisitos: ["CI560"] },
  { codigo: "CI572", nombre: "🌀 Hidráulica de Canales", creditos: 4, semestre: 7, requisitos: ["CI565"] },
  { codigo: "CI571", nombre: "🚦 Ingeniería de Tránsito", creditos: 3, semestre: 7, requisitos: ["CI559"] },
  { codigo: "ELECT2", nombre: "🔎 Electivo 2", creditos: 3, semestre: 7 },

  // 📘 SEMESTRE 8
  { codigo: "CI575", nombre: "📋 Planificación y Control de Obras", creditos: 3, semestre: 8, requisitos: ["CI570"] },
  { codigo: "IN397", nombre: "📚 Investigación Académica II", creditos: 3, semestre: 8 },
  { codigo: "CI574", nombre: "🧠 Taller de Tesis", creditos: 3, semestre: 8 },
  { codigo: "ELECT3", nombre: "🔎 Electivo 3", creditos: 3, semestre: 8 },
  { codigo: "ELECT4", nombre: "🔎 Electivo 4", creditos: 3, semestre: 8 },
  { codigo: "ELECT5", nombre: "🔎 Electivo 5", creditos: 3, semestre: 8 },

  // 📘 SEMESTRE 9
  { codigo: "CI723", nombre: "📈 Gerencia de Proyectos", creditos: 3, semestre: 9, requisitos: ["CI570"] },
  { codigo: "CI576", nombre: "🏗️ Ingeniería Sismo-Resistente", creditos: 5, semestre: 9, requisitos: ["CI706"] },
  { codigo: "CI579", nombre: "🔧 Productividad en Obras", creditos: 3, semestre: 9, requisitos: ["CI570"] },
  { codigo: "CI578", nombre: "📝 Proyecto de Tesis I", creditos: 5, semestre: 9, requisitos: ["IN397", "CI574"] },
  { codigo: "ELECT6", nombre: "🔎 Electivo 6", creditos: 3, semestre: 9 },

  // 📘 SEMESTRE 10
  { codigo: "CI189", nombre: "📝 Proyecto de Tesis II", creditos: 5, semestre: 10, requisitos: ["CI578"] },
  { codigo: "ELECT7", nombre: "🔎 Electivo 7", creditos: 3, semestre: 10 },
  { codigo: "ELECT8", nombre: "🔎 Electivo 8", creditos: 3, semestre: 10 },
  { codigo: "ELECT9", nombre: "🔎 Electivo 9", creditos: 3, semestre: 10 },
  { codigo: "ELECT10", nombre: "🔎 Electivo 10", creditos: 3, semestre: 10 },
];

let ocultarAprobadas = false;

function guardarEstado() {
  localStorage.setItem("estadoMaterias", JSON.stringify(materias.map(m => m.aprobada || false)));
}

function cargarEstado() {
  const estado = JSON.parse(localStorage.getItem("estadoMaterias")) || [];
  materias.forEach((m, i) => m.aprobada = estado[i] || false);
}

function requisitosCumplidos(materia) {
  if (!materia.requisitos) return true;
  return materia.requisitos.every(cod => materias.find(m => m.codigo === cod && m.aprobada));
}

function render() {
  const container = document.getElementById("plan-estudios");
  container.innerHTML = "";
  let totalCreditos = 0;

  for (let semestre = 1; semestre <= 10; semestre++) {
    const grupo = materias.filter(m => m.semestre === semestre);
    const div = document.createElement("div");
    div.className = "semestre";
    const pendientes = grupo.filter(m => !m.aprobada).length;
    div.innerHTML = `<h2>📘 Semestre ${semestre} - Pendientes: ${pendientes}</h2>`;

    grupo.forEach((materia, i) => {
      const id = `materia-${materia.codigo}`;
      const wrapper = document.createElement("div");
      wrapper.className = "materia";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = materia.aprobada;
      checkbox.disabled = !requisitosCumplidos(materia);
      checkbox.addEventListener("change", () => {
        materia.aprobada = checkbox.checked;
        guardarEstado();
        render();
      });

      const label = document.createElement("label");
      label.htmlFor = id;
      label.textContent = `${materia.nombre} (${materia.codigo}) - ${materia.creditos} créditos`;
      if (ocultarAprobadas && materia.aprobada) label.style.display = "none";

      wrapper.appendChild(checkbox);
      wrapper.appendChild(label);
      div.appendChild(wrapper);

      if (materia.aprobada) totalCreditos += materia.creditos;
    });

    container.appendChild(div);
  }

  document.getElementById("creditos").innerText = totalCreditos;
}

function marcarTodo() {
  materias.forEach(m => m.aprobada = true);
  guardarEstado();
  render();
}

function reiniciar() {
  materias.forEach(m => m.aprobada = false);
  guardarEstado();
  render();
}

function toggleOcultar() {
  ocultarAprobadas = !ocultarAprobadas;
  render();
}

cargarEstado();
render();
</script>
</body>
</html>
