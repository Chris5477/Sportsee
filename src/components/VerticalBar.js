

import styled from "styled-components";
import Navigation2 from "./Navigation2";

const VerticalLayout = styled.div`
  background-color:#020203;
  width: 117px;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 0;
`

const VerticalBar = () => {
  return (
    <VerticalLayout>
     <Navigation2 />
    </VerticalLayout>
  );
};

export default VerticalBar;