# TP Integrador JS - Andrés Sánchez

## Descripción del proyecto

Este proyecto es una aplicación web funcional desarrollada con Node.js y Express, que permite gestionar usuarios y datos persistidos en archivos planos JSON. Se utiliza el motor de plantillas EJS para servir contenido web dinámico y Bootstrap para el diseño visual.

Este es el entregable correspondiente a la **Parte 1 – Módulo 6** del curso, donde se implementa la estructura inicial del servidor, rutas básicas, vistas y persistencia simple.  
Se agrega la conexión a una base de datos "PostgreSQL".

---

## Estructura del proyecto

/proyecto-backend  
  |-- /data  
      |-- users.json            # Archivo para persistencia de usuarios  
  |-- /public  
      |-- /images  
          |-- logo.png          # Logo de la aplicación  
  |-- /routes  
      |-- users.js              # Rutas para gestión de usuarios  
  |-- /views  
      |-- index.ejs             # Vista principal  
      |-- users.ejs             # Vista para listar usuarios  
  |-- app.js                   # Archivo principal del servidor  
  |-- package.json             # Dependencias y scripts  
  |-- README.md                # Este archivo  

---

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone <https://github.com/andfel1996-commits/proyecto-backend.git>


2. Instalar dependencias:

npm install

3. Ejecutar el servidor en modo desarrollo (requiere nodemon):

npm run dev

4. O ejecutar el servidor en modo producción:

npm start

5. Abrir en el navegador:

http://localhost:3000

Funcionalidades implementadas
Servidor Express configurado para servir contenido dinámico con EJS.
Rutas básicas para listar y agregar usuarios.
Persistencia de datos en archivos JSON (data/users.json).
Barra de navegación con logo y enlaces usando Bootstrap.
Formularios para agregar usuarios con validación básica.

Reflexiones técnicas
Aprendí a configurar un servidor Express con motor de vistas EJS y servir archivos estáticos.
La persistencia con archivos planos es sencilla pero limitada; para proyectos futuros planeo integrar una base de datos relacional con ORM.
La integración de Bootstrap facilita el diseño responsivo y profesional.
Encontré desafíos en la gestión de rutas y manejo de datos, que resolví con pruebas y lectura de documentación.
Próximos pasos: implementar ORM, autenticación JWT y API RESTful en los siguientes módulos.