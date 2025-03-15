import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from "@mui/material";

const tableData = [
  { id: 1, name: "GLS University", locality: "EllisBridge", course: "BCA", requiredPercentage: "60%", prevCutoff: "62.5%" },
  { id: 2, name: "St. Xavier’s College", locality: "Navrangpura", course: "B.Com", requiredPercentage: "70%", prevCutoff: "68%" },
  { id: 3, name: "Som-Lalit College", locality: "CG Road", course: "BBA", requiredPercentage: "78%", prevCutoff: "74%" },
  { id: 4, name: "LJ University", locality: "SG Highway", course: "MSC-IT", requiredPercentage: "63%", prevCutoff: "58.5%" },
  { id: 5, name: "Gujarat College", locality: "EllisBridge", course: "B.Com", requiredPercentage: "65%", prevCutoff: "60%" }
];

const CollegeMeritList = () => {
  return (
    <Container>
      <TableContainer component={Paper} style={{ marginTop: 20, maxWidth: 900, margin: "auto", border: "1px solid blue" }}>
        <Table style={{ border: "1px solid blue" }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={6} style={{ textAlign: "center", backgroundColor: "#0B4F9E", color: "white", fontSize: "2.5rem", fontWeight: "bold", border: "1px solid blue" }}>
                College Merit List
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#039BE5"}}>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Sr. No.</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>College Name</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Locality</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Course</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Required Percentage</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Prev. Year Cut-off</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} style={{ backgroundColor: "#D6E6F2", color: "#3c4174" }}>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.id}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.name}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.locality}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.course}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.requiredPercentage}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.prevCutoff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CollegeMeritList;
