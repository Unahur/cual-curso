const React = require('react')
const ReactDOM = require('react-dom')

class Equipo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { mostrarFormacion: false}
    }

    render() {
        return (
            <div>
                {this.props.nombre}
                {this.props.dt}
                {this.state.mostrarFormacion ? this.props.formacion : null}
                <button onClick = {() => this.cambiarEstado()}>Mostrar la formacion del Equipo</button>
            </div>
        )
    }

    cambiarEstado() {
        this.setState({mostrarFormacion: !this.state.mostrarFormacion})
    }
}

export default Equipo