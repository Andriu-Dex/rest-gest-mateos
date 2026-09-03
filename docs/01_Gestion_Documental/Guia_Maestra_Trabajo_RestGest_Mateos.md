# Guía Maestra de Trabajo — RestGest Mateos
## Desarrollo de entregables documentales, coordinación del equipo y avance técnico del primer sprint

**Proyecto:** RestGest Mateos  
**Equipo:** Grupo 1  
**Fecha de referencia:** 02/09/2026  
**Propósito del documento:** Establecer una única guía de trabajo para que todos los integrantes del equipo desarrollen los entregables de las Fases 1 y 2 de forma coherente, verificable y compatible con la planificación oficial del proyecto, mientras el Director del Proyecto avanza la base técnica del software.

---

# 1. Principio general de trabajo

A partir de este punto el proyecto se trabajará en **dos frentes paralelos**:

1. **Frente documental:** cierre formal de los entregables de la Fase 1 y desarrollo progresivo de los entregables de la Fase 2.
2. **Frente técnico:** construcción del primer sprint técnico de RestGest Mateos, liderado por Steven.

Los documentos no deben elaborarse como tareas aisladas para cumplir una calificación. Cada entregable debe servir como **evidencia de una actividad real del proyecto** y, cuando corresponda, convertirse en insumo para las actividades posteriores.

Ejemplo:

**Levantamiento de información → análisis de procesos → requisitos → reglas de negocio → casos de uso → ERS → diseño → desarrollo.**

---

# 2. Fuentes oficiales del proyecto

Antes de redactar, diseñar o programar cualquier elemento, se debe comprobar que la información provenga de una fuente válida.

## 2.1 Jerarquía de fuentes

Se utilizará el siguiente orden de prioridad:

1. **Acta de Constitución vigente.**
2. **Cronograma oficial de Microsoft Project vigente.**
3. **Especificación de Requisitos de Software aprobada.**
4. **Entregables aprobados de actividades anteriores.**
5. **Actas y evidencias de reuniones con Restaurante Mateos.**
6. **Trello**, únicamente como herramienta de seguimiento y evidencia, no como fuente principal de requisitos.

---

# 3. Roles oficiales del equipo

Los roles se utilizarán tanto en los documentos como posteriormente en Microsoft Project, Trello y el desarrollo del software.

| Integrante | Roles principales | Responsabilidades |
|---|---|---|
| **Paredes Medina Steven Eduardo** | Director del Proyecto, Líder Técnico, Desarrollador del lado del servidor e Integrador | Dirección del proyecto, control de alcance, revisiones críticas, arquitectura, integración, decisiones técnicas, coordinación del equipo y desarrollo inicial del software. |
| **Llerena Garcés Gabriel Stefano** | Responsable de Base de Datos, Analista de Datos y Desarrollador del lado del servidor | Modelo de datos, requisitos relacionados con información, persistencia, consultas, estructura de datos, apoyo en arquitectura y ERS. |
| **Navarro Pazmiño Maybelline Estefania** | Responsable de Experiencia e Interfaz de Usuario y Desarrollo de Interfaz | Diagramación de procesos, casos de uso, flujos, prototipos, diseño visual, interfaz y documentación gráfica. |
| **Aguilar Guillen Erick Mateo** | Responsable de Aseguramiento de la Calidad, Operaciones de Desarrollo e Integraciones | Informes de levantamiento, reglas de negocio, planificación, revisión documental, criterios de calidad, seguridad, pruebas, integración y soporte de infraestructura. |

## 3.1 Regla de independencia

Siempre que sea posible:

- quien **elabora** un documento no debe ser la única persona que lo **revisa**;
- quien **revisa** debe comprobar contenido, consistencia y formato;
- Steven, como Director del Proyecto, deberá participar especialmente en la aprobación interna de los documentos que afecten alcance, requisitos, arquitectura, cronograma o presupuesto.

---

# 4. Distribución de entregables

# 4.1 Fase 1 — Planificación y Análisis de Requisitos

