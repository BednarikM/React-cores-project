import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data-with-examples.js";
import "./CoreConcepts.css";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((listItem) => (
          <CoreConcept key={listItem.title} {...listItem} />
        ))}
      </ul>
    </section>
  );
}
