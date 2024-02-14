import styled from "styled-components";
import AddModal from "./modals/AddModal";
import Cards from "./commons/Cards";

const DashboardPage = () => {
  return (
    <Container>
      {/* <AddModal /> */}
      <Cards/>
      <div></div>
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
  /* px-[41px] py-[20px] */
  padding: 20px 41px;

`
