import React from "react";
import "./card.component.css";

export const Card = props => (
  <div className={"card-container"}>
    <img
      alt={"monster"}
      src={`https://robohash.org/${props.monster.id}?set=set2`}
    />
    <div>{props.monster.name}</div>
    <div>{props.monster.email}</div>
  </div>
);
