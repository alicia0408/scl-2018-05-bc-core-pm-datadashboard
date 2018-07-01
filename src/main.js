let data = {};/* con esta variable luego se llamara en la carpeta main*/
function loadusers() {
    fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
        .then(function (resp) {
            return resp.json();
            //retorna la data
        })
        // maneja la data se crea una variable fuera de la funcion y los valores se guardan en un objeto//
        .then(function (valores) {
            data.user = valores;
            // console.log('data.user es :',data.user);
            // para imprimirlo cuando se obtenda la informacion//
            loadcortes();
        });
}
// para que no se carguen asincronamente se crea la funcion dentro del fetch 
function loadcortes() {
    fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json')
        .then(function (resp) {
            return resp.json();
            // retorna la data
        })
        // maneja la data
        .then(function (valores) {
            data.cortes = valores;
            // console.log('data.cortes es :',data.cortes);
            imprCort();
            loadprogress();
        });
}
function loadprogress() {
    fetch('https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
        .then(function (resp) {
            return resp.json();
            // retorna la data
        })
        // maneja la data
        .then(function (valores) {
            data.progress = valores;
            //   console.log('data.progress es :', data.progress);
            imprProgress();
            imprUser(computeUsersStats(data.user, data.progress, data.cortes));
        });
}




function imprUser(user) {
    var datos = document.querySelector('#datos');
    datos.innerHTML = '';
    
    for(i = 0; i < user.length; i++) {
        // console.log(data.user[i])
        let TodoUser = (user[i]);
        
        datos.innerHTML +=`
            <tr class="row col-md-12 t-a-c" >
                <th class="col-md-2 ln-correct-50">${TodoUser.name}</th>
                <td class="col-md-1 ln-correct-50">${TodoUser.stats.percent + " % "}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.exercises.total}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.exercises.completed}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.exercises.percent + " % "}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.reads.total}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.reads.completed}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.reads.percent + " % "}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.quizzes.total}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.quizzes.completed}</td>
                <td class="col-md-1 secundary">${TodoUser.stats.quizzes.percent + " % "}</td>

            </tr>
         `;
    }
    document.querySelector("#loader").style.display="none";
   
}

function imprCort() {
    const cohortesLim = data.cortes.filter(cohorte => {
        return cohorte.id.indexOf('lim') >= 0;
    });
    for (i = 0; i < cohortesLim.length; i++) {
        // console.log(data.cortes[i].id);
        let DataCortes = (cohortesLim[i].id);
        //console.log(DataCortes);
        // hacer un evento click y 
    }
}
function filterData(search) {
    const cohortes = data.cortes.filter(cohorte => {
        return cohorte.id.indexOf(search) >= 0;
    });
    /* for (i = 0; i < cohortes.length; i++) {
         // console.log(data.cortes[i].id);
         let DataCortes = (cohortes[i].id);
        
       // hacer un evento click y 
     }
     console.log(search+':',cohortes);*/

}
function imprProgress() {
    for (let key in data.progress) {// el for recorre el progress que es un objeto de objetos y key da acceso al segundo obj//
        // console.log(key,data.progress[key]);// llave y su valor como referencia //
        if (data.progress[key].intro) {
            // console.log(data.progress[key].intro.percent);  
        } else {
            // console.log('no esxite:',key);
        }
    }
}
