window.computeUsersStats = (user, progress, courses) => {// todos los usrs ordenados

    for (let i = 0; i < user.length; i++) {
        user[i].stats={};
            for (var key in progress) {
                    if (key == user[i].id){
                        if (progress[key].intro) {
                            // console.log(progress[key]);
                                    let percent = 0
                                    if (progress[key].intro.percent)
                                        percent = progress[key].intro.percent;
                                    let llaves = getformat(progress[key].intro);
                                    user[i].stats = { percent: percent, exercises: llaves.exercises, reads: llaves.reads, quizzes: llaves.quizzes };
                        }
                        else{
                            var cursos = { exercises: {}, reads: {}, quizzes: {} };
                            cursos.exercises = { completed: 0, total: 0, percent: 0 };
                            cursos.reads = { completed: 0, total: 0, percent: 0 };
                            cursos.quizzes = { completed: 0, total: 0, percent: 0, scoreSum: 0, scoreAvg: 0 };
                            user[i].stats = cursos;
                        }
                    }
                
            }
           
    }
    // filterData('lim');
    // filterData('scl');
  // console.log('data Unida :', user);
    return user;
}
function getformat(intro) {
    cursos = { exercises: {}, reads: {}, quizzes: {} };
    cursos.exercises = { completed: 0, total: 0, percent: 0 };
    cursos.reads = { completed: 0, total: 0, percent: 0 };
    cursos.quizzes = { completed: 0, total: 0, percent: 0, scoreSum: 0, scoreAvg: 0 };
    for (var key in intro.units) {
        if (intro.units[key].parts) {
            for (var keyparts in intro.units[key].parts) {
                if (intro.units[key].parts[keyparts].type == 'practice') {
                    if (intro.units[key].parts[keyparts].completed == 1)
                        cursos.exercises.completed++;
                    cursos.exercises.total++;
                }
                if (intro.units[key].parts[keyparts].type == 'read') {
                    if (intro.units[key].parts[keyparts].completed == 1)
                        cursos.reads.completed++;
                    cursos.reads.total++;
                }
                if (intro.units[key].parts[keyparts].type == 'quiz') {
                    if (intro.units[key].parts[keyparts].completed == 1) {
                        cursos.quizzes.completed++;
                        if (intro.units[key].parts[keyparts].score)
                            cursos.quizzes.scoreSum += intro.units[key].parts[keyparts].score;
                    }

                    cursos.quizzes.total++;

                }
            }

        }
    }
    if (cursos.exercises.total > 0) {
        cursos.exercises.percent = (cursos.exercises.completed / cursos.exercises.total) * 100;
        cursos.exercises.percent = parseFloat(cursos.exercises.percent.toFixed(2));
    }
    if (cursos.reads.total > 0) {
        cursos.reads.percent = (cursos.reads.completed / cursos.reads.total) * 100;
        cursos.reads.percent = parseFloat(cursos.reads.percent.toFixed(2));
    }
    if (cursos.quizzes.total > 0) {
        cursos.quizzes.percent = (cursos.quizzes.completed / cursos.quizzes.total) * 100;
        cursos.quizzes.percent = parseFloat(cursos.quizzes.percent.toFixed(2));

        cursos.quizzes.scoreAvg = (cursos.quizzes.scoreSum / cursos.quizzes.completed);
        cursos.quizzes.scoreAvg = parseFloat(cursos.quizzes.scoreAvg.toFixed(2));
    }
    return cursos;
}

window.sortUsers = (users, orderBy, orderDirection) => {
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
}

function filterUsers(users, filterBy) {
    var users = users.name;
users.sort(function (a, b) {
  return a.localeCompare(b);
  
});
console.log(filterUsers);
}

function processCohortData({ cohortData, orderBy, orderDirection, filterBy }) {
    var datos = [];

    return datos;
}
loadusers();
