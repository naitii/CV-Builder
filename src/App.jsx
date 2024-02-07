import "./App.css";
import { MainBody } from "./mainBody.jsx";

const Header = () => {
  return (
    <header>
      <h1>CV Builder</h1>
    </header>
  );
};

function App() {
  return (
    <>
      <Header />
      <MainBody />
    </>
  );
}

export default App;
