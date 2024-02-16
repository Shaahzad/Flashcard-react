import { useState } from 'react';
import './App.css';
import { Flashcard } from './component/Ques&Ans';

  function App() {
    
    const [quesAns, setQuesAns] = useState(
        [
            {
                id: 1,
                question: "What Language is React based on?",
                answer: "JavaScript",
            },{
                id: 2,
                question: "What are the building blocks of React app?",
                answer: "Components",
            },{
                id: 3,
                question: "What's the name of a syntax we used to describe a UI in react?",
                answer: "JSX",
            },{
                id: 4,
                question: "How to pass Data from parent to child component?",
                answer: "Props",
            },{
                id: 5,
                question: "How to give component memory?",
                answer: "Stats",
            },{
                id: 6,
                question: "What do we call an input element that is completely synchronised with state?",
                answer: "controll input",
            },
        ]);



return(
    <div>
    <Flashcard quesAns={quesAns} setQuesAns={setQuesAns}/>

    </div>
)


}



export default App;
