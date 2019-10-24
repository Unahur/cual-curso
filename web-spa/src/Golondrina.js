

class Golondrina {
    constructor() { this._energia = 0 }
    energia() { return this._energia }
    comer(gramos) { this._energia += gramos * 4 }
    volar(kms) { this._energia -= kms + 10 }
    
    comer(gramos) { this._energia += gramos * 4 }
    
    darVueltaHabitual() {
        this.volar(20)
        this.comer(100)
        this.volar(20) 
      }
    
    this.handleChangeGramos = this.handleChangeGramos.bind(this);
    <input
      type="text"
      value={this.state.gramos}
      onChange={this.handleChangeGramos}
    />
    <button onClick={() => this.comer()}>Comer</button>
    comer() {
        const golondrina = this.state.golondrina;
        golondrina.comer(this.state.gramos);
        this.setState({ golondrina: golondrina });
    } 








}
  



  export default Golondrina;
