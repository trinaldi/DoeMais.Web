import DonationCardList from "../components/Donation/DonationCardList.tsx";
import { Box, Container } from "@mui/material";
import { useDonations } from "@/hooks/useDonations.tsx";
import Address from "@/components/Address/Address.tsx";

const fakeAddress: AddressType = {
  street: "rua dos bobos, 0",
  complement: "",
  city: "xique xique",
  state: "BA",
  zipCode: "14026590",
};

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
        <Address address={fakeAddress} category="delivery" />
      </Container>
    </Box>
  );
}
export default DashboardPage;
