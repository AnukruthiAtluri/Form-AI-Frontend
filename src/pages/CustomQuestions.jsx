import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  IconButton,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { Header } from "../components";

const questionTypes = {
  TEXT: "Text",
  YES_NO: "Yes/No",
  SERIES: "Series of Questions",
};

const CustomQuestions = () => {
  const [questions, setQuestions] = useState([
    { question: "", answer: "", type: questionTypes.TEXT, series: [] },
  ]);

  const handleQuestionChange = (index, event) => {
    const newQuestions = questions.map((item, i) => {
      if (i === index) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });
    setQuestions(newQuestions);
  };

  const handleTypeChange = (index, event) => {
    const newQuestions = questions.map((item, i) => {
      if (i === index) {
        return { ...item, type: event.target.value, answer: "", series: [] };
      }
      return item;
    });
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", answer: "", type: questionTypes.TEXT, series: [] },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(questions);
    // Implement submission logic here
  };

  // Render different input types based on question type
  const renderInputField = (question, index) => {
    switch (question.type) {
      case questionTypes.TEXT:
        return (
          <TextField
            fullWidth
            label="Answer"
            variant="outlined"
            name="answer"
            value={question.answer}
            onChange={(event) => handleQuestionChange(index, event)}
          />
        );
      case questionTypes.YES_NO:
        return (
          <Box>
            <Chip
              label="Yes"
              clickable
              color={question.answer === "Yes" ? "primary" : "default"}
              onClick={() =>
                handleQuestionChange(index, {
                  target: { name: "answer", value: "Yes" },
                })
              }
            />
            <Chip
              label="No"
              clickable
              color={question.answer === "No" ? "primary" : "default"}
              onClick={() =>
                handleQuestionChange(index, {
                  target: { name: "answer", value: "No" },
                })
              }
            />
          </Box>
        );
      case questionTypes.SERIES:
        return (
          <TextField
            fullWidth
            label="Series Name"
            variant="outlined"
            name="answer"
            value={question.answer}
            onChange={(event) => handleQuestionChange(index, event)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Questions" title="Custom Questions / Keywords" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {questions.map((question, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Question"
                  variant="outlined"
                  name="question"
                  value={question.question}
                  onChange={(event) => handleQuestionChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Type</InputLabel>
                  <Select
                    value={question.type}
                    label="Type"
                    name="type"
                    onChange={(event) => handleTypeChange(index, event)}
                  >
                    {Object.values(questionTypes).map((type, idx) => (
                      <MenuItem key={idx} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                {renderInputField(question, index)}
              </Grid>
              <Grid item xs={12} md={2}>
                <IconButton onClick={() => handleRemoveQuestion(index)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Button
              type="button"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleAddQuestion}
            >
              Add Question
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="right">
              <Button type="submit" variant="contained" color="primary">
                Save Questions
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CustomQuestions;
