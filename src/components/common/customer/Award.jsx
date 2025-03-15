import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from "@mui/material";

const tableData = [
  { id: 1, name: "Ankur High School", locality: "Paldi", amount: "20,000", percentage: "60%" },
  { id: 2, name: "St. Xavier’s High School", locality: "Mirzapur", amount: "15,000", percentage: "65%" },
  { id: 3, name: "GLS University", locality: "EllisBridge", amount: "30,000", percentage: "70%" },
  { id: 4, name: "Som-Lalit College", locality: "Navrangpura", amount: "25,000", percentage: "80%" },
  { id: 5, name: "Gujarat College", locality: "EllisBridge", amount: "10,000", percentage: "60%" }
];

const ScholarshipTable = () => {
  return (
    <Container>
      <TableContainer component={Paper} style={{ marginTop: 20, maxWidth: 900, margin: "auto", border: "1px solid blue" }}>
        <Table style={{ border: "1px solid blue" }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} style={{ textAlign: "center", backgroundColor: "#0B4F9E", color: "white", fontSize: "2.5rem", fontWeight: "bold", border: "1px solid blue" }}>
                Scholarship Table
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#039BE5" }}>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue" }}>Sr. No.</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue" }}>School/College Name</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue" }}>Locality</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue" }}>Amount of Scholarship</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue" }}>Required Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} style={{ backgroundColor: "#D6E6F2", color: "#3c4174" }}>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.id}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.name}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.locality}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.amount}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ScholarshipTable;