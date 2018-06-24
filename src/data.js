Window.computeUsersStats = (users, progress, courses) => {
    for (let i = 0; i < users.length; i++) {
        let usersid = users[i].id;
        let progress = progress[usersid];

        let progressPercent = 0;
        let readsCompleted = 0;
        let readsTotal = 0;
        let quizzesTotal = 0;
        let quizzesCompleted = 0;
        let exercisesTotal = 0;
        let scoreSum = 0;

    } if (users.role === "student") {
        courses.forEach(item2 => {
            if (typeof progress[item2] !== "undefined") {
                progressPercent = progress[item2].percent;
                let unitsValues = Object.values(progress[item2].units);

                for (let item3 in unitsValues) {
                    let partsValues = Object.values(unitsValues[item3].parts);

                    for (let item4 in partsValues) {
                        switch (partsValues[item4].type) {
                            case "read":
                                readsTotal += 1;
                                if (partsValues[item4].completed == 1) {
                                    readsCompleted += 1;
                                } break;
                            case "quiz":
                                quizzesTotal += 1;
                                if (partsValues[item4].completed == 1) {
                                    quizzesCompleted += 1;
                                    scoreSum += partsValues[item4].score;
                                } break

                            case "practice":
                                exercisesTotal += 1;
                                if (partsValues[item4].completed == 1) {
                                    exercisesTotal += 1;
                                } break;





                        }
                    }
                }
            }
        })


    }








}