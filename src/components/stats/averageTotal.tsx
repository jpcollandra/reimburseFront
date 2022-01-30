import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "react-bootstrap";


export default function AverageTot() {

  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);

  async function fetchData() {
    const response = await fetch(
      `http://localhost:3000/items/`
    );
    const prices = await response.json();
    console.log(prices);
    setData(prices);
    sumAllPrices();
  }

  useEffect(() => {
    fetchData();
    
  }, []);

  function sumAllPrices() {
    let calc = 0;
    for(let i=0; i<data.length; i++){
      calc += parseInt(data[i].itemPrice);
    }
    console.log(sum);
    setSum(calc);
  }

  return (
    <>
    <Button onClick={() => sumAllPrices()}>Total Costs Past and Pending</Button>
    <h3>${sum}</h3>
    </>
  );
  }

