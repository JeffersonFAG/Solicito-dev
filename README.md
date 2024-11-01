# Proyecto de Visualización de Episodios, Locaciones y Personajes

Este proyecto permite a los usuarios explorar episodios, locaciones y personajes de una serie ficticia, con la capacidad de visualizar detalles de cada elemento, seleccionar favoritos, y almacenar sus favoritos en una base de datos SQL o NoSQL.

## Funcionalidades

1. **Visualización de Ventanas**:
   - Ventana para explorar episodios, locaciones y personajes.
   - Cada ventana incluye imágenes y detalles de cada elemento (al menos 3 datos adicionales).
2. **Detalles Individuales**:

   - Posibilidad de ver información detallada de cada episodio, locación o personaje en una vista separada.

3. **Favoritos Persistentes**:

   - Los usuarios pueden marcar como favoritos episodios, locaciones o personajes.
   - Los favoritos se mantienen durante toda la sesión de usuario usando Zustand.

4. **Guardado en Base de Datos**:
   - Opción para que los usuarios guarden todos sus favoritos en una base de datos de su elección, ya sea SQL o NoSQL.

## Tecnologías Utilizadas

- **Frontend**: Next, Zustand (para manejo de estado global),
- **Base de Datos**: MongoDB
- **Estilos**: TailwindCSS.
- **Fetch**: Librerías como Axios para las solicitudes HTTP.

## Instalación y Configuración

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/JeffersonFAG/Solicito-dev.git
   cd solicito-dev
   ```
2. **Instala las dependencias**
   ```bash
   npm install
   ```
3. **Inicia el proyecto y disfruta de la aventura**
   ```bash
   npm run dev
   ```
