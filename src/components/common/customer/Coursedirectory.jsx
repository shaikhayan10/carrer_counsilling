import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const courses = [
  { id: 1, name: "B.Com", stream: "Commerce", eligibility: ">50%", colleges: 1000 },
  { id: 2, name: "BCA", stream: "Commerce/Science", eligibility: ">60%", colleges: 800 },
  { id: 3, name: "BBA", stream: "Commerce/Arts", eligibility: ">65%", colleges: 750 },
  { id: 4, name: "B.Sc.", stream: "Science", eligibility: ">70%", colleges: 600 },
  { id: 5, name: "B.Tech.", stream: "Science", eligibility: ">70%", colleges: 500 },
  { id: 6, name: "LLB", stream: "Science/Commerce", eligibility: ">65%", colleges: 450 },
];

const CourseDirectory = () => {
  return (
    <TableContainer>
      <Table sx={{ width: "80%", margin: "20px auto", backgroundColor: "#A7C7E7", border: "1px solid blue" }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={5} align="center" sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#FFFFFF", backgroundColor: "#005A9C", padding: "10px", border: "1px solid blue" }}>
              COURSE DIRECTORY
            </TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: "#005A9C" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid blue" }}>Sr. No</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid blue" }}>Course Name</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid blue" }}>Required Stream</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid blue" }}>Eligibility</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid blue" }}>No. of Colleges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id} sx={{ backgroundColor: "#D6EAF8" }}>
              <TableCell sx={{ border: "1px solid blue" }}>{course.id.toString().padStart(2, "0")}</TableCell>
              <TableCell sx={{ border: "1px solid blue" }}>{course.name}</TableCell>
              <TableCell sx={{ border: "1px solid blue" }}>{course.stream}</TableCell>
              <TableCell sx={{ border: "1px solid blue" }}>{course.eligibility}</TableCell>
              <TableCell sx={{ border: "1px solid blue" }}>{course.colleges}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseDirectory;