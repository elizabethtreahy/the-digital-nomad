import styled from "styled-components";

function Error({ children }) {
  console.log(children);
  return (
    <>
      <div>Error</div>
      <Wrapper>
        <Alert>!</Alert>
        <Message>{children}</Message>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  color: black;
  background-color: E2EEE7;
  width: fit-content;
  border-radius: 2px;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-around;
`;

const Alert = styled.span`
  background-color: E2EEE7;
  color: black;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  margin: 0;
`;

export default Error;
