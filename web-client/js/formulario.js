'use strict'

var inputs = document.getElementsByClassName('formularioInput');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijarLabel');
        }else{
            this.nextElementSibling.classList.remove('fijarLabel');
        }
    })
}