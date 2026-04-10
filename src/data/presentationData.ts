export type SlideNavItem = {
  id: string
  label: string
  shortLabel: string
}

type AgendaStep = {
  title: string
  detail: string
}

type ContextCard = {
  title: string
  signal: string
  points: string[]
}

type StakeholderGroup = {
  title: string
  stance: string
  actors: string[]
}

type RankedAlternative = {
  code: 'A' | 'B' | 'C'
  title: string
  score: number
  selected?: boolean
  summary: string
}

type WeightedCriterion = {
  name: string
  weight: number
}

type MatrixItem = {
  title: string
  text: string
}

type ConclusionBlock = {
  title: string
  text: string
}

export const presentationData = {
  meta: {
    project: 'PresentacionFEP1',
    phase: 'Fase 2',
    title:
      'Implementación de una planta de producción de concentrados de hierro para la industria del acero',
    subtitle: 'Primer entregable · Metodología de Marco Lógico',
    group: 'Grupo 04 · Sección 1',
  },
  sequence: [
    { id: 'cover-slide', label: 'Portada', shortLabel: '01' },
    { id: 'agenda-slide', label: 'Ruta metodológica', shortLabel: '02' },
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
    eyebrow: 'Propuesta de valorización industrial',
    title:
      'Implementación de una planta de producción de concentrados de hierro para la industria del acero',
    subtitle: 'Primer entregable · Metodología de Marco Lógico',
    group: 'Grupo 04 · Sección 1',
    chips: [
      'Pampa del Pongo',
      'Caravelí, Arequipa',
      'Industria siderúrgica',
      'Marco Lógico',
    ],
    pillars: [
      'Diagnóstico de la brecha de valorización industrial del mineral de hierro.',
      'Comparación estructurada de alternativas de intervención.',
      'Selección de la opción con mayor coherencia técnica y estratégica.',
    ],
  },
  agenda: {
    id: 'agenda-slide',
    eyebrow: 'Secuencia metodológica',
    title: 'Ruta de análisis del entregable',
    description:
      'La presentación organiza el diagnóstico, la comparación de alternativas y la síntesis ejecutiva bajo la lógica del Marco Lógico.',
    purpose:
      'Evaluar si la propuesta de una planta de concentrados encaja como la alternativa más inteligente frente a la situación problemática estudiada.',
    steps: [
      {
        title: 'Diagnóstico de la situación actual',
        detail: 'Lectura internacional, nacional y local del problema.',
      },
      {
        title: 'Análisis de los involucrados',
        detail: 'Mapa de actores que ganan, apoyan, observan o resisten.',
      },
      {
        title: 'Análisis de problemas y objetivos',
        detail: 'Transformación del problema central en lógica de solución.',
      },
      {
        title: 'Análisis de alternativas',
        detail: 'Evaluación comparativa con criterios ponderados.',
      },
      {
        title: 'Matriz MML y conclusiones',
        detail: 'Síntesis ejecutiva de propósito, arranque y supuestos.',
      },
    ] satisfies AgendaStep[],
  },
  problemContext: {
    id: 'problem-context-slide',
    eyebrow: 'Situación problemática',
    title: 'Reducida valorización industrial del mineral de hierro',
    description:
      'El mineral de hierro es la fuente primaria de abastecimiento para la industria siderúrgica y su valorización depende del grado de transformación previo a la cadena del acero.',
    cards: [
      {
        title: 'Internacional',
        signal: 'Mercado siderúrgico exigente',
        points: [
          'La industria del acero demanda concentrados con calidad estable, menor impureza y especificaciones cada vez más controladas.',
          'Los países con mayor inserción siderúrgica capturan valor al beneficiar el mineral antes de su ingreso a procesos posteriores.',
          'La competencia no está solo en extraer mineral, sino en entregarlo con mayor valor metalúrgico.',
        ],
      },
      {
        title: 'Perú',
        signal: 'Brecha de transformación',
        points: [
          'El país cuenta con recursos de hierro, pero todavía presenta una limitada transformación industrial previa a la comercialización.',
          'La baja agregación de valor reduce encadenamientos productivos y limita la captura de rentas industriales.',
          'La brecha se refleja en menor aprovechamiento de calidad, estandarización y capacidad instalada de beneficio.',
        ],
      },
      {
        title: 'Pampa del Pongo',
        signal: 'Oportunidad estratégica',
        points: [
          'La zona concentra un recurso con relevancia geológica y potencial para sostener una operación de beneficio de mayor escala.',
          'Sin una planta de concentrados, el potencial industrial del yacimiento permanece subutilizado.',
          'La situación impacta directamente en la capacidad de generar valor local e impulsar desarrollo industrial regional.',
        ],
      },
    ] satisfies ContextCard[],
  },
  stakeholders: {
    id: 'stakeholders-slide',
    eyebrow: 'Mapa de actores',
    title: 'Involucrados del proyecto',
    description:
      'Los actores se agrupan por el tipo de impacto esperado frente a una planta de concentrados instalada en la provincia de Caravelí.',
    groups: [
      {
        title: 'Beneficiarios directos',
        stance: 'Ganan con la implementación',
        actors: [
          'Operador del proyecto minero-metalúrgico',
          'Industria del acero que demanda concentrados estables',
          'Trabajadores especializados vinculados a operación y mantenimiento',
        ],
      },
      {
        title: 'Beneficiarios indirectos',
        stance: 'Reciben efectos encadenados',
        actors: [
          'Proveedores de servicios industriales y logísticos',
          'Comercio y servicios locales de Caravelí',
          'Gobierno regional y municipal por mayor dinamismo económico',
        ],
      },
      {
        title: 'Neutrales',
        stance: 'Observan y condicionan',
        actors: [
          'Entidades académicas y centros de investigación',
          'Instituciones financieras y aseguradoras',
          'Actores del ecosistema industrial no directamente integrados',
        ],
      },
      {
        title: 'Oponentes',
        stance: 'Pueden resistir o cuestionar',
        actors: [
          'Grupos con preocupación por impactos ambientales y territoriales',
          'Actores sociales desconfiados del cumplimiento regulatorio',
          'Competidores o intereses que favorecen mantener baja transformación local',
        ],
      },
    ] satisfies StakeholderGroup[],
  },
  problemTree: {
    id: 'problem-tree-slide',
    eyebrow: 'Relación causal',
    title: 'Árbol de problemas',
    description:
      'La lógica causal muestra cómo limitaciones técnicas, operativas y regulatorias alimentan un problema central de baja valorización industrial.',
    effects: [
      'Menor captura de valor en la cadena del acero.',
      'Escaso desarrollo industrial local y regional.',
      'Aprovechamiento limitado del potencial de Pampa del Pongo.',
    ],
    core:
      'Reducida valorización industrial del mineral de hierro en la zona de Pampa del Pongo, provincia de Caravelí, región Arequipa',
    causes: [
      'Insuficiente capacidad instalada para el beneficio del mineral.',
      'Variabilidad en calidad y especificaciones del mineral de hierro.',
      'Pérdidas de valor por escaso acondicionamiento y preconcentración.',
      'Débil estandarización del proceso para una oferta industrial competitiva.',
      'Exigencias regulatorias y de permisos que condicionan la viabilidad de la intervención.',
    ],
  },
  objectives: {
    id: 'objectives-slide',
    eyebrow: 'Transformación esperada',
    title: 'Árbol de objetivos',
    description:
      'La propuesta transforma el problema central en una meta de valorización industrial respaldada por medios operativos concretos y un alcance definido.',
    ends: [
      'Mayor captura de valor en la cadena del acero.',
      'Impulso al desarrollo industrial en Caravelí y Arequipa.',
      'Mejor aprovechamiento económico del recurso de Pampa del Pongo.',
    ],
    core:
      'Incrementar la valorización industrial del mineral de hierro en la zona de Pampa del Pongo, provincia de Caravelí, región Arequipa',
    means: [
      'Instalar capacidad de beneficio orientada a producir concentrados para la industria del acero.',
      'Mejorar calidad, control metalúrgico y estabilidad de especificaciones.',
      'Reducir pérdidas mediante acondicionamiento y procesamiento más eficiente.',
      'Estandarizar la operación para sostener una oferta industrial confiable.',
    ],
    outOfScope: [
      'Integración completa hacia producción final de acero.',
      'Desarrollo integral de infraestructura externa ajena al proyecto base.',
      'Expansión de líneas industriales que exceden el alcance del primer entregable.',
    ],
  },
  alternatives: {
    id: 'alternatives-slide',
    eyebrow: 'Comparación de opciones',
    title: 'Análisis de alternativas',
    description:
      'La decisión se apoya en criterios ponderados que priorizan impacto sobre la valorización industrial, coherencia causal y sostenibilidad operativa.',
    winner: {
      code: 'A',
      title:
        'Implementación de una planta de producción de concentrados de hierro para la industria del acero',
      score: 4.7,
      summary:
        'Es la alternativa con mayor capacidad para atacar las causas críticas del proceso de beneficio y traducirlas en valor industrial sostenible.',
    },
    options: [
      {
        code: 'A',
        title:
          'Implementación de una planta de producción de concentrados de hierro para la industria del acero',
        score: 4.7,
        selected: true,
        summary:
          'Integra capacidad instalada, control de calidad y una salida industrial directamente alineada con la demanda siderúrgica.',
      },
      {
        code: 'B',
        title:
          'Sistema modular de preconcentración magnética y acondicionamiento del mineral de hierro',
        score: 3.98,
        summary:
          'Mejora el acondicionamiento inicial, pero su alcance es menor frente a la necesidad integral de valorización industrial.',
      },
      {
        code: 'C',
        title:
          'Programa integrado de optimización metalúrgica y aseguramiento de calidad',
        score: 3.28,
        summary:
          'Fortalece control y estandarización, aunque sin resolver por completo la restricción de capacidad de transformación.',
      },
    ] satisfies RankedAlternative[],
    criteria: [
      {
        name: 'Aumento de la valorización industrial del mineral de hierro',
        weight: 28,
      },
      {
        name: 'Correspondencia con las causas críticas del proceso de beneficio',
        weight: 24,
      },
      {
        name: 'Efecto sobre el desarrollo industrial local y los involucrados del proyecto',
        weight: 18,
      },
      {
        name: 'Facilidad de implementación y estabilidad operativa del proceso de beneficio',
        weight: 16,
      },
      {
        name: 'Sostenibilidad de la intervención en el tiempo',
        weight: 14,
      },
    ] satisfies WeightedCriterion[],
  },
  matrix: {
    id: 'matrix-slide',
    eyebrow: 'Síntesis MML',
    title: 'Resumen ejecutivo de la matriz',
    description:
      'La estructura del marco lógico conecta propósito industrial, componente productivo, actividades de arranque y condiciones externas clave.',
    summary: [
      {
        title: 'Fin',
        text: 'Promover el desarrollo industrial en la zona de Pampa del Pongo, provincia de Caravelí, región Arequipa.',
      },
      {
        title: 'Propósito',
        text: 'Incrementar la valorización industrial del mineral de hierro en la zona de Pampa del Pongo, provincia de Caravelí, región Arequipa.',
      },
      {
        title: 'Componente',
        text: 'Producir concentrados de hierro para la industria de acero en una planta instalada en la provincia de Caravelí, región de Arequipa.',
      },
    ] satisfies MatrixItem[],
    activities: [
      'Estudio de mercado del concentrado de hierro',
      'Pruebas metalúrgicas del mineral de hierro',
      'Ingeniería básica y de detalle',
      'Autorizaciones y permisos',
    ],
    assumptions: [
      'Demanda industrial sostenida por concentrados de hierro con calidad controlada.',
      'Disponibilidad de permisos y cumplimiento regulatorio dentro de los plazos previstos.',
      'Viabilidad técnica y económica confirmada por pruebas e ingeniería.',
    ],
  },
  conclusions: {
    id: 'conclusions-slide',
    eyebrow: 'Síntesis ejecutiva',
    title: 'Conclusiones',
    description:
      'La evaluación converge en una solución que responde a la problemática industrial con mayor consistencia estratégica y operativa.',
    blocks: [
      {
        title: 'Alternativa más inteligente',
        text: 'La planta de concentrados fue la opción mejor alineada con el problema de valorización industrial.',
      },
      {
        title: 'Sustento multinivel',
        text: 'Existe justificación internacional, nacional y local para intervenir sobre la transformación del mineral de hierro.',
      },
      {
        title: 'Causas críticas claras',
        text: 'El análisis identificó restricciones en capacidad instalada, calidad, pérdidas, estandarización y viabilidad regulatoria.',
      },
      {
        title: 'Actores identificados',
        text: 'Los involucrados fueron mapeados según beneficio, neutralidad u oposición frente al proyecto.',
      },
      {
        title: 'Resultado comparativo',
        text: 'La alternativa A obtuvo el mayor puntaje con 4.70, superando a B con 3.98 y a C con 3.28.',
      },
      {
        title: 'Dirección del proyecto',
        text: 'La propuesta se orienta a incrementar la valorización industrial y a promover desarrollo industrial en Pampa del Pongo.',
      },
    ] satisfies ConclusionBlock[],
  },
  closing: {
    id: 'closing-slide',
    eyebrow: 'Presentación concluida',
    title: 'Gracias',
    subtitle:
      'Implementación de una planta de producción de concentrados de hierro para la industria del acero',
    footer: 'Grupo 04 · Sección 1 · Primer entregable',
  },
}