| EDT | Actividad | Entregable oficial | Elaboración principal | Revisión interna |
|---|---|---|---|---|
| **1.1** | Levantamiento detallado de información | Informe de levantamiento de información | **Erick** | Maybelline |
| **1.2** | Análisis de procesos actuales | Diagramas y descripción de los procesos actuales | **Maybelline** | Erick |
| **1.3** | Análisis preliminar de inventario, gastos y operación multisucursal | Modelo preliminar de inventario, gastos y operación por sucursal | **Gabriel** | Erick |
| **1.4** | Definición de requisitos funcionales y no funcionales | Catálogo de requisitos funcionales y no funcionales | **Gabriel** | Erick |
| **1.5** | Definición de reglas de negocio y alcance | Documento de reglas de negocio y línea base inicial de alcance | **Erick** | Steven |
| **1.6** | Elaboración de casos de uso y flujos | Modelo de casos de uso y flujos principales | **Maybelline** | Gabriel |
| **1.7** | Elaboración de la Especificación de Requisitos de Software | Especificación de Requisitos de Software | **Gabriel** | Erick + Steven |
| **1.8** | Planificación de cronograma, recursos, costos, calidad, riesgos y comunicaciones | Plan integrado de gestión del proyecto | **Erick** | Gabriel + Steven |
| **1.9** | Validación y cierre de la fase de requisitos | Requisitos y planificación inicial validados | **Steven** | Equipo completo |

---

# 4.2 Fase 2 — Diseño del Sistema

| EDT | Actividad | Entregable oficial | Elaboración principal | Revisión interna |
|---|---|---|---|---|
| **2.1** | Validación operativa con el propietario y actualización de procesos propuestos | Procesos propuestos actualizados con los hallazgos de la entrevista del 30/08/2026 | **Erick** | Steven |
| **2.2** | Diseño de arquitectura del sistema | Diagrama y especificación de arquitectura actualizados | **Gabriel + Steven** | Erick |
| **2.3** | Diseño del modelo de datos operativo | Modelo de datos para sucursales, mesas, sesiones, pedidos, comandas, pagos, menú, proteínas, compras, inventario, pérdidas, sobrantes, transferencias y gastos | **Gabriel** | Steven |
| **2.4** | Diseño de experiencia e interfaz de usuario | Bocetos y flujos de administrador, mesero, mesas, pedidos, comandas, inventario y reportes | **Maybelline** | Steven |
| **2.5** | Diseño de interfaz de programación, seguridad y permisos | Contratos de interfaz de programación y matriz de permisos por rol | **Erick + Steven** | Gabriel |
| **2.6** | Construcción del prototipo navegable actualizado | Prototipo navegable con flujo de mesas, pedidos, pagos, menú, inventario y administración | **Maybelline** | Steven |
| **2.7** | Validación funcional y técnica del diseño actualizado | Diseño funcional y técnico actualizado y validado | **Steven** | Equipo completo |

---

# 5. Orden de ejecución del trabajo documental

No se debe trabajar sin respetar dependencias.

## 5.1 Bloque A

Trabajar en paralelo:

- **1.1 — Erick**
- **1.2 — Maybelline**

Una vez revisados, sirven como base para el Bloque B.

## 5.2 Bloque B

Trabajar en paralelo:

- **1.3 — Gabriel**
- **1.4 — Gabriel**

Erick puede apoyar como revisor para evitar que Gabriel quede bloqueado por dudas documentales.

## 5.3 Bloque C

Trabajar en paralelo:

- **1.5 — Erick**
- **1.6 — Maybelline**

## 5.4 Bloque D

Trabajar en paralelo:

- **1.7 — Gabriel**
- **1.8 — Erick**

## 5.5 Cierre de Fase 1

Steven realiza:

- **1.9 — Validación y cierre**

No se considerará cerrada la fase mientras existan entregables faltantes o no revisados.

## 5.6 Avance de Fase 2

No es necesario esperar a terminar físicamente todos los PDFs de Fase 1 si la información que una actividad necesita ya se encuentra suficientemente estable.

Por ejemplo:

- Gabriel puede comenzar **2.3 Modelo de Datos** cuando los requisitos y reglas relevantes estén suficientemente definidos.
- Maybelline puede comenzar **2.4 Diseño de experiencia e interfaz** cuando los flujos principales estén definidos.
- Erick puede comenzar **2.1** usando la entrevista del 30/08 como fuente de validación.

---

# 6. Formato documental obligatorio

Todo entregable oficial debe partir de la **plantilla documental base utilizada en el proyecto**.

## 6.1 Encabezado

Debe contener:

