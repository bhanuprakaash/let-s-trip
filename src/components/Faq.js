import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: 'How do I create an itinerary?',
      answer: 'To create an itinerary, start by adding destinations to your trip. You can then organize and customize your itinerary using our drag-and-drop interface on the Plan Trip page.'
    },
    {
      id: 2,
      question: 'How do I manage my travel budget?',
      answer: 'Use our Budget Estimator tool on the Plan Trip page to keep track of your expenses and stay within budget.'
    },
    {
      id: 3,
      question: 'What should I do if I encounter a problem with the app?',
      answer: 'If you experience any issues, please contact our support team through the Contact Form or reach out to us via email or phone.'
    },
    {
      id: 4,
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions. You will receive an email with a link to reset your password.'
    },
    {
      id: 5,
      question: 'Is my personal information secure?',
      answer: 'Yes, we take your privacy seriously and use advanced security measures to protect your personal information.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section data-bs-version="5.1" className="list1 cid-ukLeyac1id" id="list01-2o" style={{paddingTop:"0px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-10 m-auto">
            <div className="content">
              <div className="row justify-content-center mb-5">
                <div className="col-12 content-head">
                  <div className="mbr-section-head">
                    <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">FAQ's</h4>
                  </div>
                </div>
              </div>
              <div id="bootstrap-accordion_22" className="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">
                {faqItems.map((item, index) => (
                  <div key={item.id} className="card">
                    <div className="card-header" role="tab" id={`heading${item.id}`}>
                      <button
                        type="button"
                        className={`panel-title ${activeIndex === index ? '' : 'collapsed'}`}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`collapse${item.id}`}
                      >
                        <h6 className="panel-title-edit mbr-semibold mbr-fonts-style mb-0 display-5" style={{fontSize:'25px'}}>{item.question}</h6>
                        <span className="sign mbr-iconfont mobi-mbri-arrow-down"></span>
                      </button>
                    </div>
                    <div
                      id={`collapse${item.id}`}
                      className={`panel-collapse noScroll ${activeIndex === index ? 'show' : 'collapse'}`}
                      role="tabpanel"
                      aria-labelledby={`heading${item.id}`}
                      data-parent="#bootstrap-accordion_22"
                    >
                      <div className="panel-body">
                        <p className="mbr-fonts-style panel-text display-7">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
