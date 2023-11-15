import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Header } from "../components";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CVBuilder = () => {
  const [cvEntries, setcvEntries] = useState([]);

  const handleAddEntry = () => {
    const newEntry = {
      id: Date.now(),
      title: "",
      description: "",
      // Add other necessary fields here
    };
    setcvEntries([...cvEntries, newEntry]);
  };

  const handleDeleteEntry = (id) => {
    setcvEntries(cvEntries.filter((entry) => entry.id !== id));
  };

  const handleEditEntry = (id, newValues) => {
    setcvEntries(
      cvEntries.map((entry) => (entry.id === id ? { ...entry, ...newValues } : entry))
    );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="CV Builder" title="Create Your CV" />
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Your CV Sections
        </Typography>
        <Button
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddEntry}
          variant="outlined"
        >
          Add New Section
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <List>
            {cvEntries.map((entry) => (
              <ListItem
                key={entry.id}
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleEditEntry(entry.id, {})}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteEntry(entry.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText
                  primary={entry.title || "New Section"}
                  secondary={entry.description || "No details added yet"}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default CVBuilder;
