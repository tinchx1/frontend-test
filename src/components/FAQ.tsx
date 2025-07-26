"use client"
import { ChevronDown, ChevronUp } from "lucide-react"
import { FAQ_DATA, SECTION_TITLES } from "@/constants"
import { useAccordion } from "@/hooks"
import "./FAQ.scss"

export default function FAQ() {
  const { openIndex, toggleItem, isOpen } = useAccordion()

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">
          Preguntas <span className="faq__highlight">Frecuentes</span>
        </h2>
        <div className="faq__list">
          {FAQ_DATA.map((faq, index) => (
            <div key={faq.id} className="faq__item">
              <button
                className={`faq__question ${isOpen(index) ? "faq__question--active" : ""}`}
                onClick={() => toggleItem(index)}
              >
                <span>{faq.question}</span>
                <div className="faq__icon-wrapper">
                  <span className="faq__icon">{isOpen(index) ? <ChevronUp /> : <ChevronDown />}</span>
                </div>
              </button>
              <div className={`faq__answer ${isOpen(index) ? "faq__answer--open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
