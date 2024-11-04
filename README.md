#2da-Tarea-REACT-NEXT.JS 

## Descripción

Este es un proyecto de práctica donde estoy aprendiendo a crear componentes en React y a organizar una aplicación web. Creé una pequeña sección que muestra 4 tarjetas repetidas, basadas en una noticia sobre una figurita de Lionel Messi que supuestamente era imposible de conseguir durante el Mundial de Fútbol. A través de este ejemplo, abordo el mito de la "figurita difícil", explicando que en realidad se imprime la misma cantidad de todas las figuritas.

## Componentes

El proyecto consta de cuatro componentes principales:

1. **Button**: Un botón estilizado que acompaña cada tarjeta.
2. **Card**: Un componente que muestra una imagen, un título, un texto descriptivo y un botón.
3. **CardContainer**: Un contenedor que mapea y organiza las tarjetas en la página.
4. **Section**: Un componente que agrupa todas las tarjetas dentro de una sección.

### Diseño de las Tarjetas
Cada tarjeta contiene la imagen de la figurita de Messi y una descripción relacionada con el mito de la figurita difícil. Al ser cuatro tarjetas idénticas, quise representar visualmente este concepto.


## Desafíos Encontrados

1. **Uso de `map()` para renderizar componentes**: 
   Inicialmente, tuve problemas al mapear las tarjetas en el componente `CardContainer`, ya que no asigné una clave (`key`) adecuada a cada tarjeta. Esto provocaba advertencias en la consola de React. La clave debe ser única para que React pueda manejar eficientemente los elementos en la lista.
   
   **Solución**: Añadí una clave única usando el índice del array en el `map()`.

2. **Creación de componentes dinámicos y reutilizables**:
   Al principio, el componente `Card` tenía un contenido estático, lo que hacía que todas las tarjetas fueran idénticas. Aprendí a utilizar `props` para hacer el componente más flexible, permitiendo que las tarjetas tengan contenido dinámico.

## Enseñanzas Incorporadas

1. **La importancia de las `key` en React**:
   Comprendí que al mapear componentes, React requiere que cada componente tenga una `key` única. Esto optimiza la renderización y previene errores inesperados.

2. **Componentes Reutilizables con Props**:
   Aprendí a hacer mis componentes más flexibles y reutilizables mediante el uso de `props`. Esto hace que mi código sea más eficiente y limpio, evitando la duplicación de elementos estáticos.

## Desafíos

- Creación de componentes y estilos en CSS.

- Entender la estructura de componentes.

Puedes ver el proyecto en vivo aquí: [2da-Tarea-REACT-NEXT.JS](https://2da-tarea-react-next-js.vercel.app/)



