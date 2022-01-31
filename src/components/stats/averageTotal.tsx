import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "react-bootstrap";


export default function AverageTot() {

  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);

  async function fetchData() {
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/`
    );
    const prices = await response.json();
    console.log(prices);
    setData(prices);
    sumAllPrices();
  }

  function sumAllPrices() {
    let calc = 0;
    for(let i=0; i<data.length; i++){
      calc += parseFloat(data[i].itemPrice);
    }
    console.log(sum);
    setSum(calc);
  }

  return (
    <>
    <Button onClick={() => sumAllPrices()}>All Expenses Past and Pending Total</Button>
    <h3>${sum}</h3>
    </>
  );
  }