- logotipo;
- nombre de Restaurante Mateos;
- nombre del proyecto RestGest Mateos;
- proceso/fase;
- título del documento;
- código documental;
- versión;
- fecha de elaboración;
- fecha de última revisión;
- número de página.

## 6.2 Fechas

**Trabajar con las fechas que estan en el cronograma de Microsoft Project.**

El encabezado debe indicar la fecha correspondiente al cronograma.

---

# 7. Codificación documental

La estructura base será:

**XX-YYY-ZZZ-001**

donde:

- **XX:** fase/proceso;
- **YYY:** actividad/subproceso;
- **ZZZ:** tipo de documento;
- **001:** secuencia del documento.

## 7.1 Códigos de fase recomendados

| Fase | Código |
|---|---|
| Planificación y Análisis de Requisitos | **PA** |
| Diseño del Sistema | **DS** |
| Desarrollo del Sistema | **DE** |
| Pruebas y Aseguramiento de la Calidad | **PC** |
| Implantación y Despliegue | **ID** |
| Capacitación, Documentación y Cierre | **CC** |

## 7.2 Tipos documentales frecuentes

| Tipo | Código recomendado |
|---|---|
| Informe | INF |
| Especificación | ESP |
| Plan | PLA |
| Registro | RGI |
| Manual | MAN |
| Cronograma | CRO |
| Procedimiento | PRO |

## 7.3 Ejemplos

**1.1 Informe de levantamiento**

`PA-LEV-INF-001`

**1.7 Especificación de Requisitos**

`PA-ERS-ESP-001`

**1.8 Plan integrado de gestión**

`PA-PPR-PLA-001`

**2.3 Modelo de datos**

Puede clasificarse como especificación/diseño según el formato que se decida formalmente.

> Ningún integrante debe inventar su propio código sin verificarlo con Steven.

---

# 8. Estructura general de los informes

Cuando el entregable sea un **informe**, utilizar como mínimo:

1. **Título**
2. **Introducción**
3. **Objetivos**
   - 1 objetivo general.
   - 3 objetivos específicos.
4. **Alcance**
5. **Definiciones**
6. **Responsabilidades**
7. **Normativa legal y técnica aplicable**
8. **Método / Políticas / Contenido**
9. **Descripción de actividades / Resultados**
10. **Conclusiones**
11. **Firmas de responsabilidad**
12. **Control de cambios**
13. **Anexos**

No todos los entregables son informes. La estructura debe adaptarse al tipo documental.

---

# 9. Cómo elaborar cada tipo de entregable

# 9.1 Informe de levantamiento

Debe responder:

- ¿qué información se necesitaba?
- ¿cómo fue recopilada?
- ¿quién proporcionó la información?
- ¿qué procesos se observaron?
- ¿qué problemas iniciales se identificaron?
- ¿qué información quedó pendiente de confirmación?
- ¿qué evidencia existe?

No debe convertirse todavía en una ERS.

---

# 9.2 Documento de análisis de procesos

Debe contener:

- proceso actual;
- actores;
- entradas;
- actividades;
- decisiones;
- salidas;
- problemas;
- puntos manuales;
- diagramas del proceso actual;
- observaciones.

Maybelline debe conservar también el archivo editable del diagrama.

---

# 9.3 Modelo preliminar operativo

Debe separar claramente:

- sucursales;
- ventas;
- inventario;
- proteínas;
- gastos;
- operación diaria;
- información consolidada;
- información por sucursal.

No debe diseñarse todavía una base de datos definitiva.

---

# 9.4 Catálogo de requisitos

Cada requisito debe tener identificador.

Ejemplo:

`RF-01 Registrar usuarios`

Campos recomendados:

- ID;
- nombre;
- descripción;
- actor;
- prioridad;
- fuente;
- criterio de aceptación;
- observaciones.

Para requisitos no funcionales:

`RNF-01 Seguridad de credenciales`

Evitar requisitos ambiguos como:

> “El sistema será rápido.”

Preferir:

> “Las operaciones comunes deberán responder dentro del criterio de rendimiento definido para el proyecto.”

---

# 9.5 Reglas de negocio y alcance

Debe separar:

## Incluido

Funciones que forman parte de la línea base.

## Excluido

Funciones explícitamente fuera del producto.

## Reglas

Ejemplo:

- una mesa puede tener una sesión activa;
- una sesión puede contener varios pedidos;
- el precio utilizado en una venta debe conservarse históricamente;
- una transferencia de inventario debe generar salida en origen y entrada en destino.

