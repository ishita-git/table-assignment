import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { DATA } from "./DATA.js";

const getData = () => {
  return DATA.results.map((result) => ({
    gender: result.gender,
    name: `${result.name.title} ${result.name.first} ${result.name.last}`,
    image: result.picture.medium,
  }));
};

const extractedData = getData();

const BasicTable = () => {
  return (
    <TableContainer
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Gender
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Image
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {extractedData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">
                <img src={row.image} alt="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
