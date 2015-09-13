function print(message) {
  document.write(message);
}

var questions = [['How many hours are in a day?', '24'], ['Who is the president?', 'Barack Obama'], ['What is the largest state in the United States?', 'Alaska']];

var totalCorrect = 0;
for (var i = 0; i < questions.length; i++) {
     var ask = prompt(questions[i][0]);
     var answer = questions[i][1];
     if ( ask === answer) {
         totalCorrect += 1
     } else {
         totalCorrect
     }
}
var correctResponses = "You got " + totalCorrect + " correct!"
prompt(correctResponses)