import React, { useState } from "react";
import styled from "styled-components";

function FormGuide() {
  return (
    <ParentComp>
      <Label> Yes I want to subscribe to Mag-O-Zine</Label>
    </ParentComp>
  );
}

export default FormGuide;
const ParentComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #dcdcdc;
  height: 80vh;
  margin: 5% 18% 5% 18%;
`;
const Label = styled.h1`
  gap: 8px;
  color: #fff;
  background: red;
  margin-bottom: 8px;
`;
