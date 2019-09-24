   /* CREAR CONTENIDO */

   document.getElementById('estado').addEventListener('submit',saveStatus);

   /* Guardar Estado */
   
   function saveStatus(e){ //1ro Capturamos el evento para cancelar el refresh por defecto 
   /*     console.log(e);
     alert('hola'); */
       let estado = document.getElementById('status').value  //Crear constante en donde obtengo el valor del textarea
       const state ={
           estado
       }
       
       if(localStorage.getItem('status') == null){ /* Si no existe elemento en local storage, añade uno */
           let status =[]
           status.push(state)
           localStorage.setItem('status', JSON.stringify(status))
       }else{  /* si existe obtenerlo, hacerle un push y enviarlo nuevamente al localStorage */
           let status = JSON.parse(localStorage.getItem('status'))
           status.push(state)
           localStorage.setItem('status',JSON.stringify(status))
       }
       getStatus()
       document.getElementById('status').reset()
       e.preventDefault(); //Prevenir comportamiento por defecto No se refresca automaticamente
   }
   
   function getStatus(){
      let status= JSON.parse(localStorage.getItem('status'))
      let statusView = document.getElementById('allStatus')
   
      statusView. innerHTML ='';
   
      for(let i = 0 ; i < status.length; i++){
        let estado = status[i].estado;
        statusView.innerHTML += `
            <div class="card mb-2 contEstado">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-justify"><p> ${estado} <p>
                    <a class="btn btn-danger elimina mt-1 align-center" onclick="deleteStatus('${estado}')">Delete</a>
                    </li>
                    </ul>        
            </div>
             
        `
      }  
   }

   function deleteStatus(estado){
       let status= JSON.parse(localStorage.getItem('status'))

       for(let i= 0 ; i < status.length; i++){
           if(status[i].estado == estado){
                status.splice(i,1);
           }
       }
       localStorage.setItem('status',JSON.stringify(status))
       getStatus()
   }
   
   getStatus();