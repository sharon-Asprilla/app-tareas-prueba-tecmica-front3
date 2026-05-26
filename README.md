# Gestor de Tareas Diarias

## url de la pagina renderizada en VERCEL 
app-tareas-beta.vercel.app

## Descripción
Gestor de Tareas es una aplicación web de una sola página  diseñada para optimizar la gestión de tareas dentro de un equipo de trabajo. La plataforma permite a los usuarios registrarse bajo un departamento específico, organizar sus pendientes y realizar un seguimiento detallado del progreso de cada tarea a través de diversos estados.

## Características Principales
- **Ingreso Seguro (Simulado)**: Registro de usuario y departamento con persistencia en LocalStorage y protección de rutas.
- **Gestión CRUD Completa**: Creación, lectura, actualización y eliminación de tareas vinculadas a una API externa.
- **Interfaz Moderna y Minimalista**: Diseño limpio de dos columnas, responsivo y con una estética profesional.
- **Filtrado Inteligente**: Capacidad de filtrar tareas por estado (Pendiente, En Progreso, Completada) en tiempo real.
- **Feedback al Usuario**: Implementación de estados de carga, alertas de confirmación con SweetAlert2 y manejo de errores.

## Stack Tecnológico
- **Frontend**: React.js (Vite)
- **Enrutamiento**: React Router DOM
- **Peticiones HTTP**: Axios
- **Estilos**: CSS Puro (Custom Properties, Flexbox, Grid y Media Queries)
- **Componentes de UI**: SweetAlert2 (Alertas dinámicas)
- **Backend Simulado**: MockAPI.io

## Servicio de API Mockeada
La aplicación consume los recursos desde el siguiente servicio externo:
**Endpoint Base**:
- https://6a1470676c7db8aac0548757.mockapi.io/Tareas
- https://6a1470676c7db8aac0548757.mockapi.io/Usuarios

## Instrucciones de Instalación y Ejecución Local

Siga estos pasos para poner en marcha el proyecto en su entorno local:

### 1. Prerrequisitos
Es necesario tener instalado [Node.js](https://nodejs.org/) (se recomienda versión LTS) y un gestor de paquetes como npm.

### 2. Clonar el repositorio
Desde su terminal, ejecute:
```bash
git clone https://github.com/tu-usuario/app-tareas-prueba-tecnica-front3.git
```
*(Sustituya la URL por el enlace real de su repositorio)*

### 3. Instalar dependencias
Navegue a la carpeta del proyecto e instale los módulos necesarios:

npm install

### 4. Ejecutar el servidor de desarrollo
Para lanzar la aplicación con recarga en caliente (HMR), ejecute:
```bash
npm run dev
```

### 5. Visualizar la aplicación
Abra su navegador y acceda a la dirección indicada en la terminal (usualmente `http://localhost:5173`).

---
**Nota**: Esta aplicación fue desarrollada como parte de una prueba técnica para evaluar habilidades en desarrollo frontend con React.
