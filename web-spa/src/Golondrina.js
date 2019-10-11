import React from 'react';

class Golondrina extends React.Component {


    constructor(props){
      
      super(props)
      this.state = {
         _energia:0,
         _gramos:0,
         _kms:0 
      };

      this.handleChangeGramos = this.handleChangeGramos.bind(this);
      this.handleChangeKms = this.handleChangeKms.bind(this);
      

    }

     handleChangeGramos(e){
          this.setState({_gramos:parseInt(e.target.value)})
                console.log(e.target.value)
     }

     handleChangeKms(e){

      this.setState({_kms:parseInt(e.target.value)})
      console.log(e.target.value)
     }
  

    energia() {
       return this.state._energia ;
      }


    comer(){ 

      this.setState({
        _energia:this.state._energia+this.state._gramos*4
      })        
    }


    volar() { 
     (this.state_energia>= (this.state._kms+10)) ?
      this.setState({
        _energia:this.state._energia-(this.state._kms+10)
      }): console.log('No puede volar por que no le alcanza la energia')
      }



    render(){

return(

   <div>

    <input
      type= "number"
      name="gramos"
      placeholder="Ingresar comida"
      value= { this.state._gramos }
      onChange= { this.handleChangeGramos } />


    <button 
      onClick= { ()=> this.comer() } > comer
    </button>

  <br/>
    <input 
     type= "number"
     placeholder="Ingresar kilometros que va a correr la golondrina"
     name="kms"
     value= { this.state._kms }
     onChange= { this.handleChangeKms } />


    <button 
     onClick= { ()=> this.volar() } >volar
    </button>
 
   </div>

);


    }


  }



  export default Golondrina;