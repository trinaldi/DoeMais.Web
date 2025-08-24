import type { Address as AddressType } from "@/types/address";
import { Card, CardContent, Typography } from "@mui/material";

type AddressProps = {
  address: AddressType;
  category: "pickup" | "delivery";
};

const Address = ({ address, category }: AddressProps) => {
  const label =
    category === "pickup"
      ? "Endereço de Retirada"
      : "Endereço de Entrega";
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {label}
        </Typography>
        <Typography variant="body2">{address.street}</Typography>
        <Typography variant="body2">{address.complement}</Typography>
        <Typography variant="body2">{address.city}</Typography>
        <Typography variant="body2">{address.state}</Typography>
        <Typography variant="body2">{address.zipCode}</Typography>
      </CardContent>
    </Card>
  );
};

export default Address;
