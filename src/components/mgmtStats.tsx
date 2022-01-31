//Statistics page for the management portal
// Language: typescript
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import PiChart from "./stats/piChart";
import PendvApp from "./stats/pendvApproved";
import axios from "axios";
import AverageTot from "./stats/averageTotal";

export default function MgmtStats() {



  return (
    <>
      <h2>Expenditure Calculator</h2>
      <AverageTot/>
    </>
  );
}
