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
import RSVP from "./components/RSVP";
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
import { Launch, Menu } from "@mui/icons-material";

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
    { text: "RSVP", path: "/rsvp" },
    {
      text: "Registry",
      href: "https://registry.theknot.com/jennifer-cafiero-kyle-richers-september-2026-new-jersey/75296227",
      external: true,
      rel: "noopener noreferrer",
    },
    { text: "Q & A", path: "/qa" },
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
            <Button variant="text" component={Link} to="/qa">
              Q & A
            </Button>
            <Button variant="text" component={Link} to="/rsvp">
              RSVP
            </Button>
            <Button
              variant="text"
              component="a"
              href="https://registry.theknot.com/jennifer-cafiero-kyle-richers-september-2026-new-jersey/75296227"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Registry (opens in a new tab)"
            >
              Registry
            </Button>
            {/* 
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
        sx={{ ".MuiPaper-root": { minWidth: "200px" } }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                {...(item.external
                  ? {
                      component: "a",
                      href: item.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : { component: Link, to: item.path })}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.text} />
                <div style={{ visibility: "hidden" }}>
                  Link opens in new tab
                </div>
                {item.external && <Launch fontSize="small" />}
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
            main: prefersDarkMode ? "#B8C6A7" : "#A3B18A", // Light peach for dark mode, deep brown for light mode
          },
          secondary: {
            main: prefersDarkMode ? "#B5A28A" : "#6B5B73", // Adjust secondary for contrast too
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
            <Route path="rsvp" element={<RSVP />} />
            <Route path="qa" element={<QA />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
