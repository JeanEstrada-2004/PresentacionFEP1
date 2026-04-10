export type SlideNavItem = {
  id: string
  label: string
  shortLabel: string
}

export const presentationData = {
  meta: {
    project: 'PresentacionFEP1',
    phase: 'Fase 1',
    title: 'Estructura Base de Presentación Web',
    subtitle:
      'Single-page presentation en React + Vite + TypeScript con placeholders listos para evolucionar hacia la PPT final.',
  },
  sequence: [
    { id: 'cover-slide', label: 'Portada', shortLabel: '01' },
    { id: 'agenda-slide', label: 'Contenido', shortLabel: '02' },
    { id: 'problem-context-slide', label: 'Situación problemática', shortLabel: '03' },
    { id: 'stakeholders-slide', label: 'Involucrados', shortLabel: '04' },
    { id: 'problem-tree-slide', label: 'Árbol de problemas', shortLabel: '05' },
    { id: 'objectives-slide', label: 'Árbol de objetivos', shortLabel: '06' },
    { id: 'alternatives-slide', label: 'Alternativas', shortLabel: '07' },
    { id: 'matrix-slide', label: 'Matriz MML', shortLabel: '08' },
    { id: 'conclusions-slide', label: 'Conclusiones', shortLabel: '09' },
    { id: 'closing-slide', label: 'Cierre', shortLabel: '10' },
  ] satisfies SlideNavItem[],
  cover: {
    id: 'cover-slide',
    eyebrow: 'Propuesta preliminar',
    title: 'PresentacionFEP1',
    description:
      'Base visual y técnica preparada para una exposición profesional, sin incorporar todavía el contenido definitivo de la PPT.',
    chips: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion for React'],
    notes: [
      'Narrativa estructurada en 10 diapositivas verticales.',
      'Diseño sobrio con fondo oscuro y acentos industriales.',
      'Preparado para insertar contenido académico definitivo en la siguiente fase.',
    ],
  },
  agenda: {
    id: 'agenda-slide',
    eyebrow: 'Mapa de navegación',
    title: 'Contenido provisional',
    description:
      'La secuencia conserva el orden típico de una presentación de formulación y evaluación, pero aún con texto de referencia.',
  },
  problemContext: {
    id: 'problem-context-slide',
    eyebrow: 'Diagnóstico inicial',
    title: 'Situación problemática',
    description:
      'Este bloque queda listo para reemplazarse por evidencia final, indicadores y citas del proyecto cuando la investigación esté cerrada.',
    cards: [
      {
        title: 'Contexto actual',
        text: 'Placeholder para resumir el escenario base, la necesidad detectada y el entorno operativo donde surge el problema.',
      },
      {
        title: 'Brecha identificada',
        text: 'Placeholder para detallar la diferencia entre la situación observada y el desempeño esperado del sistema o proceso.',
      },
      {
        title: 'Impacto preliminar',
        text: 'Placeholder para anticipar consecuencias sobre eficiencia, calidad del servicio, costos o experiencia del usuario final.',
      },
    ],
  },
  stakeholders: {
    id: 'stakeholders-slide',
    eyebrow: 'Mapa de actores',
    title: 'Involucrados',
    description:
      'Los grupos clave ya están organizados para sustituir fácilmente las descripciones genéricas por responsables y expectativas reales.',
    groups: [
      {
        role: 'Usuarios directos',
        summary: 'Placeholder para describir a quienes experimentan el problema y validarán la solución.',
      },
      {
        role: 'Equipo ejecutor',
        summary: 'Placeholder para responsables de implementación, operación y seguimiento del proyecto.',
      },
      {
        role: 'Tomadores de decisión',
        summary: 'Placeholder para autoridades, coordinación o patrocinio institucional vinculado al proyecto.',
      },
      {
        role: 'Aliados externos',
        summary: 'Placeholder para proveedores, socios técnicos o actores reguladores que condicionan la viabilidad.',
      },
    ],
  },
  problemTree: {
    id: 'problem-tree-slide',
    eyebrow: 'Relación causal',
    title: 'Árbol de problemas',
    description:
      'La estructura visual ya separa causas, problema central y efectos para cargar después el análisis definitivo.',
    causes: [
      'Placeholder para causas directas vinculadas a procesos, recursos o coordinación.',
      'Placeholder para causas indirectas relacionadas con capacidades, herramientas o información.',
      'Placeholder para restricciones de contexto institucional o técnico.',
    ],
    core: 'Placeholder para enunciar el problema central de forma precisa y verificable.',
    effects: [
      'Placeholder para efectos inmediatos sobre desempeño, tiempos o calidad.',
      'Placeholder para efectos acumulados en satisfacción, resultados o cobertura.',
      'Placeholder para impactos estratégicos si no se interviene.',
    ],
  },
  objectives: {
    id: 'objectives-slide',
    eyebrow: 'Transformación esperada',
    title: 'Árbol de objetivos',
    description:
      'Este espejo del árbol de problemas permite pasar luego del diagnóstico a la formulación de soluciones medibles.',
    means: [
      'Placeholder para medios directos orientados a corregir causas prioritarias.',
      'Placeholder para medios complementarios sobre capacidades, procesos o soporte.',
      'Placeholder para habilitadores de gobernanza, tecnología o seguimiento.',
    ],
    core: 'Placeholder para objetivo central redactado como resultado positivo verificable.',
    ends: [
      'Placeholder para beneficios inmediatos tras la implementación.',
      'Placeholder para mejoras sostenidas en desempeño o experiencia.',
      'Placeholder para aporte estratégico del proyecto a mediano plazo.',
    ],
  },
  alternatives: {
    id: 'alternatives-slide',
    eyebrow: 'Opciones de solución',
    title: 'Alternativas',
    description:
      'La comparación preliminar ya deja espacio para justificar técnica y económicamente la alternativa seleccionada.',
    options: [
      {
        name: 'Alternativa A',
        focus: 'Placeholder para un enfoque conservador con menor complejidad de adopción.',
      },
      {
        name: 'Alternativa B',
        focus: 'Placeholder para un enfoque intermedio que combine eficiencia y factibilidad.',
      },
      {
        name: 'Alternativa C',
        focus: 'Placeholder para un enfoque de mayor alcance con requerimientos más altos.',
      },
    ],
  },
  matrix: {
    id: 'matrix-slide',
    eyebrow: 'Marco lógico',
    title: 'Matriz MML',
    description:
      'La maqueta contempla la lectura vertical del marco lógico y será útil para incorporar indicadores, medios de verificación y supuestos.',
    rows: [
      {
        level: 'Fin',
        indicator: 'Placeholder para impacto esperado de largo plazo.',
        verification: 'Placeholder para fuente institucional o estadística.',
        assumption: 'Placeholder para condición externa relevante.',
      },
      {
        level: 'Propósito',
        indicator: 'Placeholder para cambio principal atribuible al proyecto.',
        verification: 'Placeholder para evidencia de logro o seguimiento.',
        assumption: 'Placeholder para continuidad operativa y apoyo.',
      },
      {
        level: 'Componentes',
        indicator: 'Placeholder para entregables verificables.',
        verification: 'Placeholder para actas, reportes o registros.',
        assumption: 'Placeholder para disponibilidad de recursos clave.',
      },
      {
        level: 'Actividades',
        indicator: 'Placeholder para ejecución de tareas críticas.',
        verification: 'Placeholder para cronogramas y control interno.',
        assumption: 'Placeholder para coordinación y tiempos previstos.',
      },
    ],
  },
  conclusions: {
    id: 'conclusions-slide',
    eyebrow: 'Síntesis ejecutiva',
    title: 'Conclusiones',
    description:
      'Se deja un cierre provisional que luego podrá sustituirse por hallazgos concretos, recomendaciones y decisión final.',
    bullets: [
      'Placeholder para resumir la lógica del problema y la pertinencia del proyecto.',
      'Placeholder para destacar la alternativa con mejor balance entre impacto y viabilidad.',
      'Placeholder para señalar condiciones necesarias para pasar a implementación.',
    ],
  },
  closing: {
    id: 'closing-slide',
    eyebrow: 'Próximo paso',
    title: 'Cierre',
    description:
      'La presentación queda lista para recibir el contenido definitivo de la PPT sin rehacer la estructura visual ni la navegación.',
    nextSteps: [
      'Reemplazar placeholders por contenido validado.',
      'Incorporar cuadros, métricas y diagramas finales.',
      'Ajustar tono narrativo y tiempos de exposición.',
    ],
  },
}
