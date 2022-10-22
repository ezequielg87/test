// 1)

var numLlamadas = 0;
function calculaBinomio(a, b) {
  {
    var cuadradoDeA = a * a;
    var cuadradoDeB = b * b;
    numLlamadas++;
  }
  return cuadradoDeA + cuadradoDeB + 2 * a * b;
}

alert(calculaBinomio(2, 3)); // 25
alert(calculaBinomio(4, 5)); // 81
alert(numLlamadas); // 2
alert(typeof cuadradoDeA); // undefined

// en el ultimo caso, la respuesta del alert se da por que la variable "cuadradoDeA" 
// no existe fuera del ambito de la funcion calculaBinomio y por eso su valor es indefinido

// 2)

var s2 = 'Hello World!';
alert(s2.toUpperCase()); //HELLO WORLD!
alert(s2.toLowerCase()); //hello world!

// 3)

const mostrarPorConsola = () => {
  console.log('Openbravo!!!');
};

const mostrar = function (param) {
  param();
};

mostrar(mostrarPorConsola);

// 4)

const diagonal = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (i !== j && matriz[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

//  REACT EXERCISES

// 1)1. What are props in a component? Select all the options that apply.
// Are the component parameters
// It is a mechanism to put data inside the component

// 2)What is a component?
// A function or class that returns an element

// 3)Which of these component types are valid?
// Class Component
// Component Function

// 4) What is the state of a component?

// en primer lugar es un objeto, y despues podriamos definir al estado de un componente
// como informacion o datos dentro del mismo componente que se inicializa con determinado valor
// y que se mostrara en pantalla, dichos valores pueden ser modificados.

//5)What are the component lifecycle methods?

// son metedos nativos de react, que permiten realizar diferentes acciones durante el ciclo de vida de un componenete,
// montaje, actualizacion y desmontaje, cada ciclo de vida posee diferentes posiblidades, hoy en dia
// utilizando react con funciones, estos metodos fueron reemplazados con hooks.

// 6) How would you set the state of a component?
// esta respuesta depende que tipo de componente esta usando, si es de clases, inicializo mi estado
// con una propiedad en el constructor del mismo, este luego se modificara con el motodo setState()
// si es un componente de funcion, utlizando un hook, useState, esta mismo con una sintaxis mas reducida y amistosa
// const [isAuth, setIsAuth] = useState(true)--- el esta se inicializa en false, donde isAuth es donde almaceno
// mi estado y setIsAuth es la funcion que me permite modificarla.

// 7) Which of these implementations change the state of a component?
// this.setState({ value: "my value" })

// 8) What happens when we change the state of a component?
// en lineas generales y por interacion del usuario o eventos que se desencadenan en el componente
// cuando el estado cambia, se renderiza de nuevo.

// 9)Write a component that renders a list of elements, given a prop that
// contains an array of objects in the following form: { firstname: "demo",
// lastname: "demo", dni: 1234 }

const App = () => {
  const elements = [
    { firstName: 'demo', lastName: 'demo', dni: 1234 },
    { firstName: 'demo', lastName: 'demo', dni: 1234 },
    { firstName: 'demo', lastName: 'demo', dni: 1234 },
    { firstName: 'demo', lastName: 'demo', dni: 1234 },
  ];
  return (
    <div>
      <h5>Actividad 9</h5>
      {elements.map((element) => {
        return (
          <div>
            <h5>{element.firstName}</h5>
            <h6>{element.lastName}</h6>
            <p>{element.dni}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;

// 10. Write a component that receives a prop called "data", and renders an H1
// with the content of data.

const App2 = ({ data }) => {
    return (
      <div>
        <h1>{data}</h1>
      </div>
    );
  };
  
  export default App2;

//   11) How do you import Javascript modules installed with NPM or YARN?     
// import name from 'node_modules/name';

// 12) How do I import the following component, considering that it is inside a filein the same directory, called MyComponent.js?
// import MyComponent from './MyComponent';

// 13) What is the error in the following component?
// el Error o al menos lo que va a provocar que no se vea nada en pantalla, es que falta el return
// sin eso no se va romper pero la pantalla se queda en blanco

// 14) Explain, in your own words, what this component does.
// este componente de clase muestra un numero y un boton, el numero es 1, cada vez que se aprieta el boton
// se suma uno y se muestra

// 15) What errors do you see in the following component?
// tanto el estado como el metodo que lo modifica, en un class component deben estar ubicados en el constructor de la clase.

// 16) How would you make a Rest API call from JavaScript?
// Utilizaria fetch :
// fetch('http://example.com/example.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// o utilizaria axios, libreria para hacer llamados ala api
// const instance = axios.create();

// 17) What is the use of the useEffect hook?
// este Hook nos permite realizar efectos secundarios en nuestro componente, como por ejemplo, obtencios de informacion para 
// renderizar, esta posee dos argumentos, uno es una funcion, el segundo es una dependencia y es opcional, este ultimo es un array
// si esta vacio se renderizara solo una vez, sino lo hara cada vez que se actualize la dependencia.

// 18)
// un hook seria de manera simplificada una funcion y una como tal para resolver la actividad

import { useState } from "react";

function useCounter(value) {
  const [count, setCount] = useState(0); //estado local que vaya guardando el valor del contador 

  const handleCount = () => { //funcion que permita realizar la suma de la cantidad especificada
    setCount((prevCount) => prevCount + value);
  };

  return { count, handleCount }; //lo que mi hook devuelve
}

export { useCounter };


//fuera de mi hook puedo importarlo y llamarlo

import { useCounter } from "./useCounter";

const { count, handleCount } = useCounter(5)

//puedo usar el count para mostrar el numero y el metodo para sumar





