import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { toast } from "react-toastify";

const QuizPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(20 * 60); // 20 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(true);

  const generateUniqueUserId = () => {
    return 'user_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const getUserId = () => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = generateUniqueUserId();
      localStorage.setItem("userId", userId);
    }
    return userId;
  };

  const userId = getUserId();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/quiz/getQuizQuestions");
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions", error);
        toast.error("Failed to fetch questions");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timerRunning && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeRemaining === 0) {
      handleSubmit(); // Auto-submit when time is up
    }
  }, [timeRemaining, timerRunning]);

  const handleSelect = (questionNumber, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNumber]: value,
    }));
  };

  const handleClear = () => {
    setAnswers({});
  };

  const handleSubmit = async () => {
    setTimerRunning(false); // Stop the timer when submitting
    try {
      const response = await axios.post("http://localhost:3001/quiz/submitQuiz", { userId, answers });
      navigate("/scorecard", { state: { score: response.data.score } });
    } catch (error) {
      console.error("Error submitting quiz", error);
      toast.error("Failed to submit quiz");
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  if (loading) {
    return <Typography>Loading questions...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#D5EFFF", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="sm">
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
            <Typography fontWeight="bold">{formatTime(timeRemaining)} minutes</Typography>
          </Box>
        </Box>

        {questions.map((question) => (
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

            <Typography variant="body1" fontWeight="bold" mb={1}>
              {question.text}
            </Typography>

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