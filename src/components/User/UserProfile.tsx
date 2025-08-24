import type { UserProfileType } from "@/types/user"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Address from "../Address/Address"
import DonationCardList from "../Donation/DonationCardList"

type UserProfileProps = {
  user: UserProfileType
}
const UserProfile = ({user}: UserProfileProps) => {
  return (
    <>
      <Grid container direction="column" spacing={4} size={12}>
          <Typography variant="h5" component="div">
            Perfil
          </Typography>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={user.avatarUrl}
              title={user.name}
            />
            <CardContent>
              <Typography variant="body1">{user.name}</Typography>
              <Typography variant="body2">{user.email}</Typography>
              <Typography variant="subtitle2">CPF</Typography>
              <Typography variant="body2">{user.cpf}</Typography>
              <Typography variant="subtitle2">Contato</Typography>
              <Typography variant="body2">{user.phone}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Editar</Button>
            </CardActions>
          </Card>
          <Typography variant="h5" component="div">Endereço</Typography>
          <Address address={user.address} category="pickup" />
      </Grid>
    </>
  )
}

export default UserProfile
