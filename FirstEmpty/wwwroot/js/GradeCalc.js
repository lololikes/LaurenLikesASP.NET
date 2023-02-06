// j query way of doing javascript
$("#btnCalculate").click(function () {

    var assignment = parseInt($("#assignmentGrade").val());
    var quizzes = parseInt($("#quizzesGrade").val());
    var group = parseInt($("#groupGrade").val());
    var intex = parseInt($("#intex").val());
    var exams = parseInt($("#examsGrade").val());

    var gradePerc = Math.round((assignment * .5376) + (quizzes * .086) + (group * .0538) + (intex * .1075) + (exams * .2151));

    function calculateGrade(gradePerc) {
        if (gradePerc >= 94) {
            return "A"
        } else if (gradePerc < 94 && gradePerc >= 90) {
            return "A-"
        } else if (gradePerc < 90 && gradePerc >= 87) {
            return "B+"
        } else if (gradePerc < 87 && gradePerc >= 84) {
            return "B"
        } else if (gradePerc < 84 && gradePerc >= 80) {
            return "B-"
        } else if (gradePerc < 80 && gradePerc >= 77) {
            return "C+"
        } else if (gradePerc < 77 && gradePerc >= 74) {
            return "C"
        } else if (gradePerc < 74 && gradePerc >= 70) {
            return "C-"
        } else if (gradePerc < 70 && gradePerc >= 67) {
            return "D+"
        } else if (gradePerc < 67 && gradePerc >= 64) {
            return "D"
        } else if (gradePerc < 64 && gradePerc >= 60) {
            return "D-"
        } else {
            return "E"
        }
    }

    const grade = calculateGrade(gradePerc);

    alert("Your Grade is: " + $("#txtFrom").val());

    $("#result").html("Score: " + gradePerc + "  Grade:" + grade);
 


        //+ ", Subject: " + $("#txtSubject").val()
        //+ ", Message: " + $("#txtMessage").val());

    $("#lololax").fadeOut("slow");
})

