// variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const formularioEnviar =  document.getElementById('enviar-mail');

const btnEnviar = document.getElementById('enviar');

const resetBtnC = document.getElementById('resetBtn');




// event Listener

eventListeners();

function eventListeners (){

     //inicio de la aplicacion y desabilitar  submit
     
       

    document.addEventListener('DOMContentLoaded' , inicioApp);
     
    //campos del formulario 

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit

     btnEnviar.addEventListener('click', enviarEmail);

   //boton  para reset


      resetBtnC.addEventListener('click', resetB);

}



// funciones


function inicioApp(){

   
       btnEnviar.disabled = true;

}


    //valida que el campo tenga algo escrito


     function validarCampo(){
      
          

           // se valida la longitud del campo y que no est  vacio 
              
            validarLongitud(this);
                        
            //validarsolo el email
   
      
             if(this.type === 'email'){

                       validarEmail(this);
              

             }






              let errores = document.querySelectorAll ('.error');

             if (email.value  !==  ''  && asunto.value  !== ''  && mensaje.value !== '' )
                   {
                      
                      
                      if(errores.length === 0) {
                    
                            btnEnviar.disabled = false;

                        }
                       

                   }  
     }
     
     
     
     
     //resetear el formulario
     
     
     
      function resetB(e){
          
          

            
           formularioEnviar.reset();

            
           e.preventDefault();

      }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     //cuando se envia el correo
      function enviarEmail(e){
            //spiner al presionar Enviar

            const spinnerGif = document.querySelector('#spinner');
            

            spinnerGif.style.display = 'block';




             //gif que envia Email

             const enviado = document.createElement('img');
            
             enviado.src = 'img/mail.gif';
              
             enviado.style.display = 'block';
 





            // mostrar una funcion des pues de la otra


            setTimeout(function(){

               spinnerGif.style.display = 'none';



            document.querySelector('#loaders').appendChild(enviado);

            setTimeout(function(){

               enviado.remove();
               formularioEnviar.reset();
                       

            },5000);


            }, 3000  );
  


           
           


           e.preventDefault();

        


      }

      
       //verificando la longitud del texto  en los cajones  
      function validarLongitud(campo){
          
         
       
           if(campo.value.length > 0) {

                 campo.style.borderBottomColor = 'green';
                 campo.classList.remove('erorr');
          }else{
              campo.style.borderBottomColor = 'red';
              campo.classList.add('erorr');

          }
         
      }

   


function validarEmail (campo){

     const mensaje = campo.value;

       if(mensaje.indexOf('@') !== -1){
              campo.style.borderBottomColor = 'green';
              campo.classList.remove('erorr');

         }else{

              campo.style.borderBottomColor = 'red';
              campo.classList.add('erorr');




         }
  

}



