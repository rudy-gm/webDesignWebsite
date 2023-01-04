import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article onClick={()=> setIsAnswerShowing(prev => !prev)}
        className='faq'
    >
      <div className={isAnswerShowing ? "faq_expanded" : "" }>
        <h4>{question}</h4>
        <button className="faq_icon">
          {isAnswerShowing ? (
            <AiOutlinePlus></AiOutlinePlus>
          ) : (
            <AiOutlineMinus></AiOutlineMinus>
          )}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