Las reglas nuevas provenientes del 30/08 que impliquen cambio del Acta deben quedar identificadas como sujetas al control de cambios hasta su aprobación.

---

# 9.6 Casos de uso y flujos

Cada caso de uso debe contener:

- identificador;
- nombre;
- actor;
- objetivo;
- precondiciones;
- flujo principal;
- flujos alternativos;
- postcondiciones;
- excepciones.

No hacer diagramas bonitos sin explicación textual.

---

# 9.7 Especificación de Requisitos de Software

La ERS debe consolidar y ordenar:

- contexto;
- alcance;
- actores;
- requisitos funcionales;
- requisitos no funcionales;
- reglas de negocio;
- restricciones;
- interfaces;
- seguridad;
- trazabilidad;
- criterios de aceptación;
- anexos.

No debe introducir requisitos que no existan en entregables anteriores o cambios autorizados.

---

# 9.8 Plan integrado de gestión

Debe consolidar:

- cronograma;
- EDT;
- actividades;
- dependencias;
- recursos;
- costos;
- calidad;
- riesgos;
- comunicaciones;
- adquisiciones;
- control de cambios;
- criterios de aceptación;
- cierre.

Microsoft Project es la fuente oficial de las fechas.

---

# 9.9 Validación y cierre de fase

El cierre debe comprobar:

- todos los entregables existen;
- los entregables fueron revisados;
- no existen contradicciones importantes;
- las evidencias están guardadas;
- los pendientes están registrados;
- los cambios están identificados;
- la siguiente fase puede iniciar.

---

# 10. Entregables de Diseño — Fase 2

# 10.1 Procesos propuestos

Comparar:

**Proceso actual → problema → proceso propuesto → mejora esperada.**

La entrevista del 30/08 debe utilizarse aquí como evidencia de validación.

---

# 10.2 Arquitectura

Debe incluir como mínimo:

- diagrama de arquitectura;
- frontend;
- backend;
- base de datos;
- almacenamiento;
- autenticación;
- infraestructura;
- servicios externos;
- comunicación entre componentes;
- decisiones técnicas;
- justificación del stack.

Stack actual:

- React;
- TypeScript;
- Vite;
- Material UI;
- NestJS;
- Node.js;
- PostgreSQL;
- Prisma;
- Docker;
- Nginx;
- GitHub;
- Cloudflare;
- Google Cloud Vision solo si posteriormente se mantiene OCR.

---

# 10.3 Modelo de datos

Debe cubrir, según el alcance actualizado:

- usuarios;
- roles;
- sucursales;
- mesas;
- sesiones de mesa;
- pedidos;
- detalles de pedido;
- comandas;
- pagos;
- productos;
- menú diario;
- proteínas;
- compras;
- inventario;
- movimientos;
- transferencias;
- pérdidas;
- sobrantes;
- gastos.

El modelo debe acompañarse de:

- diagrama entidad-relación;
- descripción de entidades;
- claves;
- relaciones;
- reglas de integridad;
- archivo editable.

---

# 10.4 Diseño de experiencia e interfaz

Debe incluir:

- mapa de pantallas;
- flujo administrador;
- flujo mesero;
- mesas;
- pedidos;
- pagos;
- menú;
- inventario;
- reportes;
- estados de error;
- navegación;
- prototipo.

No diseñar pantallas de funcionalidades fuera del alcance.

---

# 10.5 Interfaz de programación, seguridad y permisos

Debe incluir:

- operaciones principales;
- endpoints o contratos;
- autenticación;
- autorización;
- matriz de roles;
- permisos;
- errores;
- validaciones;
- tratamiento de credenciales;
- restricciones.

---

# 10.6 Prototipo navegable

Debe representar únicamente flujos aprobados.

No debe utilizar datos sensibles reales.

Debe incluir enlaces o archivos exportables como evidencia.

---

# 11. Evidencias obligatorias

Cada actividad terminada debe poseer evidencia.

La evidencia puede ser:

- PDF;
- archivo `.tex`;
- archivo editable del diagrama;
- archivo DBML;
- archivo Figma;
- captura;
- enlace GitHub;
- commit;
- prototipo;
- acta;
- registro de revisión;
- código fuente;
- informe.

