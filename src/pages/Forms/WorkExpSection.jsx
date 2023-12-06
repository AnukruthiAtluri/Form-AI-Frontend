import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { ExperienceDetailsCreateForm } from '../../ui-components';

const WorkExpSection = () => {
  const [workExpForms, setWorkExpForms] = useState([]);
  const theme = useTheme();

  const addWorkExpForm = () => {
    setWorkExpForms([...workExpForms, {}]); // Add a new empty form data object
  };

  const removeWorkExpForm = (index) => {
    setWorkExpForms(workExpForms.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <IconButton onClick={addWorkExpForm} color="primary" aria-label="add">
          <AddIcon />
        </IconButton>
      </div>

      {workExpForms.map((_, index) => (
        <div key={index} className="mb-2">
          <ExperienceDetailsCreateForm />
          <IconButton onClick={() => removeWorkExpForm(index)} color="secondary" aria-label="remove">
            <CloseIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default WorkExpSection;
