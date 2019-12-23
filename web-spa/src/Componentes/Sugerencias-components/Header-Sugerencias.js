import React, { Component} from 'react';
import Switch from '../../Switch-Theme';
import { TiThMenuOutline as Menu} from 'react-icons/ti';
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: "initial"
        }
        this.setDisplay = this.setDisplay.bind(this)
    }
    setDisplay(){
        if(this.state.display === "initial"){
            this.setState({display:"none"})
        }else{
            this.setState({display:"initial"})
        }
    }
    render() {
        //esta clase recibe el metodo cambio de render, el cual modifica el estado de la clase app, haciendo que se cambie lo que se esta renderizando.
        return (
            <div>
                <div className="contenedor-logo">
                    <div className="row-fluid">
                        <img className="logo-Unahur" type="img" src={this.props.logo}></img>
                    </div>
                </div>
                <div className="contenedor-header">
                    <header className="header">
                        <ul className="contenedor-header-buttoms header-buttom">
                            <button className="buttom-menu" onClick={()=>{this.setDisplay()}}><Menu/></button>
                            <Switch/>
                            <li className="header-center-buttom" style={{display:this.state.display}}><a>Inscripcion a Materias</a></li>
                            <li className="header-center-buttom" style={{display:this.state.display}}><a>Inscripcion a Examenes</a></li>
                            <li className="header-center-buttom" style={{display:this.state.display}}><a>Reportes</a></li>
                            <li className="header-center-buttom" style={{display:this.state.display}}><a>Tramites</a></li>
                            <li className="header-center-buttom" style={{display:this.state.display}}><a>Cursos</a></li>
                        </ul>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;