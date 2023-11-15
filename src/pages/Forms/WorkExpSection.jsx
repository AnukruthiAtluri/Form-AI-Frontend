import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { ExperienceDetailsCreateForm } from '../../ui-components'; 

const WorkExpSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="mb-4">
      <Button variant="outlined" onClick={toggleDialog}>
        Work Experience
      </Button>

      <Dialog open={isDialogOpen} onClose={toggleDialog} aria-labelledby="work-exp-dialog-title">
        <DialogTitle id="work-exp-dialog-title">
          Work Experience
          <IconButton
            aria-label="close"
            onClick={toggleDialog}
            sx={{
              position: 'absolute',
              right: theme.spacing(1),
              top: theme.spacing(1),
              color: theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <ExperienceDetailsCreateForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkExpSection;
