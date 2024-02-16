import { useState } from "react";


export function Flashcard({quesAns,SetQuesAns}){

const [showAns, setShowAns] = useState();


   function Anshandler(id){
      setShowAns(id)
      }
   
   return(
      <div className="main">
{quesAns.map((quesAns) => {
      return(
         <div onClick={()=> Anshandler(quesAns.id)} className="main2" >
         <p className={showAns === quesAns.id ? "selected" : ""}>{showAns === quesAns.id ? quesAns.answer : quesAns.question}</p>
         </div>
      )
   
})}
   </div>

   )
}




