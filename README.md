## Metagrammers: Forjando el Nuevo Mundo

### Descripción del Proyecto
$\color{#D29922}\textsf{\Large\&#x26A0;\kern{0.2cm}\normalsize  Avance del Proyecto}$ 
   ```bash
    // El proyecto se encuentra actualmente al 10% de su meta final
    // Fatan apartados como:
    // * Implementación Responsive
    // * Completar funciones Auth
    // * Agregar el Ranking
    // * Agregar el Lore
    // * Información del Autor
    // * Conversión de Metakey a Metafragment
    // * Otras funcionalidades propias de la naturaleza del proyecto y metas, iré actualizando de manera constante.
```

**Metagrammers** es una plataforma innovadora que fusiona la emoción de los desafíos de programación con la temática del metaverso. Este proyecto ha sido desarrollado para la hackathon con el objetivo de proporcionar a los programadores un entorno interactivo y didáctico donde puedan poner a prueba y mejorar sus habilidades de codificación mientras exploran un universo digital lleno de posibilidades.

### Funcionalidades Principales

1. **Generador de Retos de Programación**:
   - Utilizando la API de OpenAI, Metagrammers genera retos de programación personalizados en distintos lenguajes y niveles de dificultad. Los usuarios pueden especificar el nivel de complejidad y el lenguaje de programación deseado.
   - Los retos son formateados en HTML para una presentación clara y atractiva.

2. **Evaluación de Soluciones**:
   - Los usuarios pueden ingresar sus soluciones a los retos generados y recibir una evaluación detallada. La API de OpenAI analiza el código proporcionado, señala errores y sugiere mejoras.
   
3. **Interfaz de Usuario Intuitiva**:
   - La aplicación cuenta con una interfaz amigable y fácil de usar, desarrollada con Next.js, que guía a los usuarios a través del proceso de generación y evaluación de retos.
   - Mensajes motivacionales y temáticos que inspiran a los programadores a alcanzar nuevos niveles de maestría.

### Cómo Funciona

1. **Generación de Retos**:
   - El usuario selecciona el nivel de dificultad (0-10) y el lenguaje de programación.
   - La plataforma envía una solicitud a la API de OpenAI con estos parámetros.
   - La API genera un reto de programación claro y específico, formateado en HTML para una mejor presentación.

2. **Ingreso y Evaluación de Soluciones**:
   - El usuario escribe su solución en el área de texto proporcionada.
   - Al enviar la solución, la plataforma envía la solución y el reto original a la API de OpenAI para su evaluación.
   - La API devuelve una evaluación detallada que se muestra al usuario.

### Tecnologías Utilizadas

- **Next.js**: Framework de React para el desarrollo de la interfaz de usuario.
- **Vercel AI SDK**: Utilizada para la generación y evaluación de retos de programación.
- **Firebase**: Utilizada para la autenticación de usuario.
- **MongoDB**: Base de Datos NoSQL utilizada para la persistencia de los datos.
- **Vercel AI SDK**: Plataforma de despliegue que facilita el hosting y la integración continua.

### Cómo Ejecutar el Proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/metagrammers.git
   cd metagrammers

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn

3. Configura las variables de entorno:
   - Crea un archivo `.env.local` en la raíz del proyecto.
   - Añade tu clave API de OpenAI
   - Añade la configuracion de la cuenta de servicio de Firebase
   - Añade tu API KEY de MongoDB
   - Añade tu API URI de MongoDB

```env
OPENAI_API_KEY= ""
NEXT_PUBLIC_FIREBASE_API_KEY = ""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = ""
NEXT_PUBLIC_FIREBASE_PROJECT_ID = ""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = ""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = ""
NEXT_PUBLIC_FIREBASE_APP_ID = ""
NEXT_PUBLIC_MONGODB_API_URI = ""
NEXT_PUBLIC_MONGODB_API_KEY = ""
```

4. Ejecuta el proyecto en modo de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev

5. Abre [http://localhost:8000](http://localhost:8000) en tu navegador para ver la aplicación.

### Próximos Pasos

6. **Faltantes del Proyecto**
   - Validaciones de seguridad en la autenticación
   - Componente del Login
   - Lógica de la evaluación del reto
   - Componente de la evaluación del reto
   - Menú del lore
   - Menú del autor
   - Información del proyecto


7. **Lore y Aspecto Didáctico**

**Metagrammers** no es solo una plataforma de retos de programación, sino una experiencia inmersiva en el metaverso. Los usuarios, conocidos como Metagrammers, lucharán a través de desafíos de programación para obtener una Metakey. Esta Metakey les permitirá reclamar un Metafragment, un fragmento del metaverso con valor real, incluso monetario, en la vida real.

### Metakey y Metafragment

- **Metakey**: Cada reto superado otorga a los usuarios una Metakey. La Metakey es un símbolo de logro y maestría en programación, representando la capacidad de resolver problemas complejos y avanzar en el metaverso.
  
- **Metafragment**: Con la Metakey, los usuarios pueden reclamar un Metafragment. Los Metafragments son piezas valiosas del metaverso, cada una con su propia historia y características únicas. Además de su valor intrínseco en el juego, los Metafragments tienen valor monetario real, incentivando a los usuarios a participar y mejorar continuamente.

Este enfoque no solo hace que el aprendizaje de la programación sea divertido y motivador, sino que también proporciona recompensas tangibles que pueden tener un impacto significativo fuera del mundo digital.



### Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la plataforma o encuentras algún problema, no dudes en abrir un issue o enviar un pull request.
