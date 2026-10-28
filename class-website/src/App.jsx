import { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Students from "./Students.jsx";
import Contact from "./Contact.jsx";

const SCHOOL_NAME = "YOUR SCHOOL NAME";
const CLASS_NAME = "TVET Certificate IV — Software Development";

function Header({ schoolName, currentView, onNavigate }) {
  const links = ["Home", "About", "Students", "Contact"];

  return (
    <header>
      <h1>{schoolName}</h1>
      <p>{CLASS_NAME}</p>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <button
            key={link}
            type="button"
            onClick={() => onNavigate(link)}
            aria-current={currentView === link ? "page" : undefined}
          >
            {link}
          </button>
        ))}
      </nav>
      <hr />
    </header>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState("Home");
  const [clickCount, setClickCount] = useState(0);

  function renderView() {
    switch (currentView) {
      case "About":
        return <About schoolName={SCHOOL_NAME} />;
      case "Students":
        return <Students schoolName={SCHOOL_NAME} />;
      case "Contact":
        return (
          <Contact
            schoolName={SCHOOL_NAME}
            onReturnHome={() => setCurrentView("Home")}
          />
        );
      default:
        return <Home schoolName={SCHOOL_NAME} onNavigate={setCurrentView} />;
    }
  }

  return (
    <>
      <Header
        schoolName={SCHOOL_NAME}
        currentView={currentView}
        onNavigate={setCurrentView}
      />
      <main>
        {renderView()}
        <hr />
        <section aria-labelledby="counter-title">
          <h2 id="counter-title">React useState Counter</h2>
          <p>You have clicked the button {clickCount} time(s).</p>
          <button type="button" onClick={() => setClickCount((count) => count + 1)}>
            Click me
          </button>
          <button type="button" onClick={() => setClickCount(0)}>
            Reset counter
          </button>
        </section>
      </main>
      <footer>
        <hr />
        <p>Class Website — ReactJS practical assessment</p>
      </footer>
    </>
  );
}