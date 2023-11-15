import React, { useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Header } from '../components';

const CustomQuestions = () => {
  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);

  const handleQuestionChange = (index, event) => {
    const newQuestions = questions.map((item, i) => {
      if (i === index) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission of questions to a backend service or store them locally
    console.log(questions);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Questions" title="Custom Questions / keywords" />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {questions.map((question, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Question"
                  variant="outlined"
                  name="question"
                  value={question.question}
                  onChange={(event) => handleQuestionChange(index, event)}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  fullWidth
                  label="Answer"
                  variant="outlined"
                  name="answer"
                  value={question.answer}
                  onChange={(event) => handleQuestionChange(index, event)}
                />
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
