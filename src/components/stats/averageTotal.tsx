import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "react-bootstrap";


export default function AverageTot() {

  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [click, setClick] = useState<{}>();

  useEffect(() => {
    if(!click){
      return;
    }
    (async () => {
      const response = await fetch(
        `https://onewalmart.azurewebsites.net/items/`
      );
      const prices = await response.json();
      console.log(prices);
      setData(prices);

        let calc = 0;
        for(let i=0; i<data.length; i++){
          calc += parseFloat(data[i].itemPrice);
        }
        setSum(calc);

    })()
  } , [click, data]);



  return (
    <>
    <Button onClick={() => setClick({...click})}>All Expenses Past and Pending Total</Button>
    <h3>${sum}</h3>
    </>
  );
  }

