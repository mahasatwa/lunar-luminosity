// src/components/organisms/accordion-faq/AccordionFAQ.tsx
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './AccordionFAQ.pcss';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={onClick}>
        <span>{item.question}</span>
        <FiChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

interface AccordionFAQProps {
  faqs: FAQItem[];
}

const AccordionFAQ: React.FC<AccordionFAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-faq">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          item={faq}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionFAQ;
