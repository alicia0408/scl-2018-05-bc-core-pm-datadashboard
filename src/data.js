let data = {} ;//con esta variable luego se llamara en la carpeta main//
function loadusers(){
        fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
       .then(function(resp){
            return resp.json();
            //retorna la data
        })
        // maneja la data se crea una variable fuera de la funcion y los valores se guardan en un objeto//
        .then(function(valores) {
            data.user=valores;
            //console.log('data.user es :',data.user);
            imprUser();// para imprimirlo cuando se obtenda la informacion//
            loadcortes(); 
        });
 }
// para que no se carguen asincronamente se crea la funcion dentro del fetch 
 function loadcortes() {
    fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json')
       .then(function(resp){
           return resp.json();
           //retorna la data
       })
       // maneja la data
       .then(function(valores){
           data.cortes=valores;
          // console.log('data.cortes es :',data.cortes);
           imprCort();
           loadprogress();
       });
}

function loadprogress() {
    fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
       .then(function(resp){
           return resp.json();
           //retorna la data
       })
       // maneja la data
       .then(function(valores){
           data.progress=valores;
        //   console.log('data.progress es :',data.progress);
           imprProgress();
           final_load();
       });
}

function final_load()
{
   // console.log('la data final:',data)
}
loadusers();






