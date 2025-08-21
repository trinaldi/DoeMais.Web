import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Favorite, Settings } from "@mui/icons-material";
import Logo from "./Logo";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        backgroundColor: "#243c2c",
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar sx={{ padding: 5}}>
        <Logo width={72} height={50} text={true} />
      </Toolbar>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Início" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText primary="Doações" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
