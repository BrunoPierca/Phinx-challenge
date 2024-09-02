# Pokémon Battle

Este proyecto es una aplicación de batalla de Pokémon que consta de un backend NestJS y un frontend React.

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)
- CLI de TypeORM para ejecutar las migraciones

## Configuración del proyecto

1. Clona este repositorio:
   ```
   git clone https://github.com/BrunoPierca/Phinx-challenge.git
   cd Phinx-challenge
   ```

2. Instala las dependencias del backend:
   ```
   cd backend-challenge
   npm install
   ```

3. Instala las dependencias del frontend:
   ```
   cd ../frontend-challenge
   npm install
   ```

## Ejecución del proyecto

1. Inicia el backend:
   ```
   cd backend-challenge
   npm run start:dev
   ```
   El servidor backend estará disponible en `http://localhost:5000`.

2. En una nueva terminal, inicia el frontend:
   ```
   cd frontend-challenge
   npm start
   ```
   La aplicación frontend estará disponible en `http://localhost:5173`.

## Documentación de la API

- El backend tiene disponible la documentacion de sus endpoints y DTOs en `http://localhost:5000/docs`

## Uso de la aplicación

1. Abre tu navegador y ve a `http://localhost:5173`.
2. Verás una lista de Pokémon disponibles.
3. Selecciona un Pokémon haciendo clic en el mismo.
4. Haz clic en "Start Battle" para iniciar una batalla contra un oponente aleatorio.
5. Se mostrará el resultado de la batalla.


## Despliegue de la aplicación
- La aplicación está configurada para que se ejecute en Docker.
- Para desplegar la aplicación, ejecuta el siguiente comando:
  ```
  docker-compose up
  ```
- El backend estará disponible en `http://localhost:5000` con la migración ya ejecutada.
- El frontend estará disponible en `http://localhost:3000`.

## Notas adicionales

- La base de datos SQLite se crea automáticamente en el directorio `backend-challenge` cuando se inicia el servidor por primera vez.
- Asegúrate de que los puertos 5000 y 5173 (o 3000 en el caso de usar docker) estén disponibles en tu sistema.