function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i++) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML
}

var questions = [['How many hours are in a day?', '24'], ['Who is the president?', 'Barack Obama'], ['What is the largest state in the United States?', 'Alaska']];

var totalCorrect = 0;
var right = [];
var wrong = [];
var html;
var correctQuestions;
var incorrectQuestions;

for (var i = 0; i < questions.length; i++) {
    var ask = prompt(questions[i][0]);
    var answer = questions[i][1];
    if (ask === answer) {
        totalCorrect += 1
        right.push(questions[i][0])
    }
    else {
        wrong.push(questions[i][0])
    }
}

for (var i = 0; i < right.length; i++) {
    correctQuestions = "These are the questions you got correct:<br><br> " + right[i][0];
    incorrectQuestions = "These are the questions you got wrong:<br><br> " + wrong[i][0];
}

html = "You got " + totalCorrect + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(right)
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong)
print(html)