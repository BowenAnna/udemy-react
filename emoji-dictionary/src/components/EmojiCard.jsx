import React from "react";
// import emojipedia from "./emojipedia";
import "../App.css";

export default function EmojiCard(props) {
  //   const emojiCard = emojipedia.map((card) => {
  //     return(
  //       <div key={card.id} className="term">
  //         <dt>
  //           <span className="emoji" role="img" aria-label="Tense Biceps">
  //             {card.emoji}
  //           </span>
  //           <span>{card.name}</span>
  //         </dt>
  //         <dd>{card.meaning}</dd>
  //       </div>
  //   )});

  return (
    <div>
      {/* <h1>
        <span>emojipedia</span>
      </h1> */}
      <dl className="dictionary">
        {/* {emojiCard} */}
        <div key={props.id} className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>{props.meaning}</dd>
        </div>
      </dl>
    </div>
  );
}