Nunca declarar que existe un archivo si todavía no ha sido creado.

---

# 12. Estructura de carpetas recomendada

```text
RestGest-Mateos/
│
├── 01_Gestion_Documental/
│   ├── Fase_1_Planificacion_Requisitos/
│   │   ├── 1.1_Levantamiento/
│   │   ├── 1.2_Procesos_Actuales/
│   │   ├── 1.3_Analisis_Operativo/
│   │   ├── 1.4_Requisitos/
│   │   ├── 1.5_Reglas_Alcance/
│   │   ├── 1.6_Casos_Uso/
│   │   ├── 1.7_ERS/
│   │   ├── 1.8_Plan_Gestion/
│   │   └── 1.9_Cierre_Fase/
│   │
│   └── Fase_2_Diseno/
│       ├── 2.1_Procesos_Propuestos/
│       ├── 2.2_Arquitectura/
│       ├── 2.3_Modelo_Datos/
│       ├── 2.4_UX_UI/
│       ├── 2.5_API_Seguridad/
│       ├── 2.6_Prototipo/
│       └── 2.7_Validacion/
│
└── 02_Software/
    ├── frontend/
    ├── backend/
    └── infraestructura/
```

---

# 13. Archivos mínimos por entregable

Cada carpeta documental debería conservar:

```text
codigo_documento.tex
codigo_documento.pdf
README.md
evidencias/
fuentes_editables/
```

Ejemplo:

```text
1.1_Levantamiento/
├── PA-LEV-INF-001.tex
├── PA-LEV-INF-001.pdf
├── README.md
├── evidencias/
└── fuentes_editables/
```

---

# 14. Revisión de calidad antes de entregar

Cada responsable debe verificar:

## Contenido

- [ ] El contenido corresponde a la actividad.
- [ ] No hay requisitos inventados.
- [ ] La información coincide con las fuentes.
- [ ] Se explican decisiones y resultados.
- [ ] El entregable cumple su propósito.

## Procedimiento

- [ ] Se siguió el método adecuado.
- [ ] Las dependencias fueron respetadas.
- [ ] Se utilizaron los insumos correctos.
- [ ] Las conclusiones se sustentan en evidencia.

## Presentación

- [ ] Documento ordenado.
- [ ] Español formal.
- [ ] Sin términos ingleses innecesarios.
- [ ] Tablas legibles.
- [ ] Figuras numeradas.
- [ ] Fuentes editables conservadas.
- [ ] Sin Markdown incrustado dentro de comandos LaTeX.

## Cumplimiento

- [ ] Encabezado correcto.
- [ ] Código correcto.
- [ ] Versión correcta.
- [ ] Fechas reales.
- [ ] Objetivos completos.
- [ ] Alcance claro.
- [ ] Responsabilidades.
- [ ] Normativa.
- [ ] Método.
- [ ] Evidencias.
- [ ] Firmas o espacio correspondiente.
- [ ] Control de cambios cuando aplique.

---

# 15. Normas y referencias

Las normas deberán aplicarse cuando realmente correspondan y no simplemente mencionarse.

Referencias previstas:

- Ley Orgánica de Protección de Datos Personales del Ecuador.
- ISO 21502 para dirección de proyectos.
- ISO/IEC/IEEE 29148 para requisitos.
- ISO/IEC 25010 para calidad de producto software.
- ISO/IEC 27001 para seguridad de la información.
- ISO 9001 para gestión y control documental.
- OWASP para seguridad de aplicaciones web.

Cada documento debe explicar **por qué** utiliza la norma seleccionada y **cómo** se aplica al entregable.

---

# 16. Primer sprint técnico

## 16.1 Objetivo

Obtener una base ejecutable y reproducible de RestGest Mateos sin comprometer prematuramente reglas de negocio todavía sujetas a validación.

## 16.2 Actividades permitidas

- crear repositorios;
- inicializar React + TypeScript + Vite;
- inicializar NestJS;
- configurar PostgreSQL;
- configurar Prisma;
- preparar Docker;
- configurar variables de entorno;
- configurar estructura modular;
- configurar Git;
- definir convenciones;
- preparar integración continua;
- configurar calidad de código;
- preparar autenticación base;
- preparar roles base;
- documentar ejecución local.

## 16.3 Actividades que deben esperar validación

Evitar consolidar definitivamente:

