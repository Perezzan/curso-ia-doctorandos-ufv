window.TRICKS=[
  [
    "Avanzado",
    "Instruye a pensar paso a paso",
    "Invoca el razonamiento secuencial de forma explícita. Forzar al modelo a resolver mediante eslabones lógicos reduce fallos de razonamiento y respuestas precipitadas.",
    "Tengo 5 manzanas. Me como 2. Compro un saco que trae el doble de las manzanas que me quedan. ¿Cuántas manzanas tengo al final? Dame solo la cifra.",
    "Tengo 5 manzanas. Me como 2. Compro un saco que trae el doble de las manzanas que me quedan. Resuelve el problema paso a paso detallando tu razonamiento lógico intermedio antes de dar la cifra final.",
    "Al obligar al modelo a generar transiciones intermedias, aumenta la probabilidad de que calcule mejor antes de emitir una respuesta final."
  ],
  [
    "Avanzado",
    "Usa ejemplos reales (Few-shot)",
    "Enseña el formato exacto de salida dándole 2 o 3 muestras resueltas antes de pedir la tarea nueva.",
    "Clasifica el sentimiento de este comentario como positivo o negativo: “El producto llegó un día tarde pero funciona bien”.",
    "Clasifica el sentimiento del comentario final basándote en estos ejemplos:\nComentario: “Me encanta, es genial.” → Sentimiento: Positivo\nComentario: “No sirve, es una estafa.” → Sentimiento: Negativo\nComentario: “El producto llegó un día tarde pero funciona bien.” → Sentimiento:",
    "Los ejemplos reducen la ambigüedad del formato y orientan al modelo por imitación contextual."
  ],
  [
    "Avanzado",
    "Adopta un rol experto",
    "Asignar un rol activa un marco de vocabulario, criterios y prioridades más adecuado a la tarea.",
    "Explícame este artículo.",
    "Actúa como profesor universitario experto en metodología de investigación biomédica. Analiza este artículo para estudiantes de doctorado, señalando objetivo, método, resultados, limitaciones y utilidad para una tesis.",
    "El rol no hace “mágico” al modelo, pero orienta el registro, los criterios de evaluación y el tipo de respuesta esperada."
  ],
  [
    "Avanzado",
    "Usa economía de incentivos",
    "Haz explícito qué resultado se valora: precisión, claridad, utilidad, ahorro de tiempo o ausencia de errores.",
    "Hazme un resumen.",
    "Resume este texto priorizando precisión, claridad y utilidad para decidir si merece la pena leer el artículo completo. Penaliza omisiones importantes y exageraciones.",
    "El modelo responde mejor cuando sabe qué debe optimizar y qué costes debe evitar."
  ],
  [
    "Estructura",
    "Usa delimitadores claros",
    "Separa instrucciones, texto fuente, ejemplos y restricciones con marcas visibles.",
    "Analiza este texto y dime qué mejorar. Texto: ...",
    "Analiza solo el texto delimitado entre triple comillas.\nTexto:\n\"\"\"\n[pegar texto]\n\"\"\"\nDevuelve: 1) problema principal, 2) mejora propuesta, 3) versión reescrita.",
    "Los delimitadores reducen confusiones entre lo que es instrucción y lo que es material de trabajo."
  ],
  [
    "Estructura",
    "Divide tareas complejas",
    "Convierte una tarea grande en pasos secuenciales para evitar respuestas superficiales.",
    "Ayúdame con este paper.",
    "Trabaja en tres pasos: primero resume el paper; después identifica limitaciones y sesgos; por último propón tres preguntas críticas para discutir en clase.",
    "Dividir permite controlar el proceso y detectar errores antes de llegar al producto final."
  ],
  [
    "Estructura",
    "Utiliza verbos imperativos",
    "Usa acciones precisas: compara, clasifica, reescribe, evalúa, sintetiza, diseña.",
    "Quiero algo sobre IA en investigación.",
    "Diseña una actividad de 15 minutos para que doctorandos comparen un prompt vago y un prompt bien estructurado sobre revisión bibliográfica.",
    "Los verbos concretos reducen la vaguedad y convierten la intención en una tarea ejecutable."
  ],
  [
    "Estructura",
    "Sé directo y sin rodeos",
    "Evita rodeos y contexto irrelevante. Da a la IA la tarea de forma limpia.",
    "A ver si puedes, si no es mucho lío, ayudarme con una cosa sobre un texto...",
    "Reescribe este párrafo para que sea más claro, académico y directo. Mantén el significado original.",
    "La claridad de la instrucción suele mejorar la claridad de la respuesta."
  ],
  [
    "Estructura",
    "Evita ruido o datos triviales",
    "No mezcles detalles que no afectan al resultado. Elimina información decorativa.",
    "Estoy en casa, son las 9, tengo prisa, este tema me cuesta... resume este paper.",
    "Resume este paper para una reunión de grupo. Enfócate en objetivo, método, hallazgos, limitaciones y dudas abiertas.",
    "Menos ruido significa menos oportunidades para que el modelo atienda a señales irrelevantes."
  ],
  [
    "Control",
    "Limita fuentes (Grounding)",
    "Indica de dónde puede sacar la información y qué no debe inventar.",
    "Dame referencias sobre este tema.",
    "Usa únicamente el documento proporcionado. No añadas referencias, autores ni datos externos. Si algo no aparece, escribe “no especificado”.",
    "El grounding mejora la trazabilidad y reduce alucinaciones en tareas académicas."
  ],
  [
    "Control",
    "Pide justificaciones directas",
    "Solicita razones breves vinculadas a evidencias o criterios.",
    "Dime si este texto está bien.",
    "Evalúa este texto y justifica cada mejora con una razón concreta: claridad, rigor, coherencia, precisión terminológica o tono académico.",
    "La justificación obliga a explicitar criterios y facilita revisar si la respuesta es sólida."
  ],
  [
    "Control",
    "Define restricciones negativas",
    "Aclara qué debe evitarse: inventar, exagerar, usar jerga, cambiar significado.",
    "Mejora este texto.",
    "Mejora este texto sin cambiar su significado, sin añadir datos nuevos, sin inventar referencias y sin usar un tono promocional.",
    "Las prohibiciones bien definidas reducen errores frecuentes y protegen la intención original."
  ],
  [
    "Control",
    "Anima a la IA a hacer preguntas",
    "Permite preguntas solo cuando falta información imprescindible.",
    "Prepárame una actividad.",
    "Diseña una actividad para clase. Si falta algún dato imprescindible, haz una sola pregunta. Si puedes avanzar con supuestos razonables, hazlo y decláralos.",
    "Evita tanto el bloqueo por falta de datos como las suposiciones ocultas."
  ],
  [
    "Control",
    "Usa instrucciones en positivo",
    "Formula lo que quieres que haga, no solo lo que debe evitar.",
    "No seas demasiado técnico.",
    "Explica el concepto con lenguaje claro, ejemplos concretos y nivel adecuado para estudiantes de ciencias de la salud.",
    "Las instrucciones positivas dan una dirección operativa, no solo una lista de restricciones."
  ],
  [
    "Control",
    "Define el formato de salida",
    "Indica estructura, extensión, apartados, tabla o estilo de entrega.",
    "Dame ideas para una diapositiva.",
    "Devuelve 5 ideas en formato tabla con columnas: título de diapositiva, mensaje central, ejemplo biomédico y riesgo que conviene mencionar.",
    "El formato facilita usar directamente la respuesta y comparar resultados."
  ],
  [
    "Tono",
    "Pide explícitamente imparcialidad",
    "Cuando haya debate, pide equilibrio y separación entre posiciones.",
    "Habla de los riesgos de la IA.",
    "Explica riesgos y beneficios de la IA generativa en investigación biomédica de forma equilibrada, separando evidencia, hipótesis y opinión.",
    "La imparcialidad explícita ayuda a evitar respuestas sesgadas o excesivamente entusiastas."
  ],
  [
    "Tono",
    "Especifica el público objetivo",
    "El mismo contenido cambia según audiencia: grado, doctorado, profesorado, clínicos, pacientes.",
    "Explica los LLMs.",
    "Explica qué es un LLM para doctorandos de ciencias de la salud, con un ejemplo de revisión bibliográfica y una advertencia sobre veracidad.",
    "La audiencia determina vocabulario, profundidad y ejemplos."
  ],
  [
    "Tono",
    "Explicaciones multinivel",
    "Pide varias capas: intuición, explicación técnica y aplicación.",
    "Explícame embeddings.",
    "Explica embeddings en tres niveles: 1) analogía sencilla, 2) explicación técnica breve, 3) aplicación en búsqueda bibliográfica biomédica.",
    "Las capas permiten enseñar a públicos heterogéneos sin perder rigor."
  ],
  [
    "Tono",
    "Evita muletillas de IA",
    "Pide un estilo natural y sin frases genéricas o grandilocuentes.",
    "Escribe una introducción sobre IA.",
    "Escribe una introducción breve, natural y académica sobre IA generativa. Evita frases tipo “en un mundo cada vez más digital” o “revoluciona por completo”.",
    "Controlar muletillas mejora credibilidad y reduce el tono artificial."
  ],
  [
    "Tono",
    "Alinea estilo y tono de marca",
    "Define cómo debe sonar el texto según contexto institucional o docente.",
    "Redacta un anuncio para el curso.",
    "Redacta un anuncio para un curso universitario UFV: tono claro, cercano, riguroso, sin marketing exagerado y orientado a utilidad práctica.",
    "La coherencia de tono ayuda a que los materiales parezcan parte del mismo curso y no piezas aisladas."
  ]
];
