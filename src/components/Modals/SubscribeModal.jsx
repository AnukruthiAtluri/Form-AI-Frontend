// SubscribeModal.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SubscribeModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="subscribe-modal-title">
      <DialogTitle id="subscribe-modal-title">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">Subscribe to FormAI+</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Upgrade to FormAI+ for advanced features and exclusive benefits.
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Subscribe Now
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
