import React, { useState } from "react";
import faqImage from "../assets/g29.jpg";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What services does Clear-ion Experts offer?",
    answer:
      "Clear-ion Experts specializes in providing advanced water treatment solutions, including water purification, filtration systems, and customized ion exchange processes for both residential and commercial clients.",
  },
  {
    question: "How does your water purification system work?",
    answer:
      "Our water purification system uses cutting-edge technology, such as reverse osmosis and UV filtration, to remove impurities, bacteria, and harmful substances, ensuring safe and clean drinking water.",
  },
  {
    question: "Are your water treatment solutions eco-friendly?",
    answer:
      "Yes, our systems are designed with sustainability in mind. We use energy-efficient technologies and eco-friendly filters that minimize environmental impact while ensuring high-quality water treatment.",
  },
  {
    question: "Can I customize the water treatment system for my specific needs?",
    answer:
      "Absolutely! Clear-ion Experts offers tailor-made water treatment solutions to meet the unique requirements of your home or business, from capacity to specific contaminants.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(0); // First accordion open by default

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Frequently Asked Questions</h2>
          <div className="w-32 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left: FAQ */}
          <div className="md:w-1/2 w-full">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                className="mb-4"
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-semibold text-lg">
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails className="text-gray-700">{faq.answer}</AccordionDetails>
              </Accordion>
            ))}
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={faqImage}
              alt="FAQ Illustration"
              className="rounded-lg shadow-lg w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
