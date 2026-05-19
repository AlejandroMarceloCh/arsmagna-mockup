const INSTRUCTOR = {
  nombre: "Jimmy Marcelo",
  bio: "Profesor de matemáticas y química con más de 10 años preparando preuniversitarios para UNALM, UNMSM, UNA y Villarreal.",
  canal_youtube: "5.44K suscriptores · 196 videos",
};

const CURSOS = [
  {
    id: "analisis-mat-1",
    titulo: "Análisis Matemático I — Ciclo 2026",
    universidad: "UNALM",
    descripcion:
      "Curso completo de Análisis Matemático I. Capítulo I: Números reales, inecuaciones, valor absoluto. 55 clases en HD.",
    clases: 55,
    horas: 92,
    precio: 89,
    precio_antes: 149,
    nivel: "Básico-Intermedio",
    color_thumb: "from-orange-400 to-yellow-400",
    capitulos: [
      { titulo: "Capítulo I: Números reales", clases: 12 },
      { titulo: "Capítulo II: Inecuaciones", clases: 14 },
      { titulo: "Capítulo III: Valor absoluto", clases: 9 },
      { titulo: "Capítulo IV: Funciones", clases: 20 },
    ],
  },
  {
    id: "analisis-mat-2",
    titulo: "Análisis Matemático II",
    universidad: "UNALM",
    descripcion: "Aplicaciones de la derivada, integrales, ecuaciones paramétricas y más. 66 clases.",
    clases: 66,
    horas: 110,
    precio: 99,
    precio_antes: 159,
    nivel: "Intermedio",
    color_thumb: "from-green-400 to-emerald-500",
  },
  {
    id: "quimica-general",
    titulo: "Química General UNALM",
    universidad: "UNALM",
    descripcion:
      "Estequiometría, soluciones, equilibrio químico. Todo lo que necesitas para aprobar Química General.",
    clases: 35,
    horas: 58,
    precio: 69,
    precio_antes: 119,
    nivel: "Básico",
    color_thumb: "from-orange-500 to-red-500",
  },
  {
    id: "algebra-cepre-unalm",
    titulo: "Álgebra Cepre UNALM",
    universidad: "UNALM",
    descripcion:
      "Curso completo de álgebra para postulantes al CEPRE UNALM. 20 sesiones con ejercicios resueltos.",
    clases: 20,
    horas: 30,
    precio: 59,
    precio_antes: 99,
    nivel: "Básico",
    color_thumb: "from-yellow-400 to-orange-400",
  },
  {
    id: "clinicas-algebra-villarreal",
    titulo: "Clínicas de Álgebra — Villarreal",
    universidad: "UNFV",
    descripcion:
      "Clínicas de álgebra enfocadas en el examen de admisión de Villarreal. Cocientes notables, divisibilidad y más.",
    clases: 16,
    horas: 24,
    precio: 49,
    precio_antes: 89,
    nivel: "Básico",
    color_thumb: "from-red-500 to-pink-500",
  },
  {
    id: "cepre-una",
    titulo: "Cepre UNA Puno",
    universidad: "UNA",
    descripcion:
      "Preparación enfocada para el examen Cepre de la Universidad Nacional del Altiplano.",
    clases: 8,
    horas: 12,
    precio: 39,
    precio_antes: 79,
    nivel: "Básico",
    color_thumb: "from-blue-400 to-indigo-500",
  },
];

const TESTIMONIOS = [
  {
    nombre: "Carlos M.",
    universidad: "Ingresó a UNALM 2025-II",
    texto:
      "Las clases del profe Jimmy son las mejores. Entendí inecuaciones que no había logrado en 2 años de academia.",
  },
  {
    nombre: "Andrea L.",
    universidad: "Ingresó a UNMSM 2025-I",
    texto:
      "Compré el de Análisis Mat I y aprobé el examen. El temario está perfectamente ordenado.",
  },
  {
    nombre: "Diego R.",
    universidad: "Cachimbo UNALM",
    texto:
      "Mucho mejor que ir a una academia presencial. Veo las clases las veces que quiero.",
  },
];

const REVIEWS = [
  { nombre: "Renato P.", fecha: "hace 2 semanas", estrellas: 5, texto: "Excelente, el profe explica cada paso. Las inecuaciones nunca habían sido tan claras." },
  { nombre: "María G.", fecha: "hace 1 mes", estrellas: 5, texto: "El temario está ordenado y los PDFs ayudan muchísimo a repasar." },
  { nombre: "Luis A.", fecha: "hace 1 mes", estrellas: 4, texto: "Muy buen curso. Me hubiera gustado algunos ejercicios extra de funciones." },
  { nombre: "Camila S.", fecha: "hace 2 meses", estrellas: 5, texto: "Jimmy responde rápido en el chat. Vale cada sol." },
  { nombre: "Fernando R.", fecha: "hace 3 meses", estrellas: 5, texto: "Pasé el examen de admisión gracias a este curso. Gracias profe!" },
];

const APRENDERAS = [
  "Dominar el sistema de los números reales y sus propiedades",
  "Resolver inecuaciones lineales, cuadráticas y polinómicas",
  "Aplicar el concepto de valor absoluto en ecuaciones e inecuaciones",
  "Graficar y analizar funciones reales de variable real",
  "Identificar dominio, rango y composición de funciones",
  "Resolver problemas tipo examen de admisión UNALM",
  "Aplicar teoremas y axiomas de los números reales",
  "Construir gráficas con transformaciones (traslación, reflexión)",
];

// Estado dinámico del canal — en producción esto vendrá de la API de YouTube Live / backend
const EN_VIVO = false; // poné en true para ver el estado "clase en vivo"

const PROXIMA_LIVE = {
  fecha: "Martes 21 de mayo",
  hora: "19:00",
  titulo: "Resolución de inecuaciones — Cap I",
  curso: "Análisis Matemático I",
};

const ULTIMO_VIDEO = {
  titulo: "Clase 55. Análisis Matemático I",
  capitulo: "Capítulo I: Números reales",
  duracion: "5h 43min",
  publicado: "hace 3 semanas",
  vistas: "181",
  color_thumb: "from-orange-400 to-yellow-400",
  url: "https://www.youtube.com/@arsmagnaconjimmymarcelo/videos", // reemplazar por URL específica del video cuando se conozca
};

Object.assign(window, {
  INSTRUCTOR,
  CURSOS,
  TESTIMONIOS,
  REVIEWS,
  APRENDERAS,
  EN_VIVO,
  PROXIMA_LIVE,
  ULTIMO_VIDEO,
});
