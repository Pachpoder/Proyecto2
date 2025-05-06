# ToDo List - React + Redux Toolkit 

Aplicación web desarrollada con **React** y **Redux Toolkit** para gestionar tareas personales de forma dinámica.  
Forma parte de la **Actividad Unidad II** y se enfoca únicamente en el manejo de estados usando Redux.

---

## Tecnologías utilizadas

- React 19
- Redux Toolkit
- React Bootstrap
- Bootstrap 5
- CSS3

---

## Funcionalidades

- Agregar tareas personales con nombre, descripción y fecha límite.
- Eliminar tareas desde el listado.
- Manejo de estado centralizado usando Redux Toolkit.
- Sin persistencia de datos (al recargar, las tareas desaparecen).
- Interfaz responsive y amigable para desktop y móvil.

---

## Instalación del proyecto localmente

### 1. Clona el repositorio:

```bash
git clone https://github.com/Pachpoder/Proyecto2.git
```

### 2. Entra en la carpeta del proyecto:

```bash
cd Proyecto2
```

### 3. Instala las dependencias:

```bash
npm install
```

### 4. Corre la aplicación:

```bash
npm start
```

### 5. Abre tu navegador en:

```bash
http://localhost:3000
```

---

## Estructura del proyecto

```bash
/src
  /components
    /Cards
      - CustomCard.jsx
      - CustomCard.css
    /Forms
      - AddGoalForm.jsx
    /Navbar
      - Navbar.jsx
  /redux
    - store.js
    - taskSlice.js
  - App.js
  - index.js
  - index.css
```

---

## Redux Toolkit: organización

- `taskSlice.js`: Contiene el slice con los reducers `addTask` y `removeTask`.
- `store.js`: Configuración del store global.
- `App.js`: Usa `useSelector` y `useDispatch` para conectarse al estado global.

---

## Notas adicionales

- Esta versión **no utiliza base de datos ni backend**.
- Todos los estilos están aplicados mediante archivos `.css`, sin estilos inline.
- La lógica cumple con los requerimientos de la **Actividad Unidad II**.

---

# ¡Proyecto listo para entrega!
