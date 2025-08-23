import DonationCard, { type Donation } from "./DonationCard.tsx";
import {Container,Grid} from "@mui/material";

type DonationCardListProps = {
  donations: Donation[];
}

const DonationCardList = ({donations}: DonationCardListProps) => {
  return (
    <Container>
      <Grid container spacing={4} size={12}>
        {donations.map((donation) => (
          <Grid size={4} sx={{width: '100%'}}>
            <DonationCard donation={donation} key={donation.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DonationCardList;
