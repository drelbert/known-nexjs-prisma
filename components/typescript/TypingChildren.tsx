import React from "react";

type BoxProps = {
  // typing children
  children: React.ReactNode;
  // typing styles
  style?: React.CSSProperties;
};

const RenderBox = function box({ children, style = {} }: BoxProps) {
  return (
    <section style={{ padding: "1em", border: "5px solid green", ...style }}>
      {children}
    </section>
  );
};

export default function TypingChildren() {
  return (
    <RenderBox>
      A String
      <p>Some HTML, not nested</p>
      <RenderBox style={{ borderColor: "red" }}>
        <h2>A second React component with a child</h2>
      </RenderBox>
      <RenderBox>
        <h2>Nested React component with two children</h2>
        <h3>The second child</h3>
      </RenderBox>
    </RenderBox>
  );
}
