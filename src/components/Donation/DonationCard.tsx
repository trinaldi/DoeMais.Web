import { Grid, Paper, Stack, CardMedia, Typography } from "@mui/material";
import { Place, Label } from "@mui/icons-material";
import React from "react";

type AddressProps = {
  street: string;
  complement?: string;
  city: string;
  state: string;
  zipCode: string;
};

export type Donation = {
  id: number;
  title: string;
  description: string;
  quantity: number;
  status: string;
  category: string;
  pickupAddress: AddressProps;
  images: string[];
};

type DonationCardProps = {
  donation: Donation;
};

const DonationCard: React.FC<DonationCardProps> = ({ donation }) => {
  return (
    <>
      <Paper
        sx={{
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
        }}
      >
        <Grid container>

          <Grid size={6} sx={{ padding: 2 }} alignContent="center">
            <CardMedia
              component="img"
              image={donation.images[0]}
              alt={donation.description}
            />
          </Grid>

          <Grid size={6} sx={{ height: 150 }}>
            <Stack sx={{ padding: 2 }}>
              <Typography variant="h6"
                sx={{ lineHeight: 1.25, marginBottom: 1 }}
              >
                {donation.title}
              </Typography>
              <Typography variant="caption"
                sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
              >
                <strong>Quantidade &nbsp;</strong>
                <span> {donation.quantity}</span>
              </Typography>
              <Typography variant="caption" 
                sx={{ 
                  height: 90, 
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 4,  
                  WebkitBoxOrient: 'vertical',
                  lineHeight: 1.25, 
                  marginBottom: 2 
                }}
              >
                {donation.description}
              </Typography>
            </Stack>
          </Grid>

          <Grid
            container
            size={12}
            justifyContent="end"
            alignItems="flex-start"
          >
            <Grid size={6}>
              <Stack spacing={1} sx={{ padding: 2 }}>
                <Typography
                  variant="caption"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Label fontSize="medium" color="warning" />
                  <span>{donation.category}</span>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                >
                  <Place fontSize="medium" color="error" />
                  <span>{donation.pickupAddress.city}</span>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default DonationCard;
