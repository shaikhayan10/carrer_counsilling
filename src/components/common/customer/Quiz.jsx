import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Button,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

// Sample questions
const questionsData = [
  {
    category: "Quantitative Aptitude",
    number: 1,
    text: "If a train travels at 60 km/hr, how long will it take to cover a distance of 300 km?",
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
  },
  {
    category: "Logical Reasoning",
    number: 2,
    text: "Complete the sequence: 2, 6, 12, 20,...?",
    options: ["30", "42", "36", "48"],
  },
  {
    category: "Quantitative Aptitude",
    number: 3,
    text: "What is the value of x in equation : 2x + 5 = 15?",
    options: ["05", "10", "03", "07.5"],
    selected: "10",
  },
  {
    category: "Logical Reasoning",
    number: 4,
    text: "If all Flinks are Blinks, and some Blinks are Clinks, then:",
    options: ["All Flinks are Clinks", "Some Flinks might be Clinks", "No Flinks are Clinks", "All Clinks are Flinks"],
    selected: "All Clinks are Flinks",
  },
  {
    category: "General Awareness",
    number: 5,
    text: "Which of these is not a programming language?",
    options: ["Java", "Python", "Cascada", "Ruby"],
    selected: "Java",
  },
  {
    category: "General Awareness",
    number: 6,
    text: "Which field is known as the 'Queen of Science'?",
    options: ["Physics", "Mathematics", "Biology", "Chemistry"],
    selected: "Chemistry",
  },
  {
    category: "Verbal Ability",
    number: 7,
    text: "Choose the word that is mostly nearly opposite in meaning to 'Benevolent':",
    options: ["Malevolent", "Charitable", "Generous", "Bengin"],
    selected: "Charitable",
  },
  {
    category: "Verbal Ability",
    number: 8,
    text: "Complete the analogy: Book is to Reader as Song is to:",
    options: ["Writer", "Musician", "Listener", "Composer"],
    selected: "Musician",
  },
  {
    category: "Enterpreneurship",
    number: 9,
    text: "Which of the following best defines a 'Minimum Viable Product(MVP)'?",
    options: ["The cheapest product that can be sold profitably", "A version with just enough feature to attract early customers", "The smallest possible team needed to create a product", "A product that requires minimal investment"],
    selected: "The cheapest product that can be sold profitably",
  },
  {
    category: "Enterpreneurship",
    number: 10,
    text: "What is the primary purpose of a business model canvas?",
    options: ["To create a detailed financial projection", "To visualize and structure a business concept", "To design a company logo and branding", "To outline a marking strategy"],
    selected: "To visualize and structure a business concept",
  },
];

const QuizPage = () => {
  const navigate = useNavigate();
  
  // State to track selected answers
  const [answers, setAnswers] = useState({});

  // Handle selection change
  const handleSelect = (questionNumber, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNumber]: value,
    }));
  };

  // Clear all selected answers
  const handleClear = () => {
    setAnswers({});
  };

  // Submit and navigate to the career resource page
  const handleSubmit = () => {
    navigate("/Quizprompt");
  };

  return (
    <Box sx={{ backgroundColor: "#D5EFFF", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="sm">
        {/* Header */}
        <Box
          sx={{
            backgroundColor: "#0057B3",
            textAlign: "center",
            color: "white",
            py: 2,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Career Assessment Quiz
          </Typography>
          <Typography variant="body2">
            Note: Answer all questions to receive your personalised career recommendations.
          </Typography>
        </Box>

        {/* Timer Section (Right-Aligned) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 2,
            pr: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#0057B3",
              color: "white",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography fontWeight="bold">20:00 minutes</Typography>
          </Box>
        </Box>
        <Typography
          color="#0057B3"
          fontSize="12px"
          fontWeight="bold"
          textAlign="right"
          mt={0.5}
          pr={6.5}
        >
          Time Remaining:
        </Typography>

        {/* Render Questions */}
        {questionsData.map((question) => (
          <Box
            key={question.number}
            sx={{
              backgroundColor: "#0C4A94",
              p: 3,
              borderRadius: 3,
              color: "white",
              mt: 3,
            }}
          >
            {/* Category & Question Number */}
            <Grid container spacing={1} mb={2}>
              <Grid item>
                <Box
                  sx={{
                    backgroundColor: "#D5EFFF",
                    color: "#003366",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {question.category}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    backgroundColor: "#D5EFFF",
                    color: "#003366",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Question {question.number}
                </Box>
              </Grid>
            </Grid>

            {/* Question Text */}
            <Typography variant="body1" fontWeight="bold" mb={1}>
              {question.text}
            </Typography>

            {/* Options */}
            <RadioGroup
              value={answers[question.number] || ""}
              onChange={(e) => handleSelect(question.number, e.target.value)}
            >
              {question.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={option}
                  control={<Radio sx={{ color: "white" }} />}
                  label={<Typography sx={{ color: "white" }}>{option}</Typography>}
                />
              ))}
            </RadioGroup>
          </Box>
        ))}

        {/* Buttons Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Button
            onClick={handleClear}
            sx={{
              backgroundColor: "#0057B3",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 4,
              "&:hover": { backgroundColor: "#003366" },
            }}
          >
            Clear
          </Button>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#0057B3",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 4,
              "&:hover": { backgroundColor: "#003366" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default QuizPage;
