var print = message => {
    var div = document.getElementById('output');
    div.innerHTML = message;
};

var student;
var message = '';

for(var i = 0; i < students.length; i++){
    student = students[i];
    message += "<h2> Student: " + student.name + "</h2>";
    message += "<p> Track: " + student.track + "</p>";
    message += "<p> Points: " + student.points + "</p>";
    message += "<p> Achievements: " + student.achievements + "</p>";
    message += "<p> Points: " + student.points + "</p>";
}

print(message);
