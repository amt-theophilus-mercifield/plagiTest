interface TableProps {
    tableHeaders: [
      {
        key: string;
        value: string;
      }
    ];
    tableData: [];
    showHeader?: boolean;
    showTitle?: boolean;
  }
  
  export const TableComponent = ({
    tableHeaders,
    tableData,
    showHeader = true,
    showTitle = false,
  }: TableProps) => {
    return (
      <div>
        {showTitle && (
          <div>
            <span>Lecturers</span>
            <button>See more</button>
          </div>
        )}
        <table>
          <thead className="bg-[#E9E9EA] h-[50px]">
            {showHeader && (
              <tr className="h-[74px]">
                {tableHeaders.map((header) => {
                  return <th key={header.key}>{header.value}</th>;
                })}
              </tr>
            )}
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <tr key={index} className="h-[74px]">
                  {tableHeaders.map((header, headerIndex) => {
                    return (
                      <td key={headerIndex}>
                        {header.key === "full_name" ? (
                          <div className="w-[100%] h-[100%] flex gap-4 items-center">
                            <img
                              src={data.photo_url}
                              alt={data.full_name}
                              className="w-[40px] h-[40px] rounded-[50%]"
                            />
                            <span>{data.full_name}</span>
                          </div>
                        ) : (
                          data[header.key]
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  