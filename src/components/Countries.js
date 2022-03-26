import axios from 'axios';
import React,{useEffect,useState}  from 'react';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);  
  const [rangevalue,setRangeValue]=useState(36)
  const continents=["Africa","America","Oceania","Asia","Europe"]
  const [selectedRadio,setSelectedRadio]=useState("");
      useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then((r)=>{
            setData(r.data)
        });
    },[])
    
  return (
        <div className='countries'>
            <h1>Countries</h1>
            <span>Showing {rangevalue} of {250} countries</span>
            <ul className="radio-container">
                Slide the arrow... 
                <input type="range" step="3" min="1" max="250"  
                defaultValue={rangevalue}
                 onChange={(e)=>{return setRangeValue(e.target.value)}} />
                {/* //si on met parentheses pas besoin de return  */}
                {continents.map((c,k)=>(
                    <li key={k}>
                        <input id={c} type="radio" checked={selectedRadio===c}
                        onChange={(e)=>{setSelectedRadio(e.target.id)}} name='choosedContinent' />
                        <label htmlFor={c}>{c}</label> 
                    </li>
                ))}
                {/* ou */}
                {/* {continents.map((c)=>{return c})} */}

            </ul>

            
            {/* {selectedRadio && <button type='reset'>Clean search</button>} */}
            {/* ou  */}
            {selectedRadio ? <button onClick={()=>{setSelectedRadio("")}} type='reset'>Reset search</button>:""}
           <ul>
             {
            data.filter((country)=>{return country.continents[0].includes(selectedRadio)}).sort((a,b)=>{return b.population-a.population}).slice(0,rangevalue).map((country,k)=>{
                return  <Card key={k} country={country}/>
            })
            }
            </ul> 
        </div>
    );
};

export default Countries;