import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "1rem" }}>
            <Typography variant="h6">Bloco 1</Typography>
            <Typography>Conteúdo do bloco 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "1rem" }}>
            <Typography variant="h6">Bloco 2</Typography>
            <Typography>Conteúdo do bloco 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "1rem" }}>
            <Typography variant="h6">Bloco 3</Typography>
            <Typography>Conteúdo do bloco 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Dashboard
