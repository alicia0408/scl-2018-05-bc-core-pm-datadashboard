let data={} ;
function loadusers() {
     fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
        .then(function(resp){
            return resp.json();
            //retorna la data
        })
        // maneja la data
        .then(function(valores){
            data.user=valores;
            console.log('data.user es :',data.user);
            loadcortes(); 
        });
 }

 function loadcortes() {
    fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json')
       .then(function(resp){
           return resp.json();
           //retorna la data
       })
       // maneja la data
       .then(function(valores){
           data.cortes=valores;
           console.log('data.cortes es :',data.cortes);
           loadprocess();
       });
}

function loadprocess() {
    fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
       .then(function(resp){
           return resp.json();
           //retorna la data
       })
       // maneja la data
       .then(function(valores){
           data.procesos=valores;
           console.log('data.procesos es :',data.procesos);
           final_load();
       });
}

function final_load()
{
    console.log('la data final:',data)
}
loadusers();
 console.log('esta hoja');
