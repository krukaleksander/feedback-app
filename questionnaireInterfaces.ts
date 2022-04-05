
type AnswerRange = 1 | 2 | 3 | 4 | 5;

interface IQuestion {
    questionText: string;
    answer: AnswerRange;
};

type Questionnaire = IQuestion[];

