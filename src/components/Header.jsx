import React from "react";

export default function Header({ bold_text, light_text, margin_top }) {
  return (
    <section className={`container mb-10 ${margin_top}`}>
      <h2 className="font-poppins font-semibold text-[36px] text-secondary">
        <span className="text-theme">{bold_text}</span>
        {light_text}
      </h2>
    </section>
  );
}
