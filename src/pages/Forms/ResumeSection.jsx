import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { ResumeCreateForm } from '../../ui-components';

const ResumeSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="mb-4">
      <Button variant="outlined" onClick={toggleDialog}>
        Resume
      </Button>

      <Dialog open={isDialogOpen} onClose={toggleDialog} aria-labelledby="resume-dialog-title">
        <DialogTitle id="resume-dialog-title">
          Resume Details
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
          <ResumeCreateForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResumeSection;
