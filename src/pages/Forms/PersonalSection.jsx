import React, { useState } from "react";
import { UserProfileCreateForm } from "../../ui-components";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { API, graphqlOperation } from 'aws-amplify';
import { createUserProfile } from '../../graphql/mutations';

const PersonalSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = await API.graphql(
        graphqlOperation(createUserProfile, { input: values })
      );

      console.log('CreateUserProfile response:', response.data.createUserProfile);

      // Handle the response or update your state accordingly
    } catch (error) {
      console.error('Error creating user profile:', error);
      // Handle the error
    }
  }

  return (
    <div className="mb-4">
      <Button variant="outlined" onClick={toggleDialog}>
        Personal
      </Button>

      <Dialog open={isDialogOpen} onClose={toggleDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Personal Information
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
          <UserProfileCreateForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PersonalSection;
