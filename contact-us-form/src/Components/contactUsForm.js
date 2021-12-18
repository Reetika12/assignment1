import styled from "styled-components";

function ContactUsForm() {
  return (
    <ParentComp>
      <Label>Entitled Contact Form</Label>
      <WrapBothField>
        <WrapRightfield>
          <Namefield type="text" placeholder="Name"></Namefield>
          <Namefield type="email" placeholder="Email address"></Namefield>
          <Namefield type="text" placeholder="Subject"></Namefield>
        </WrapRightfield>
        <WrapLeftfield>
          <Messagefield type="text" placeholder="Message"></Messagefield>
        </WrapLeftfield>
      </WrapBothField>
      <SubmitButton>Submit</SubmitButton>
    </ParentComp>
  );
}

export default ContactUsForm;

const Label = styled.h1`
  gap: 8px;
  color: #808080;
  margin-bottom: 8px;
`;
const ParentComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #dcdcdc;
  height: 70vh;
  margin: 5% 18% 5% 18%;
`;
const WrapRightfield = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-right: 20px;
`;
const Namefield = styled.input`
  background: #fff;
  padding: 5px 10px 5px 10px;
  height: 25px;
  border: none;
  border-radius: 10px;
  margin: 3%;
`;
const Messagefield = styled.input`
  background: #fff;
  padding: 5px 70px 70px 5px;
  border: none;
  border-radius: 10px;
  margin: 3%;
`;
const WrapLeftfield = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const WrapBothField = styled.div`
  display: flex;
  align-items: baseline;
`;
const SubmitButton = styled.button`
  width: 30%;
  background: #cc2936;
  border: none;
  border-radius: 10px;
  height: 28px;
  color: #fff;
  font-size: 17px;
  margin-top: 20px;
  cursor: pointer;
`;
