import EmojiCard from "./components/EmojiCard";
import "./App.css";
import emojipedia from "./components/emojipedia";

console.log(emojipedia);

function App() {
  function createCard(card) {
    return (
      <EmojiCard
        key={card.id}
        emoji={card.emoji}
        name={card.name}
        meaning={card.meaning}
      />
    );
  }

  return (
    <div>
      {/* <EmojiCard/> */}
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
