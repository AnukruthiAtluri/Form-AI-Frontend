import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { EducationDetailsCreateForm } from '../../ui-components';

const EduDetailsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="mb-4">
      <Button variant="outlined" onClick={toggleDialog}>
        Education Details
      </Button>

      <Dialog open={isDialogOpen} onClose={toggleDialog} aria-labelledby="edu-details-dialog-title">
        <DialogTitle id="edu-details-dialog-title">
          Education Details
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
          <EducationDetailsCreateForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EduDetailsSection;
