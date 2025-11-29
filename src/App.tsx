import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import Travel from "./components/Travel";
import QA from "./components/QA";
import Gallery from "./components/Gallery";
import {
  Button,
  createTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMemo, useState } from "react";
import { Menu } from "@mui/icons-material";

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Details", path: "/details" },
    { text: "Travel", path: "/travel" },
    // { text: "Q & A", path: "/qa" },
    // { text: "Gallery", path: "/gallery" },
  ];
  return (
    <div className="layout">
      <nav className="top-nav">
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        ) : (
          <>
            <Button variant="text" component={Link} to="/">
              Home
            </Button>
            <Button variant="text" component={Link} to="/details">
              Details
            </Button>
            <Button variant="text" component={Link} to="/travel">
              Travel
            </Button>
            {/* <Button variant="text" component={Link} to="/qa">
              Q & A
            </Button>
            <Button variant="text" component={Link} to="/gallery">
              Gallery
            </Button> */}
          </>
        )}
      </nav>
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Outlet />
    </div>
  );
};

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#5A6C6D",
          },
          secondary: {
            main: "#9A9892",
          },
        },
        typography: {
          fontFamily: `"Playfair Display", serif`,
        },
        components: {
          MuiButtonBase: {
            styleOverrides: {
              root: {
                textTransform: "none !important",
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
            <Route path="travel" element={<Travel />} />
            <Route path="qa" element={<QA />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
