import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { Header } from "../components";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Editor } from '@tinymce/tinymce-react';

const ResumeBuilder = () => {
  const [resumes, setResumes] = useState([]);
  const [selectedResumeIndex, setSelectedResumeIndex] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [resumeName, setResumeName] = useState('');

  const handleAddResume = () => {
    const newResume = {
      id: Date.now(),
      name: `Resume ${resumes.length + 1}`,
      content: '',
    };
    setResumes([...resumes, newResume]);
  };

  const handleSelectResume = (index) => {
    setSelectedResumeIndex(index);
  };

  const handleContentChange = (content) => {
    const updatedResumes = [...resumes];
    updatedResumes[selectedResumeIndex].content = content;
    setResumes(updatedResumes);
  };

  const handleDeleteResume = (index) => {
    setResumes(resumes.filter((_, i) => i !== index));
    setSelectedResumeIndex(null); // Reset selection
  };

  const handleEditResumeName = (index) => {
    setEditDialogOpen(true);
    setResumeName(resumes[index].name);
  };

  const handleSaveResumeName = () => {
    const updatedResumes = [...resumes];
    updatedResumes[selectedResumeIndex].name = resumeName;
    setResumes(updatedResumes);
    setEditDialogOpen(false);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Resume Builder" title="Create Your Resume" />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>Your Resumes</Typography>
        <Button startIcon={<AddCircleOutlineIcon />} onClick={handleAddResume} variant="outlined">
          Add New Resume
        </Button>
        <List>
          {resumes.map((resume, index) => (
            <ListItem
              key={resume.id}
              button
              selected={index === selectedResumeIndex}
              onClick={() => handleSelectResume(index)}
              secondaryAction={
                <>
                  <IconButton onClick={() => handleEditResumeName(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteResume(index)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={resume.name} />
            </ListItem>
          ))}
        </List>
      </Box>

      {selectedResumeIndex !== null && (
                <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>Edit - {resumes[selectedResumeIndex].name}</Typography>
                <Editor
                  initialValue={resumes[selectedResumeIndex].content}
                  init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help'
                  }}
                  onEditorChange={(content) => handleContentChange(content)}
                />
              </Box>
      )}

      {/* Edit Resume Name Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Resume Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Resume Name"
            type="text"
            fullWidth
            value={resumeName}
            onChange={(e) => setResumeName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveResumeName}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ResumeBuilder;
