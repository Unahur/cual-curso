var url = 'http://localhost:3001/estudiantes';

  
    document.getElementById('buscarDni').addEventListener('click', function(evt){
                            console.log(" Entro al evento ");
                            evt.preventDefault();
                           
   
                            fetch(url, 
                                {
                                    method: 'GET' 
                                }
                                ).then(res => res.json())
                               .then(dato => formatearDato(dato)) 
                               .catch(error => console.error('Error:', error))
                               .then(response => console.log('Success:', response));
                               //.then(document.getElementById('buscarPersona').reset());
                              
                            });

                            function formatearDato(dato) {

                                var forDni = document.getElementById('dniIngresado').value;
                                
                                for(var i =0 ;i<dato.length;i++){ 
                                    if(forDni==dato[i].dni){
                                        document.getElementById('nombre_apellido').value=dato[i].nombre_apellido;
                                        document.getElementById('dni').value=dato[i].dni;
                                        document.getElementById('hiddenId').value=dato[i].id;
                                    }
                                }
                               
                            }

    document.getElementById('id01').addEventListener('click', function(evt){
            console.log(" cierro modal ");
            evt.preventDefault();
            close();
    });
                               


