var datos = document.querySelector('#datos')
function imprUser(){
    datos.innerHTML=''
    for(i=0; i< data.user.length;i++){
        //console.log(data.user[i])
        let TodoUser = (data.user[i]);
        document.getElementById("btn").addEventListener("click", function imprUser(){   
            datos.innerHTML +=`
            <tr>
                <th scope="row">${TodoUser.id}</th>
                <td>${TodoUser.name}</td>
                <td>${TodoUser.signupCohort}</td>
                <td>${TodoUser.timezone}</td>
                <td>${TodoUser.locale}</td>
                <td>${TodoUser.role}</td>
            </tr>
         `
         });
    }
}

function imprCort(){
    const cohortesLim = data.cortes.filter(cohorte => {
        return cohorte.id.indexOf("lim")>=0;
    });
    for(i=0; i< cohortesLim.length;i++){
        // console.log(data.cortes[i].id);
        let DataCortes = (cohortesLim[i].id);
       // console.log(DataCortes);
      // hacer un evento click y 
    }
    const cohortescdmx = data.cortes.filter(cohorte=> {
        return cohorte.id.indexOf("cdmx")>=0;
    });
    for(i=0; i< cohortescdmx.length;i++){
        // console.log(data.cortes[i].id);
        let DataCortescdmx = (cohortescdmx[i].id);
       // console.log(DataCortescdmx);
    }
    const cohortesgdl = data.cortes.filter(cohorte=> {
        return cohorte.id.indexOf("gdl")>=0;
    });
    for(i=0; i< cohortesgdl.length;i++){
        // console.log(data.cortes[i].id);
        let DataCortesgdl = (cohortesgdl[i].id);
        console.log(DataCortesgdl);
    }
}
function imprProgress(){
   for(let key in data.progress) //el for recorre el progress que es un objeto de objetos y key da acceso al segundo obj//
   {
       //console.log(key,data.progress[key]);// llave y su valor como referencia //
       if(data.progress[key].intro)
       {
       // console.log(data.progress[key].intro.percent);  
       }
       else 
       {
          // console.log('no esxite:',key);
       }
   }
}




