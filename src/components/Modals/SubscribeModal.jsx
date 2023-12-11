// SubscribeModal.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  {
    icon: <CheckCircleIcon />,
    text: "Access to advanced form-filling AI features",
  },
  { icon: <CheckCircleIcon />, text: "Priority customer support" },
  { icon: <CheckCircleIcon />, text: "Customizable form templates" },
  { icon: <CheckCircleIcon />, text: "Unlimited form submissions per month" },
  {
    icon: <CheckCircleIcon />,
    text: "Early access to new features and updates",
  },
  // Add more features as needed
];

const SubscribeModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="subscribe-modal-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="subscribe-modal-title">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Upgrade to FormAI+
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom variant="subtitle1" sx={{ mb: 2 }}>
          Unlock all the premium features and take your form management to the
          next level!
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>{feature.icon}</ListItemIcon>
              <ListItemText primary={feature.text} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{ mt: 2 }}
        >
          Subscribe Now
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
