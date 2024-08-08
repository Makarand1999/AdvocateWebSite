// src/Dashboard.js
import React, { useState } from 'react';
import { useTable } from 'react-table';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Dashboard = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Sample data for the table
  const data = React.useMemo(
    () => [
      { srNo: 1, name: 'John Doe', prevDate: '2024-07-15', nextDate: '2024-08-15' },
      { srNo: 2, name: 'Jane Smith', prevDate: '2024-06-10', nextDate: '2024-07-10' },
      { srNo: 3, name: 'John Doe', prevDate: '2024-07-15', nextDate: '2024-08-15' },
      { srNo: 4, name: 'Jane Smith', prevDate: '2024-06-10', nextDate: '2024-07-10' },
      { srNo: 5, name: 'John Doe', prevDate: '2024-07-15', nextDate: '2024-08-15' },
      { srNo: 6, name: 'Jane Smith', prevDate: '2024-06-10', nextDate: '2024-07-10' },
    ],
    []
  );

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      { Header: 'Sr. No.', accessor: 'srNo' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Previous Hearing Date', accessor: 'prevDate' },
      { Header: 'Next Date', accessor: 'nextDate' },
      {
        Header: 'View',
        accessor: 'view',
        Cell: () => (
          <button className="text-blue-500 hover:text-blue-700">
            <VisibilityIcon/>
          </button>
        )
      }
    ],
    []
  );

  // Use the useTable hook to create table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="container mx-auto p-4">
      <div className="h-[69vh] flex flex-col">
        <div className="mb-4">
          <label htmlFor="upload" className="block text-lg font-semibold mb-2">Admin Dashboard</label>
          <input
            type="file"
            id="upload"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <table {...getTableProps()} className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 text-gray-600">
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className="py-3 px-4 border-b" style={{border:"1px solid"}}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="text-gray-700">
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className={row.index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="py-2 px-4 border-b" style={{border:"1px solid"}}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
