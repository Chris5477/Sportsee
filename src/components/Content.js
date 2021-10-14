import UserInfo from "./UserInfo";
import AllCards from "./AllCard"
import styled from "styled-components";
import VerticalBar from "../components/VerticalBar";
import ContainerGraphs from "./ContainerGraphs";
import { GraphBarChart } from "./GraphBarChart";


const StyleMaincontainer = styled.div`
  display: grid;
  grid-template-columns: 117px 2fr 1fr;
  grid-template-rows: 20vh repeat(2, 30vh);
  background-color :#FBFBFB;

`;

const Content = (props) => {
  return (
    <StyleMaincontainer>
      <VerticalBar />
      <UserInfo name={props.info[0]} />
      <GraphBarChart />
      <ContainerGraphs />
      <AllCards energy={props.info[0]} />
    </StyleMaincontainer>
  );
};

export default Content;
