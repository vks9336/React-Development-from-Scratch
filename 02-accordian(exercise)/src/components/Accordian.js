import { useState } from "react";
import AccordianItem from "./AccordianItem";

export default function Accordian({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordian">
      {data.map((el, i) => (
        <AccordianItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordianItem>
      ))}
    </div>
  );
}
