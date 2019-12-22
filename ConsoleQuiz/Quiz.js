const readline = require('readline');

const rl = readline.createInterface(process.stdin,process.stdout);

(function () {
    function Question (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.logQuestion = function () {
    //console.log(this.question);
    console.log('\n')
    for (let i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }  
}

Question.prototype.verifyAnswer = function(answer) {
    if (answer === this.correct) {
        ++counterCorrect;
        ++counterTotal;
        console.log('Correct answer! Your current score is ' + counterCorrect + ' correct answers out of ' + counterTotal + ' questions.');
        return true;
    }    
    return false;

}

let question1 = new Question('Is the earth round?', 
    ['No, obviously it\'s flat', 'Yes, of course', 'Round? Everbody knows it\'s a square'],
    1);
let question2 = new Question('How many letters has the alphabet?',
    [26, 31, 17],
    0);
let question3 = new Question('Is an elephant bigger than ants?',
    ['Yes', 'No', 'How many ants?'],
    2);
let question4 = new Question('How many colors has the German flag?',
    [1, 2, 3],
    2);
let question5 = new Question('Where do Polar bears live?',
    ['The Arctic of the North Pole', 'South Pole\'s Antarctica', 'They enjoy both poles'],
    0);
let questions = [question1, question2, question3, question4, question5];
let randomQuestion;
let counterCorrect = 0;
let counterTotal = 0;

function setRandomAndSave () {
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    rl.setPrompt(randomQuestion.question);
    rl.prompt();
    randomQuestion.logQuestion();
    console.log('My answer: ');
};

setRandomAndSave();

rl.on('line', function(input) {
    if (input === 'exit') console.log('Thank you for playing'), rl.close();
    else if (randomQuestion.verifyAnswer(parseInt(input)) === true) {
        setRandomAndSave();       
    } 
    else if (randomQuestion.verifyAnswer(parseInt(input)) === false) {
        ++counterTotal;
        console.log('Wrong answer! You had ' + counterCorrect + ' correct answers out of ' + counterTotal + ' questions.');
        rl.close();
    } 
    else {
        console.log('I don\'t know what you mean. Please only use the given numbers to answer.')
        rl.prompt();
        randomQuestion.logQuestion();
        console.log('My answer: ');
    }    
})
}());