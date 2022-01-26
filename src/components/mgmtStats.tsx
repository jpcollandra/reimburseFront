//Statistics page for the management portal
// Language: typescript
import React, { useState } from 'react';
import styled from 'styled-components';


const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 1px solid black;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['AVG Exp', 'AVG Exp Per Empl', 'Budget'];



export default function MgmtStats() {
    const [active, setActive] = useState(types[0]);


    return(
        <>

        <ButtonGroup>
            
          {types.map(type => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            > 
              {type}
            </Tab>
          ))}
        </ButtonGroup>
      </>
    )
}