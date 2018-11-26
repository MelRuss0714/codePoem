//Each day I try to come ready with hope and love for learning
$(teacher).ready(function () {
    var studentCount = 32;

    //Each day cycles through the same process, every person bringing their load and laying it at my feet.
    for (var day = 0; day < schoolyear.length; day++) {

        //I know not what the packages hold until I unwrap them and adapt
        var losses = instructionalInterruptions + passiveAgressiveInsultsFromAdmin + defiantStudents;
        var wins = successfulLessons + AhaMoments + chancesToHelpOtherTeachers;
        var stressLevel = losses - wins;
        var instructionalInterruptions;
        var defiantStudents;
        var successfulLessons;
        var AhaMoments;   
        var chancesToHelpOtherTeachers;

        //And then it all explodes, my day is ripped from my hands in a game of keep away with me reaching for some control
        $("teacher").on("demands", function () {
            instructionalInterruptions = randomNumberOver4();
            passiveAgressiveInsultsFormAdmin = randomNumberOver5();
            defiantStudents = randomNumberOver3();
            AhaMoments = randomNumberIncluding0();
            chancesToHelpOtherTeachers = randomNumberIncluding0();
            successfulLessons = 7 - (instructionalInterruptions + defiantStudents) + AhaMoments;
        });

        //Each day an attempt to empty all divs of past stresses but cache can never really be cleared
        if (stressLevel < 0) {
            $('#stressors').empty();
            stressLevel = 0;
            alert('Congratulations you have had a rare successful day as a teacher!');
        }
        else {
            alert('Stress level remains high due to unhealthy work environment');
        }

        // The loop begins again, for someday will be the one day when the Aha's and the Wins are more than the sum of the losses

        // And on grows the love I have for each of my students.
        var love = 1;
        for (var i = 0; i < studentcount.length; i++) {
            love++;
        };
    }
});
