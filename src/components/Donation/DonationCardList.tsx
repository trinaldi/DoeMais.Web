import type {DonationCardListProps} from "../../../pages/Dashboard.tsx";
import DonationCard from "./DonationCard.tsx";
import {Container,Grid} from "@mui/material";

const DonationCardList = (donations: DonationCardListProps) => {
  return (
    <Container>
      <Grid container spacing={4}>
        {donations.donations.map((donation) => (
          <Grid size={4}>
          <DonationCard donation={donation} key={donation.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DonationCardList;
