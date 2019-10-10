const React = require('react')
const ReactDOM = require('react-dom')

class FirstExample extends React.Component { 
    constructor(props) { 
        super(props); 
        // el state incluye los aspectos dinámicos de la página
        this.state = { texto: "Miren lo que va a pasar acá", tamanioFuente: "medium"}
    }

    render() {
        const theStyle = { fontSize: this.state.tamanioFuente }
        // esto es una expresión JSX, parece HTML pero no lo es
        return (
            <div>
                <p><span style={ theStyle }>
                    { this.state.texto }
                </span></p>
                <button onClick={() => this.changeTextAndFont()}>React magic</button>
            </div>
        )
    }

    // función que reacciona al evento de apretar el botón
    changeTextAndFont() { 
        this.setState({ texto: "Hello React", tamanioFuente: "25px" }) 
    }
}

export default FirstExample;