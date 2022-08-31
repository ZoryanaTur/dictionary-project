import "./App.css";
import shecodeslogo from "./shecodeslogo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img
            src={shecodeslogo}
            alt="SheCodes logo"
            className="App-logo img-fluid"
          />
        </header>
        <main>
          <Dictionary />
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
