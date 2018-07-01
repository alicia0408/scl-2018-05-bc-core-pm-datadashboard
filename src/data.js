
function computeUsersStats (user, progress, courses)// todos los usrs ordenados
{
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

function sortUsers(users, orderBy, orderDirection) {
    var datos = [];

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
