import "./App.css";
import Dictionary from "./Dictionary";
import dictionary from "./dictionary.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="header">Dictionary</h1>
          <img src={dictionary} alt="dictionary" className="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Word" />
        </main>
        <footer className="text-center">
          <small>
            This App was coded by{" "}
            <a href="https://idyllic-unicorn-26008a.netlify.app/">
              Zoryana Tur
            </a>{" "}
            and{" "}
            <a href="https://github.com/ZoryanaTur/dictionary-project">
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
