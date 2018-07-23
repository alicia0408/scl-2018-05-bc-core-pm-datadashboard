
/*window.sortUsers = (users, orderBy, orderDirection) => {
    var datos = [];
    
    if(orderBy === 'Nombre'){
        datos = users.sort((a, b ) => {
        if(a.name > b.name){
            return 1;
        }
     if(a.name < b.name){
         return -1;
     }
    return 0;
    });
}

  if(orderBy === 'Porcentaje total de completitud'){
      datos = users.sort((a,b) => {
          if(a.stats.percent > b.stats.percent){
              return 1;
          }
          if(a.stats.percent < b.stats.percent){
              return -1;
          }
        return 0;
    });
  }   
         if(orderBy === 'Porcentaje de ejericios autocorregidos completados'){
             datos = users.sort((a, b) => {
                 if (a.stats.exercises.percent > b.stats.exercises.percent){
                     return 1;
                    }
                 if (a.stats.exercises.percent < b.stats.exercises.percent){
                     return -1;
                    }
                    return 0;
                });
              }
        
              if(orderBy === 'Porcentaje de quizzes completados'){
                  datos = users.sort((a, b) => {
                      if(a.stats.quizzes.percent > b.stats.quizzes.percent){
                          return 1;
                      }
                      if(a.stats.quizzes.percent < b.stats.quizzes.percent){
                          return -1;
                      }
                      return 0;
                  })
              }
              
              if(orderBy === 'Promedio de puntuaciones en quizzes completados'){
                  datos = users.sort((a,b) => {
                      if (a.stats.quizzes.scoreAvg > b.stats.quizzes.scoreAvg){
                          return 1;
                      }
                      if (a.stats.quizzes.scoreAvg < b.stats.quizzes.scoreAvg){
                          return -1;
                      }
                      return 0;
                  })
                }
                
                if(orderBy === 'Porcentaje de lecturas completadas'){
                    datos = users.sort((a, b) => {
                        if (a.stats.reads.percent > b.stats.reads.percent){
                            return 1;
                        }
                        if (a.stats.reads.percent < b.stats.reads.percent){
                            return -1;
                          }
                          return 0;
                        })
                    }

                    if(orderDirection === 'DESC'){
                        datos = datos.reverse();
                    }
    return datos;
}*/

/*function filterUsers(users, filterBy) {
    var users = users.name;
users.sort(function (a, b) {
  return a.localeCompare(b);
  
});
console.log(filterUsers);
}*/

