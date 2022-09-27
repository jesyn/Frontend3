# Internationalization

Algo muy comun en varias paginas ademas del Theme mode, es la cantidad de lenguajes en la que se encuentra el sitio. Tendras que hacer el context de los idiomas en este proyecto

## IMPORTANTE
- Respetar el hilo de las tareas, empezar trabajando desde context.js, luego App.jsx y finalizando con los componentes para que sea mas facil de entender el flow

## Consigna
El proyecto cuenta con una carpeta con los `languages` que son los lenguajes a utilizar; ingles y español.

-- context.js 
- Deberas crear el context y completar el objeto `languages`

-- App.jsx
- Crear la funcion que modifique el valor del idioma por el contrario
- En el return, utilizar el LanguageContext con el provider

-- Navbar.jsx y Body.jsx
- Implementar el `useContext`
- Modificar los datos harcodeados por lo que corresponse(mirar el console.log para ver la key de cada elemento)


### Pasos para correr el proyecto

Relizar primero `npm install`
Relizar segundo `npm start`

### Versiones de NPM y NODE
En caso de que el proyecto no poder hacer `npm install`, actualizar a las versiones:
`NPM 7.19.1` o superior
`NODE 16.5.0` o superior.