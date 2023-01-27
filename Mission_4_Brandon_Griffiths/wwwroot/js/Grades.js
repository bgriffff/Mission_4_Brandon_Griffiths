$("#btnSend").click(function () {
    //Assigns valiable for each category and multiplies it by percentage in syllabus
    let assignment = $('#assignment_perc').val() * 50;
    let quizzes = $('#quizzes_perc').val() * 10;
    let group_projects = $('#group_projects_perc').val() * 10;
    let intex = $('#Intex_perc').val() * 10;
    let final = $('#final_exam_perc').val() * 10;
    let midterm = $('#mid_exam_perc').val() * 10;
    let letter_grade = "";

    //calculates grade average
    let grade_average = (assignment + quizzes + group_projects + intex + final + midterm) / 100;

    // Print grade average in form
    $('#final_percent').html("Final Grade Percentage: " + grade_average);

    //Determines what letter grade is assigned for the course
    if (grade_average >= 94) {
        letter_grade = "A";
    }
    else if (grade_average >= 90) {
        letter_grade = "A-"
    }
    else if (grade_average >= 87) {
        letter_grade = "B+"
    }
    else if (grade_average >= 84) {
        letter_grade = "B"
    }
    else if (grade_average >= 80) {
        letter_grade = "B-"
    }
    else if (grade_average >= 77) {
        letter_grade = "C+"
    }
    else if (grade_average >= 74) {
        letter_grade = "C"
    }
    else if (grade_average >= 70) {
        letter_grade = "C-"
    }
    else if (grade_average >= 67) {
        letter_grade = "D+"
    }
    else if (grade_average >= 64) {
        letter_grade = "D"
    }
    else if (grade_average >= 60) {
        letter_grade = "D-"
    }
    else {
        letter_grade = "E"
    }

    //prints letter grade to the form
    $('#letter_grade').html("Final Letter Grade: " + letter_grade);

    
})