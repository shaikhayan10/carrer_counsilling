import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from "@mui/material";

const schoolTableData = [
  { id: 1, name: "Ankur High School", locality: "Paldi", stream: "Commerce", standard: "10th", requiredPercentage: "60%", prevCutoff: "62.5%" },
  { id: 2, name: "St. Xavier’s High School", locality: "Mirzapur", stream: "Science", standard: "10th", requiredPercentage: "70%", prevCutoff: "74%" },
  { id: 3, name: "Loyola High School", locality: "Ambavadi", stream: "Commerce", standard: "11th", requiredPercentage: "73%", prevCutoff: "69.1%" },
  { id: 4, name: "Divanballubhai High School", locality: "Paldi", stream: "Commerce", standard: "11th", requiredPercentage: "68%", prevCutoff: "65%" },
  { id: 5, name: "Trinity High School", locality: "Fatehpura", stream: "Science", standard: "10th", requiredPercentage: "78%", prevCutoff: "73%" }
];

const SchoolMeritList = () => {
  return (
    <Container>
      <TableContainer component={Paper} style={{ marginTop: 20, maxWidth: 900, margin: "auto", border: "1px solid blue" }}>
        <Table style={{ border: "1px solid blue" }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={7} style={{ textAlign: "center", backgroundColor: "#0B4F9E", color: "white", fontSize: "2.5rem", fontWeight: "bold", border: "1px solid blue" }}>
                School Merit List
              </TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: "#039BE5" }}>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Sr. No.</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>School Name</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Locality</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Stream</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Standard</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Required Percentage</TableCell>
              <TableCell style={{ color: "#3c4174", fontWeight: "bold", fontSize: "1.2rem", border: "1px solid blue", textAlign: "center" }}>Prev. Year Cut-off</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schoolTableData.map((row) => (
              <TableRow key={row.id} style={{ backgroundColor: "#D6E6F2", color: "#3c4174" }}>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.id}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.name}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.locality}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.stream}</TableCell>
                <TableCell style={{ border: "1px solid blue", color: "#3c4174", textAlign: "center" }}>{row.standard}</TableCell>
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

export default SchoolMeritList;