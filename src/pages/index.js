import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <img alt="Logo" src="/images/logos/logo.svg" />
      <h1 style={headingStyles}>Design and Code React apps</h1>
      <p>
        Don’t skip design. Learn design and code by building real apps with
        React and Swift. Complete courses about the best tools.
      </p>
    </main>
  );
};

export default IndexPage;
