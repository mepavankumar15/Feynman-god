import React, { useState } from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const question = questions[currentQ];
  const optionLetters = ['A', 'B', 'C', 'D'];
  const questionText = question?.text || question?.q;
  const correctAnswer = question?.correctIndex !== undefined ? question.correctIndex : question?.answer;

  const handleAnswer = (index) => {
    if (feedback !== null) return;
    
    const isCorrect = index === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setFeedback(null);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
      if (onComplete) onComplete(score + (feedback === 'correct' ? 1 : 0), questions.length);
    }
  };

  if (showResult) {
    return (
      <div className="w-full bg-white rounded-3xl opacity-100 border border-slate-100 p-8 md:p-14 relative text-center">
        <h3 className="text-3xl font-headline font-extrabold text-slate-800 mb-2">Quiz Complete!</h3>
        <p className="text-xl font-body text-slate-600 mb-8">You scored {score} out of {questions.length}</p>
        <button 
          onClick={() => {
            setCurrentQ(0);
            setScore(0);
            setShowResult(false);
          }}
          className="bg-primary text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.98]"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-100 p-8 md:p-14 relative shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
           <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Question {currentQ + 1} of {questions.length}</span>
        </div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-slate-800 leading-tight mb-10">
            {questionText}
        </h2>
        
        <div className="grid gap-4">
          {question.options.map((opt, idx) => {
            let isSelectedAndCorrect = feedback !== null && idx === correctAnswer;
            let isSelectedAndWrong = feedback === 'incorrect' && idx !== correctAnswer && feedback !== null; 
            
            // To mimic the exact class styles
            let containerClass = "mcq-button group w-full flex items-center gap-5 p-5 rounded-2xl border-2 text-left ";
            let letterClass = "w-10 h-10 flex-shrink-0 rounded-xl font-bold flex items-center justify-center transition-colors ";
            
            if (feedback === null) {
              containerClass += "border-slate-100 hover:shadow-sm";
              letterClass += "bg-slate-50 border border-slate-200 text-slate-500 group-hover:bg-white group-hover:border-primary group-hover:text-primary";
            } else if (idx === correctAnswer) {
              // The correct answer always gets highlighted
              containerClass += "border-primary bg-primary/5 shadow-sm";
              letterClass += "bg-primary text-white";
            } else {
              containerClass += "border-slate-100 opacity-50";
              letterClass += "bg-slate-50 border border-slate-200 text-slate-500";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={feedback !== null}
                className={containerClass}
              >
                <div className={letterClass}>
                    {optionLetters[idx] || (idx+1)}
                </div>
                <span className={`text-lg font-medium transition-colors ${feedback !== null && idx === correctAnswer ? 'text-slate-900 font-bold' : 'text-slate-700 group-hover:text-slate-900'}`}>{opt}</span>
              </button>
            );
          })}
        </div>

        {feedback && (
          <div className="mt-8">
             <div className={`p-6 rounded-2xl border flex items-start gap-4 ${feedback === 'correct' ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                <div className={`w-10 h-10 flex-shrink-0 rounded-full text-white flex items-center justify-center shadow-sm ${feedback === 'correct' ? 'bg-emerald-500 shadow-emerald-200' : 'bg-red-500 shadow-red-200'}`}>
                    <span className="material-symbols-outlined">{feedback === 'correct' ? 'check' : 'close'}</span>
                </div>
                <div>
                    <h4 className={`font-bold text-lg ${feedback === 'correct' ? 'text-emerald-900' : 'text-red-900'}`}>{feedback === 'correct' ? 'Correct! Well done.' : 'Not quite right.'}</h4>
                    <p className={`mt-1 text-base leading-relaxed ${feedback === 'correct' ? 'text-emerald-800/80' : 'text-red-800/80'}`}>
                       {question.explanation || (feedback === 'correct' ? 'You successfully identified the correct answer.' : 'Review the concepts and try again!')}
                    </p>
                </div>
             </div>
             
             <div className="w-full mt-8 flex justify-end">
                <button onClick={handleNext} className="group px-8 py-3.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.98] flex items-center gap-2">
                    {currentQ < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
