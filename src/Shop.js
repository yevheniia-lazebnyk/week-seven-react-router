import { useState } from "react";
import { data } from './data';
import Buttons from "./Buttons";
import Clothes from "./Clothes";

export default function Shop() {
    const [clothes, setClothes] = useState(data)
  
    const choseClothes = (searchTerm) => {
      const newClothes = data.filter(element => element.searchTerm === searchTerm);
      setClothes(newClothes)
    }
  
    return (
      <div>
        <div className='cont'>
          <h1 className='back'>Free Standart Shipping</h1>
        </div>
        <Buttons filteredClothes={choseClothes} />
        <Clothes anyClothes={clothes} />
      </div>
    );
  }