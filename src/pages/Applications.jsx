import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { Header } from "../components";
import MenuItem from "@mui/material/MenuItem";

const initialFormState = {
  jobPosition: "",
  company: "",
  dateApplied: "",
  status: "Bookmarked",
  notes: "",
};

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [editIdx, setEditIdx] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEditInputChange = (e, index) => {
    const { name, value } = e.target;
    const newApplications = [...applications];
    newApplications[index][name] = value;
    setApplications(newApplications);
  };

  const startEditing = (index) => {
    setEditIdx(index);
  };

  const stopEditing = () => {
    setEditIdx(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.jobPosition || !form.company) return;
    setApplications([...applications, form]);
    setForm(initialFormState); // Reset Form
  };

  const handleDelete = (index) => {
    const newApplications = applications.filter((_, i) => i !== index);
    setApplications(newApplications);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Applications" title="Your Applications" />

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Add New Application</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Job Position"
                name="jobPosition"
                value={form.jobPosition}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Company"
                name="company"
                value={form.company}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Date Applied"
                name="dateApplied"
                InputLabelProps={{ shrink: true }}
                value={form.dateApplied}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" startIcon={<AddIcon />}>
                Add Application
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Job Position</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Date Applied</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
      {applications.map((row, index) => (
        <TableRow key={index}>
          {editIdx === index ? (
            <>
              <TableCell>
                <TextField
                  value={row.jobPosition}
                  name="jobPosition"
                  onChange={(e) => handleEditInputChange(e, index)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={row.company}
                  name="company"
                  onChange={(e) => handleEditInputChange(e, index)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="date"
                  value={row.dateApplied}
                  name="dateApplied"
                  onChange={(e) => handleEditInputChange(e, index)}
                  InputLabelProps={{ shrink: true }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  select
                  value={row.status}
                  name="status"
                  onChange={(e) => handleEditInputChange(e, index)}
                >
                  <MenuItem value="Bookmarked">Bookmarked</MenuItem>
                  <MenuItem value="Applying">Applying</MenuItem>
                  <MenuItem value="Applied">Applied</MenuItem>
                  <MenuItem value="Interviewing">Interviewing</MenuItem>
                  <MenuItem value="Negotiating">Negotiating</MenuItem>
                  <MenuItem value="Accepted">Accepted</MenuItem>
                </TextField>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => stopEditing()}>
                  <SaveIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)}>
                  <CancelIcon />
                </IconButton>
              </TableCell>
            </>
          ) : (
            <>
              <TableCell>{row.jobPosition}</TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.dateApplied}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <IconButton onClick={() => startEditing(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </>
          )}
        </TableRow>
      ))}
    </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Applications;
