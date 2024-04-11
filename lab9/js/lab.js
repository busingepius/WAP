class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    };

    addAnswer = function (question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer = function (answer) {
        return answer === this.answer;
    }
}

// for(let n of ["1",2,3,4]){
//     console.log(typeof(n));
// }

class Quiz {
    questions = new Map();

    constructor(questions, students) {
        for (let question of questions) {
            this.questions.set(question.qid, question.answer);
        }
        this.students = students;
    }

    scoreStudentBySid(sid) {
        let score = 0;

        let student = this.students.find((student) => student.studentId === sid);
         student.answers.forEach(function(answer){
            if (answer.checkAnswer(this.questions.get(answer.qid))) {
               score++;
            }
        }.bind(this))

        // for (let answer of student.answers) {
        //     if (answer.checkAnswer(this.questions.get(answer.qid))) {
        //         score++;
        //     }
        // }
        return score;
    }

    getAverageScore() {
        let score = 0;
        for(let student of students){
            score += this.scoreStudentBySid(student.studentId);
        }
        return score / this.students.length;
    }
}


const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Result: 2.5