- sesiones de mesa;
- pagos complejos;
- reglas de inventario;
- pérdidas y sobrantes;
- transferencias;
- lógica financiera;

hasta que los entregables **2.3 Modelo de Datos** y **2.5 Seguridad/Permisos** estén suficientemente validados.

---

# 17. Convenciones técnicas del desarrollo

## Repositorio

Cada cambio debe tener:

- rama;
- commit descriptivo;
- revisión cuando corresponda.

## Convención de ramas recomendada

```text
main
develop
feature/nombre-funcionalidad
fix/nombre-error
docs/nombre-documento
```

## Commits

Ejemplos:

```text
feat: inicializa autenticación base
docs: agrega informe de levantamiento
fix: corrige validación de roles
refactor: reorganiza módulos del backend
test: agrega pruebas de autenticación
```

---

# 18. Comunicación interna

Evitar decisiones importantes únicamente por mensajes informales.

Cuando se tome una decisión que afecte:

- alcance;
- requisito;
- arquitectura;
- cronograma;
- costo;
- riesgo;

debe quedar registrada.

Utilizar:

- acta;
- informe;
- registro de cambio;
- comentario documentado;
- Trello cuando esté configurado.

---

# 19. Reuniones con el cliente

La recomendación de trabajo es realizar revisiones periódicas aproximadamente cada dos semanas.

Cada reunión debe producir evidencia.

Registrar:

- fecha;
- participantes;
- objetivo;
- temas;
- decisiones;
- observaciones;
- cambios solicitados;
- responsables;
- próximas acciones.

No realizar cambios importantes únicamente de memoria.

---

# 20. Trello

- las listas representarán las fases;
- las tarjetas representarán actividades;
- cada tarjeta tendrá responsable;
- fechas;
- duración;
- predecesores;
- recursos;
- entregable;
- criterio de finalización;
- checklist;
- evidencias;
- estado.

Microsoft Project seguirá siendo la fuente oficial del cronograma.

---

# 22. Prioridad inmediata

## Prioridad 1 — cerrar Fase 1

Erick:
- 1.1
- 1.5
- 1.8

Gabriel:
- 1.3
- 1.4
- 1.7

Maybelline:
- 1.2
- 1.6

Steven:
- revisiones críticas;
- 1.9.

## Prioridad 2 — avanzar Fase 2

Erick:
- 2.1
- 2.5.

Gabriel:
- 2.2
- 2.3.

Maybelline:
- 2.4
- 2.6.

Steven:
- coordinación;
- arquitectura;
- integración;
- 2.7.

---

# 23. Definición de “terminado”

Una actividad documental solo se considera **terminada** cuando:

1. el contenido está completo;
2. el responsable realizó autocontrol;
3. existe archivo editable;
4. existe PDF o formato final;
5. otro integrante realizó revisión;
6. las observaciones fueron corregidas;
7. las evidencias están guardadas;
8. el Director del Proyecto validó cuando corresponde.

Una actividad de desarrollo solo se considera **terminada** cuando:

1. cumple el requisito;
2. compila/ejecuta;
3. fue probada;
4. no rompe funcionalidades existentes;
5. está versionada;
6. tiene evidencia;
7. está documentada cuando corresponda.

---

# 24. Regla final para todo el equipo

> **No inventar, no cambiar fechas, no modificar el alcance silenciosamente, no cerrar tareas sin evidencia y no crear documentos desconectados de la planificación.**

Cada entregable debe responder a tres preguntas:

1. **¿Qué actividad demuestra que fue realizada?**
2. **¿Qué evidencia permite verificarlo?**
3. **¿Qué actividad siguiente utiliza este resultado?**

Si el documento no responde claramente a estas tres preguntas, debe revisarse antes de considerarlo terminado.

---

# 25. Flujo resumido del equipo

```text
PLANIFICACIÓN OFICIAL
        ↓
ACTIVIDAD EDT
        ↓
RESPONSABLE
        ↓
TRABAJO / ANÁLISIS / DISEÑO
        ↓
ENTREGABLE EDITABLE
        ↓
REVISIÓN INTERNA
        ↓
CORRECCIÓN
        ↓
ENTREGABLE FINAL + EVIDENCIA
        ↓
VALIDACIÓN
        ↓
SIGUIENTE ACTIVIDAD
```

---

**Documento interno de coordinación del equipo RestGest Mateos.**
