import { TableComponent } from "../commons/TableComponent"
import { lecturersHeaders, persons } from '../../assets/mock-data-min.js'


const Archive = () => {
  return (
    <div className="">
      <TableComponent tableHeaders={lecturersHeaders} tableData={persons} showHeader={true}   />
    </div>
  )
}

export default Archive