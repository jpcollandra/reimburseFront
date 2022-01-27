//Statistics page for the management portal
// Language: typescript
import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import AverageTot from "./stats/averageTotal";
import PiChart from "./stats/piChart";
import PendvApp from "./stats/pendvApproved";

export default function MgmtStats() {
  const [key, setKey] = useState("first");

  return (
    <>
      <h2>Expenditure Analytics</h2>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="first" title="AVG Reimburse">
          <AverageTot/>
        </Tab>
        <Tab eventKey="second" title="AVG Exp per Month">
          <PendvApp/>
        </Tab>
        <Tab eventKey="third" title="Budget ">
          <PiChart/>
        </Tab>
      </Tabs>
    </>
  );
}
