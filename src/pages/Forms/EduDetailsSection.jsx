import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { EducationDetailsCreateForm } from '../../ui-components';

const EduDetailsSection = () => {
  const [eduForms, setEduForms] = useState([]);

  const addEduForm = () => {
    setEduForms([...eduForms, {}]); // Add a new empty form data object
  };

  const removeEduForm = (index) => {
    setEduForms(eduForms.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Education Details</h3>
        <IconButton onClick={addEduForm} color="primary" aria-label="add">
          <AddIcon />
        </IconButton>
      </div>

      {eduForms.map((_, index) => (
        <div key={index} className="mb-2">
          <h4>Edu {index + 1}</h4>
          <EducationDetailsCreateForm />
          <IconButton onClick={() => removeEduForm(index)} color="secondary" aria-label="remove">
            <CloseIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default EduDetailsSection;
