import styled from "styled-components"
import { TableComponent } from "../commons/TableComponent"
import { lecturersHeaders, persons } from '../../assets/mock-data-min.js'


const Archive = () => {
  return (
    <Container className="">
      <TableComponent tableHeaders={lecturersHeaders} tableData={persons} showHeader={true}   />
    </Container>
  )
}

export default Archive;

const Container = styled.div`
padding: 20px 41px;
`