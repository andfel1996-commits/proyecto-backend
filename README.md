# TP Integrador JS - Andrés Sánchez

## Descripción del proyecto
Este proyecto ha evolucionado de una persistencia simple en JSON a una aplicación robusta con arquitectura MVC, utilizando Node.js, Express y Sequelize ORM. Actualmente, la aplicación gestiona usuarios de forma persistente en una base de datos PostgreSQL, permitiendo un ciclo CRUD completo con validaciones de seguridad y paginación.

Este entregable corresponde a la finalización del Módulo 7, cumpliendo con los requisitos de integración de bases de datos relacionales y manejo avanzado de rutas.

---

## Estructura del proyecto (Patrón MVC)

proyecto-backend/
├── config/          # Configuración de conexión a PostgreSQL (Sequelize)
├── controllers/     # Lógica de negocio (userController.js)
├── middlewares/     # Manejo de errores y funciones asíncronas
├── models/          # Modelos de datos (User.js con Sequelize)
├── public/          # Archivos estáticos (CSS, Imágenes)
├── routes/          # Definición de rutas (index.js)
├── views/           # Motor de plantillas EJS (Vistas y Partials)
├── .env             # Variables de entorno (Seguridad - No se sube al repo)
├── app.js           # Punto de entrada de la aplicación
└── README.md        # Documentación del proyecto

🛠️ Tecnologías y Herramientas
Backend: Node.js, Express.

Base de Datos: PostgreSQL.

ORM: Sequelize.

Vistas: EJS & Bootstrap 5.

Pruebas: Postman.

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone <https://github.com/andfel1996-commits/proyecto-backend.git>
cd proyecto-backend

2. Instalar dependencias:

npm install

3. Configurar variables de entorno: Crea un archivo llamado .env en la raíz del proyecto y completa los siguientes datos con tus credenciales de PostgreSQL:
PORT=3000
DB_NAME=nombre_de_tu_db
DB_USER=postgres
DB_PASS=tu_contraseña
DB_HOST=127.0.0.1
DB_PORT=5432

4. Sincronizar base de datos e iniciar: Si tienes nodemon instalado para desarrollo:

npm run dev

O para ejecución estándar:

npm start

5. Acceder a la aplicación: Abre tu navegador en http://localhost:3000



http://localhost:3000

✅ Funcionalidades Implementadas
CRUD Completo: Creación, Lectura, Edición y Eliminación de usuarios directamente en PostgreSQL.

Paginación (Paso 2): Implementación de limit y offset en la consulta de usuarios para optimizar la carga.

Validación de Identidad (Paso 3): El sistema verifica la existencia de un ID antes de proceder con la eliminación o edición, devolviendo un error 404 personalizado si no existe.

Arquitectura MVC: Separación clara entre modelos, controladores y rutas para un código escalable.

Pruebas en Postman: Endpoints testeados para envío de datos mediante x-www-form-urlencoded.

🧠 Reflexiones Técnicas
Transición a ORM: Sustituir la lógica de archivos JSON por Sequelize facilitó enormemente la integridad de los datos y la escalabilidad del proyecto.

Manejo de Errores: La creación de un errorHandler centralizado permitió capturar excepciones de la base de datos (como campos nulos o IDs inexistentes) de forma profesional.

Desafíos: Superé obstáculos en la configuración de promesas asíncronas y la sincronización de modelos con PostgreSQL, logrando una conexión estable y segura.

Próximo paso (Módulo 8): Implementar seguridad con JWT y encriptación de contraseñas