import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  Button,
  Snackbar,
  Checkbox,
  FormControlLabel,
  Stack,
} from "@mui/material";
import { Header } from "../components";
import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  AccountCircle,
  Extension,
  Send,
  CheckCircle,
  CheckCircleOutline,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Dashboard = () => {
  const { user } = useAuthenticator();
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleStepCompletion = (index) => {
    let newCompletedSteps = [...completedSteps];
    newCompletedSteps[index] = !newCompletedSteps[index];

    // Use user's unique identifier as part of the local storage key
    const userStepsKey = `completedSteps_${user.username}`;
    localStorage.setItem(userStepsKey, JSON.stringify(newCompletedSteps));

    setCompletedSteps(newCompletedSteps);

    const completedCount = newCompletedSteps.filter(Boolean).length;
    setProgress((completedCount / 3) * 100);

    if (completedCount === 3) {
      setOpen(true);
    }
  };

  // Load the completed steps from local storage when the component mounts or when user changes
  React.useEffect(() => {
    const userStepsKey = `completedSteps_${user.username}`;
    const savedSteps = JSON.parse(localStorage.getItem(userStepsKey));
    if (savedSteps) {
      setCompletedSteps(savedSteps);
      const completedCount = savedSteps.filter(Boolean).length;
      setProgress((completedCount / 3) * 100);
    }
  }, [user.username]); // Dependency array includes user.username to re-run effect when user changes

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const steps = [
    {
      Icon: AccountCircle,
      title: "Complete your profile",
      description: "Add more details to autofill Applications, Forms.",
      link: "/profile",
    },
    {
      Icon: Extension,
      title: "Install Chrome Extension",
      description:
        "Install the FormAI web extension to autofill your Applications, Forms.",
      link: "https://chrome.google.com/webstore",
    },
    {
      Icon: Send,
      title: "Start Auto Filling",
      description: "Start Autofilling Applications, Forms.",
      link: "#",
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Dashboard" title="Dashboard" />

      <Typography variant="h4" gutterBottom component="div">
        Welcome, {user.username}!
      </Typography>

      <Typography variant="h6" gutterBottom>
        Get started with FormAI
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Complete 3 simple steps to autofill your forms.
      </Typography>

      <Box sx={{ width: "100%", mb: 3 }}>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" align="right">
          {completedSteps.filter(Boolean).length}/3
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {steps.map(({ Icon, title, description, link }, index) => (
          <Grid item xs={12} md={4} key={title}>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  borderColor: "primary.main",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                },
                height: "100%",
              }}
            >
              {/* Icon and Description */}
              <Box>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: 2 }}
                >
                  <Icon color="primary" sx={{ fontSize: 40 }} />
                  {completedSteps[index] && (
                    <CheckCircle color="success" sx={{ fontSize: 20 }} />
                  )}
                </Stack>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {description}
                </Typography>
              </Box>

              {/* Actions */}
              <Stack
                direction={index === 2 ? "column" : "row"}
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                {(index === 0 || index === 1) && (
                  <Button
                    onClick={() => window.open(link, "_blank")}
                    variant="text"
                    color="primary"
                    sx={{ mb: index === 2 ? 1 : 0 }}
                  >
                    {index === 0 ? "Go to Profile Page" : "Go to Chrome Store"}
                  </Button>
                )}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={completedSteps[index]}
                      onChange={(event) => {
                        event.stopPropagation();
                        handleStepCompletion(index);
                      }}
                      name={title}
                      color="primary"
                      icon={<CheckCircleOutline />}
                      checkedIcon={<CheckCircle />}
                    />
                  }
                  label="Mark as completed"
                  sx={{ mx: index === 2 ? "auto" : 0 }}
                />
                {index === 2 && <div />} {/* Placeholder for alignment */}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Awesome! Start autofilling applications now!
        </Alert>
      </Snackbar>

      {/* Statistics */}
      {progress === 100 && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Statistics
          </Typography>
          <Typography variant="h6" gutterBottom>
            Form Autofill Summary
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Forms Filled
            </Typography>
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={(20 / 50) * 100} />
              </Box>
              <Box minWidth={35}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >{`20`}</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Applications Submitted
            </Typography>
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
                <LinearProgress
                  variant="determinate"
                  value={(15 / 50) * 100}
                  color="secondary"
                />
              </Box>
              <Box minWidth={35}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >{`15`}</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Successful Submissions
            </Typography>
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
                <LinearProgress
                  variant="determinate"
                  value={(10 / 50) * 100}
                  color="success"
                />
              </Box>
              <Box minWidth={35}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >{`10`}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Dashboard;
