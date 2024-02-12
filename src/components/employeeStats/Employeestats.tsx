'use client';
import './Employeestats.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Employeestats = () => {
  function createData(id: number, name: string, salary: string, country: string) {
    return { id, name, salary, country };
  }

  const rows = [
    createData(1, 'Dakota Rice', '$36,738', 'Niger'),
    createData(2, 'Minerva Hooper', '$23,789', 'Curação'),
    createData(3, 'Sage Rodriguez', '$56,142', 'Netherlands'),
    createData(4, 'Philip Chaney', '$56,142', 'Korea, South'),
  ];
  const employeeData = [
    { id: 1, name: 'Dakota Rice', salary: '$36,738', country: 'Niger' },
    { id: 2, name: 'Minerva Hooper', salary: '$23,789', country: 'Curação' },
    { id: 3, name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands' },
    { id: 4, name: 'Philip Chaney', salary: '$56,142', country: 'Korea, South' },
  ];

  return (
    <div className="employee-stats">
      <div className="employee-stats_header">
        <h1>Employees Stats</h1>
        <p>New employees on 15th September, 2016</p>
      </div>
      <div className="employee-stats_content">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'orange', fontWeight: '700' }}>ID</TableCell>
                <TableCell sx={{ color: 'orange', fontWeight: '700' }} align="left">
                  Name
                </TableCell>
                <TableCell sx={{ color: 'orange', fontWeight: '700' }} align="left">
                  Salary
                </TableCell>
                <TableCell sx={{ color: 'orange', fontWeight: '700' }} align="left">
                  Country
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  {/* <TableCell align="left">{row.id}</TableCell> */}
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.salary}</TableCell>
                  <TableCell align="left">{row.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Employeestats;
