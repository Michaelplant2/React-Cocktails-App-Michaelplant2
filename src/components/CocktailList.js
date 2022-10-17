import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const {cocktails} = useGlobalContext ();
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;


// TODO
// Add condition that if no cocktails are found, display a message -- kelly will help here