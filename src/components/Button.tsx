import { useState } from 'react'; //Importa o estado

// Cria as funcionalidades que podem ser utilizadas dentro da função abaixo, permitindo cores e textos dentro dos botões
interface ButtonProps{
    color: string;
    children: string;
}

// Função criada para renderizar o botão e criando o contador através do setCounter onde ele criar uma "nova" variavel substituindo a const
export function Button(props: ButtonProps){
    // o counter é para cada botão
    const [counter, setCounter] = useState(1)

    function increment(){
        setCounter(counter + 1)
    }

    return(
        <button type="button" style = {{backgroundColor: props.color}} onClick = {increment}>
            {props.children} <strong>{counter}</strong>
        </button>
    );
}
