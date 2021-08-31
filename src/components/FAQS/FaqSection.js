import React from 'react';
import './FaqSection.css';

function FaqSection() {
  return (
    <>
      <div className="faqs__container">
        <h1>Frequently Asked Questions</h1>
        <ul className="faqs__list">
          <li className="faqs__item">Question 1?</li>
          <li className="faqs__item">Answer 1.</li>
          <li className="faqs__item">Question 2?</li>
          <li className="faqs__item">Answer 2.</li>
          <li className="faqs__item">Question 3?</li>
          <li className="faqs__item">Answer 3.</li>
        </ul>
      </div>
    </>
  );
}

export default FaqSection;
