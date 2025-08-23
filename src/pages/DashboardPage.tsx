import DonationCardList from "../components/Donation/DonationCardList.tsx";
import { Box, Container } from "@mui/material";
import { useDonations } from "@/hooks/useDonations.tsx";

function DashboardPage() {
  const { donations, loading, error} = useDonations();

  if (loading) return <p>loading...</p>
  if (error) return <p>{error}</p>
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <DonationCardList donations={donations}/>
      </Container>
    </Box>
  );
}
export default DashboardPage;
