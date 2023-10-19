import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import TattoItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedTattoos, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedTattoo(null);
  }

  const fillteredTattoos = tattoos.filter((tattoo) => {
    return tattoo.title.includes(searchText);
  });

  const tattooElements = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return (
        <TattoItem
          key={index}
          tattoo={tattoo}
          onTattooClick={onTattooOpenClick}
        />
      );
    });

  let tattooPost = null;
  if (!!selectedTattoos) {
    tattooPost = (
      <TattooPost tattoo={selectedTattoos} onBgClick={onTattooCloseClick} />
    );
  }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="Container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{tattooElements}</div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
