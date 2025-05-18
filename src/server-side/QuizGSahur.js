const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    sessionCode : {
        type: String,
        required: true
    },
    teamCode : {
        type: Object,
        required: true
    },
    quizzes : {
        type: Array,
        required: true
    }
});

const QuizSahur = mongoose.model('QuizSahur', quizSchema, "quizzes-gsahur"); //--> looking for quizs collection in database
module.exports = QuizSahur;