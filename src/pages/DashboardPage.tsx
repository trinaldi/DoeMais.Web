import DonationCardList from "../components/Donation/DonationCardList.tsx";
import { Box, Container } from "@mui/material";
import { useDonations } from "@/hooks/useDonations.tsx";
import type { Address as AddressType } from "@/types/address.ts";
import type { UserProfileType } from "@/types/user.ts";
import UserProfile from "@/components/User/UserProfile.tsx";

const fakeAddress: AddressType = {
  street: "rua dos bobos, 0",
  complement: "",
  city: "xique xique",
  state: "BA",
  zipCode: "14026590",
};


function DashboardPage() {
  const { donations, loading, error } = useDonations();

  const fakeUser: UserProfileType = {
    "userId": 1,
    "avatarUrl": "https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg",
    "name": "fulano de tal",
    "phone": "11988854567",
    "cpf": "12345678909",
    "email": "fulano@email.com",
    "address": fakeAddress,
    "donations": donations ?? []
  }

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;
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
        <UserProfile user={fakeUser} />
      </Container>
    </Box>
  );
}
export default DashboardPage;
