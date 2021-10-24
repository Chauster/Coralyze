import React from 'react';
import './FaqSection.scss';

const FaqSection = () => {
  return (
    <>
      <div className="faqs__container">
        <h1>Frequently Asked Questions</h1>
        <ul className="faqs__list">
          <li className="faqs__item"><h3>What is Coralyze?</h3></li>
          <li className="faqs__item"><p>Coralyze is an application that presents real-time IoT data visualisation based on the detections captured by IoT devices. Coralyze provides a fast analytics service that enables users to view insightful data that offers a comprehensive overview of their device. These analytics can be viewed via a sophisticatedly designed website that includes a multiple of data breakdowns. The application was created in parallel by 3 core teams, AI Engineers, Full Stack Developers, and Software Engineers. We aim to facilitate the interaction between IoT devices, databases and websites collaborated by cross-functional teams, allowing for consumers to effectively control and monitor the safety of indoor gatherings.</p></li>
          <li className="faqs__item"><h3>What do I need to use Coralyze? Do I need anything special?</h3></li>
          <li className="faqs__item"><p>All you need to use Coralyze is an internet connection or a mobile phone. Register with us, once you're logged in, begin adding an IoT device(Raspberry PI, Tinker Edge(s), Nvidia Jetson). We'll prompt you to download a dependency package to get you started, from there you will execute scripts on your added IoT device (Refer to the documentation page for more info).</p></li>
          <li className="faqs__item"><h3>Why can't I see my analytics? Is it working?</h3></li>
          <li className="faqs__item"><p>You may be seeing a blank analytics page when you first log in but if you think this is an error, you may not have executed the scripts as per user manual however in special cases, data may not be updated in real time due to a bug. Either restart the scripts or contact the team via email INJECT-DevOps@outlook.com</p></li>
        </ul>
      </div>
    </>
  );
}

export default FaqSection;
