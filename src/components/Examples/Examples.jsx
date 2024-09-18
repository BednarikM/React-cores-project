import { useState } from "react";
import "./Examples.css";

import { EXAMPLES } from "../../data-with-examples.js";
import TabButton from "../TabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelected(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelected("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelected("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelected("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelected("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
      {/*       {{!!selectedTopic ? (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
      ) : (
        <p>Please select a topic</p>
      )}} */}
    </section>
  );
}
