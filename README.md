# Prueba Técnica Frontend LinkTic

1. [Descripcion general](#descripcion-general)
2. [Instalación y Ejecución](#instalación-y-ejecución)
3. [Justificación Técnica](#justificación-técnica)

### Descripcion general
Este proyecto tiene como objetivo evaluar habilidades técnicas por medio de la maquetación de una interfaz grafica que consuma una API pública, de tal forma que se presenten los datos de una forma clara y organizada, se  apliquen buenas prácticas de desarrollo frontend, se implemente un diseño responsivo y se asegure de ofrecer una documentación completa que ayude a resolver las diferentes dudas que se generen al respecto de como instalar y utilizar la solución para quien este interesado en hacerlo.

### Instalación y Ejecución

Es necesario como requisito tener instalado node.js para el control e instalacion de librerias de `NPM` utilizadas dentro de la aplicacion, teniendo en cuenta lo anterior se puede instalar el repositoriode la siguiente manera: 

1. Clona el repositorio: `git clone <URL>`
2. Navega al directorio: `cd <proyecto>`
3. Instala dependencias: `npm install`
4. Inicia el proyecto `npm run dev`
4. Ejecuta los Test unitarios  `npm run test:cov`


## Justificación Técnica

En esta sección se explican las decisiones técnicas clave tomadas durante el desarrollo del proyecto, basadas en las herramientas y tecnologías seleccionadas.

### Elección de Tecnologías

- **React.js**: Se elige React como framework predeterminado debido a su gran flexibilidad al momento de generar proyectos. Al estar basado en JavaScript, cuenta con una alta tasa de documentación técnica y librerías asociadas que facilitan en gran medida la maquetación de vistas funcionales mientras garantizan poder aplicar diseños UX de forma apropiada.

- **React.js**: Como lenguaje de programacion exige una tasa elevada de estricto tipamiento de variables  y por ende demanada implementar una estrcuturacion de logica robusta que por consecuencia asegura una escalabilidad, mantenibilidad y legibilidad de codigo para cualquier proyecto en donde se emplee.

- **Vite**: Se elige Vite como herramienta de compilación debido a su garantía para otorgar tiempos de carga veloces y superiores al momento de compilar y ejecutar proyectos basados en frameworks tales como React, los cuales pueden llegar a demandar una alta tasa de recursos, los cuales deben ser gestionados de manera eficiente.

- **Material UI**: La librería de componentes basados en diseño de Material Design de Google por excelencia, empleada y respaldada por grandes aplicaciones como lo son Facebook y Netflix, ofrece una inmensa variedad de componentes de código abierto, los cuales destacan por su altísima funcionalidad a la hora de manejar datos y al mismo tiempo mantener diseños UX de altísima calidad.

- **Axios**: Respecto al manejo de solicitudes HTTP a servidores y consumo de API, se decide utilizar Axios debido a su simplicidad a la hora de manejar los diferentes tipos de métodos HTTP, la facilidad con la cual se pueden realizar servicios de consulta y la alta escalabilidad que ofrece para generar funciones dinámicas y globales que respalden el clean code en un proyecto lo convierten en la opción más fiable.

- **Jest**: Para garantizar la calidad del código y facilitar la detección temprana de errores, se integró **Jest** para realizar testing. Jest es una herramienta eficiente para realizar pruebas en proyectos de JavaScript y su gran ventaja radica en el amplio repertorio de metodos ofrecidos para realizar operaciones de tipo de comportamientos esperados en una funcion o componente.

- **React Testing Library**: Libreria soportada por el equipo de desarrollo de Facebook ofrece las herramientas adecuadas para relizar pruebas unitarioas o de integracion principalmente para los componentes establecidos en un proyecto robusto. Al ser creada para una aplicacion tan grande como lo es Facebook grantiza una alta taza de funcionalidad e ejectuabilidad. 

- **React Router DOM**: Para la navegación entre diferentes vistas dentro de la aplicación, se elige **React Router DOM**, libreria popular y ampliamente empleada basada enteramente en react js como en otras anteriores librerias empleadas ofrece una gran facilidad de uso y empleo al momento de configurar la navegacion entre paginas de un proyecto ademas de tener una documentacion extensa y clara acerca de su utilizacion.

