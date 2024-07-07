# React CRUD Application
![iamgen](https://i.ibb.co/2cR3qL6/Fire-Shot-Capture-058-Vite-React-TS-localhost.png)

## Componentes

### Footer

- `Footer.tsx`: Componente simple que muestra un pie de página.

### Header

- `Header.tsx`: Componente que muestra un encabezado con un mensaje.
- `Header.css`: Estilos específicos para el componente `Header`.
- `index.ts`: Archivo de barril para exportar el componente `Header`.

### ListPerson

- `ListPerson.tsx`: Componente que itera y muestra una lista de personas utilizando el componente `Person`.
- `Person.tsx`: Componente que muestra información individual de una persona.
- `index.ts`: Archivo de barril para exportar el componente `ListPerson`.

### UserList

- `UserList.tsx`: Componente que itera y muestra una lista de usuarios utilizando el componente `User`.
- `User.tsx`: Componente que muestra información individual de un usuario.
- `index.ts`: Archivo de barril para exportar el componente `UserList`.

### Domain

- `Person.tsx`: Define la interfaz `PersonsProps` y exporta una lista de personas.
- `User.tsx`: Define la interfaz `UserProps` y exporta una lista de usuarios.

## Archivos Principales

- `App.tsx`: Componente principal que combina todos los componentes en una aplicación.
- `main.tsx`: Punto de entrada de la aplicación que renderiza el componente `App`.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **CSS**: Para los estilos del componente `Header`y 'User' .

## Instalación y Ejecución

1. Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd react-crud
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Ejecuta la aplicación:

    ```bash
    npm run dev
    ```

5. Abre tu navegador en `http://localhost:3000` para ver la aplicación en funcionamiento.