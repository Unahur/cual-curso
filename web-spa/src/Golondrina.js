const React = require('react')
const ReactDOM = require('react-dom')  

class Golondrina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _energia : 0 ,
            _gramos : 0 ,
            _kms : 0
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type = "text"
                        value = {this.state.gramos}
                        onChange = {this.cambiarGramos}
                    />

                    <button onClick = {() => this.comer()}>Comer</button>
                </div>
                

            </div>
        )
    }




    energia() {
        return this._energia
    }

    comer(gramos) {
        this._energia += gramos * 4
        console.log(gramos);
    }

    cambiarGramos(e) {
        this.setState({_gramos: e.target.value});
        console.log(e.target.value);
    }

    volar(kms) {
        this._energia -= kms + 10
    }

}

export default Golondrina;