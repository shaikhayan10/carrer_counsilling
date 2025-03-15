import React from "react";
import { AppBar, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const tableData = [
  { id: 1, name: "Ankur High School", locality: "Paldi", amount: "20,000", percentage: "60%" },
  { id: 2, name: "St. Xavier’s High School", locality: "Mirzapur", amount: "15,000", percentage: "65%" },
  { id: 3, name: "GLS University", locality: "EllisBridge", amount: "30,000", percentage: "70%" },
  { id: 4, name: "Som-Lalit College", locality: "Navrangpura", amount: "25,000", percentage: "80%" },
  { id: 5, name: "Gujarat College", locality: "EllisBridge", amount: "10,000", percentage: "60%" }
];

const ScholarshipTable = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#0B4F9E" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
            Scholarship Table
          </Typography>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} style={{ marginTop: 20, maxWidth: 800, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#039BE5" }}>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Sr. No.</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>School/College Name</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Locality</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Amount of Scholarship</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Required Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} style={{ backgroundColor: "#D6E6F2" }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.locality}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScholarshipTable;
