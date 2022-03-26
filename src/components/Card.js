import React from "react";

const Card = ({country}) => {
    const showModal=(e)=>{
        console.log(e)
        console.log('country: ', country);
    }
  return (
    <div>
    
          <div className="kmodal"> </div>
      <li className="card" onClick={showModal}>
          <img src={country.flags.svg} alt={"Drapeau du"+country.translations.fra.commons} />
        <div className="infos"></div>
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </li>
    </div>
  );
};

export default Card;
