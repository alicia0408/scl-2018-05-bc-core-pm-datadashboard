var datos = document.querySelector('#datos')
function imprUser(){
    datos.innerHTML=''
    for(i=0; i< data.user.length;i++){
        //console.log(data.user[i])
        let TodoUser = (data.user[i]);
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
    }
}
function imprCort(){
    for(i=0; i< data.cortes.length;i++){
        // console.log(data.cortes[i].id);
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




