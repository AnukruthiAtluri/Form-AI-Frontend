import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { EducationDetailsCreateForm } from '../../ui-components';

const EduDetailsFormModal = ({ isOpen, onSave, onClose }) => {
  const [formValues, setFormValues] = useState({ /* initial form values */ });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    onSave(formValues);
    setFormValues({ /* reset to initial form values */ });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="edu-details-form-modal">
      <DialogTitle id="edu-details-form-modal">
        Add Education Details
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <EducationDetailsCreateForm formValues={formValues} onChange={handleChange} />
      </DialogContent>
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </div>
    </Dialog>
  );
};

export default EduDetailsFormModal;
