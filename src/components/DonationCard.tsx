import {
  Container,
  Grid,
  Paper,
  Stack,
  CardMedia,
  Typography,
} from "@mui/material";
import { Place, VolunteerActivism, Info, Label } from "@mui/icons-material";

const donation = {
  title: "Colchão de Solteiro",
  description:
  "Colchão de solteiro com tamanho 78cm, já bem usado, porém em boas condições.",
  quantity: 1,
  status: "Aprovado",
  category: "Moveis",
  pickupAddress: {
    street: "Rua dos Bobos, 0",
    complement: "apartamento 22",
    city: "Xique Xique",
    state: "BA",
    zipCode: "14026590",
  },
  images: [
    "https://reconflex.vteximg.com.br/arquivos/ids/157239-1000-655/D33-MAX-Saude-Premium-colchao-88-20-RECONFLEX.png?v=638028393002030000",
    "https://reconflex.vteximg.com.br/arquivos/ids/157240-600-393/D33-MAX-Saude-Premium-detalhe-RECONFLEX.jpg?v=638028393277270000",
    "https://reconflex.vteximg.com.br/arquivos/ids/157241-600-393/D33-Max-Saude-Premium-detalhe-tecido-RECONFLEX.jpg?v=638028393440600000",
  ],
};

const DonationCard = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper sx={{ width: 345, borderRadius: 4 }}>
          <Grid container>
            <Grid size={6} sx={{padding: 2}}>
              <CardMedia
                component="img"
                height="140"
                image={donation.images[0]}
                alt={donation.description}
              />
            </Grid>
            <Grid size={6}>
              <Stack sx={{ padding: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ lineHeight: 1.25, marginBottom: 2 }}
                >
                  {donation.title}
                </Typography>
                <Typography variant="caption">
                  {donation.description}
                </Typography>
              </Stack>
            </Grid>
            <Grid container size={12} justifyContent="center" alignItems="flex-start">
              <Grid size={6}>
                <Stack spacing={1} sx={{ padding: 2 }}>
                  <Typography variant="caption" sx={{ display: "flex", alignItems: "center" }} >
                    <VolunteerActivism fontSize="medium" />
                    <span>{donation.quantity}</span>
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', margin: 2 }}>
                    <Info fontSize="medium" />
                    <span>{donation.status}</span>
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={6}>
                <Stack spacing={1} sx={{ padding: 2 }}>
                  <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Label fontSize="medium" />
                    <span>{donation.category}</span>
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    <Place fontSize="medium" />
                    <span>{donation.pickupAddress.city}</span>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default DonationCard;
