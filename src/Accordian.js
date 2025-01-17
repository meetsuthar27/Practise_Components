import "./Accordian.css";
import { useState } from "react";

const data = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function AccItem({ num, curOpen, onOpen, title, text }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default function Accordian() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      <button className="close" onClick={() => setCurOpen(null)}>
        &times;
      </button>
      <div className="accordian">
        {data.map((el, index) => (
          <AccItem
            key={index}
            num={index}
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            text={el.text}
          />
        ))}
      </div>
    </>
  );
}
