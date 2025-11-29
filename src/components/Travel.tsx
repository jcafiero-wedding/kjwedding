import {
  Typography,
  Box,
  Grid,
  Paper,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Hotel,
  Restaurant,
  LocalActivity,
  Language,
  Phone,
} from "@mui/icons-material";

function Travel() {
  return (
    <div className="page-content">
      <Typography variant="h1" gutterBottom>
        Travel
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          mt: 3,
          "&::before, &::after": {
            content: '""',
            display: "block",
            width: "60px",
            height: "2px",
            background: (theme) =>
              `linear-gradient(45deg, ${theme.palette.primary.main} 25%, transparent 25%)`,
            backgroundSize: "8px 8px",
            mx: 2,
          },
        }}
      >
        <Typography variant="h2">Beach Haven Guide</Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Hotel color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4">Lodging</Typography>
            </Box>
            <List>
              <ListItem
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <ListItemText
                  primary="The SeaShell Resort"
                  secondary="Our wedding venue - book here for convenience"
                />
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Link
                    href="https://seashellresort.com"
                    target="_blank"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Language fontSize="small" />
                    Website
                  </Link>
                  <Link
                    href="tel:+16094928000"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Phone fontSize="small" />
                    (609) 492-8000
                  </Link>
                </Box>
              </ListItem>

              <ListItem
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <ListItemText
                  primary="Engleside Inn"
                  secondary="Beachfront hotel - across the street from our wedding venue"
                />
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Link
                    href="http://www.engleside.com/"
                    target="_blank"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Language fontSize="small" />
                    Website
                  </Link>
                  <Link
                    href="tel:+16094921251"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Phone fontSize="small" />
                    (609) 492-1251
                  </Link>
                </Box>
              </ListItem>

              <ListItem
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <ListItemText
                  primary="Spray Beach Hotel"
                  secondary="Historic beachfront hotel"
                />
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Link
                    href="https://spraybeach.com"
                    target="_blank"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Language fontSize="small" />
                    Website
                  </Link>
                  <Link
                    href="tel:+16094928000"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Phone fontSize="small" />
                    (609) 492-8000
                  </Link>
                </Box>
              </ListItem>

              <ListItem
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <ListItemText
                  primary="Hotel LBI"
                  secondary="Newer hotel on the island"
                />
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Link
                    href="https://hotellbi.com/"
                    target="_blank"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Language fontSize="small" />
                    Website
                  </Link>
                  <Link
                    href="tel:+16094678000"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Phone fontSize="small" />
                    (609) 467-8000
                  </Link>
                </Box>
              </ListItem>

              <ListItem
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <ListItemText
                  primary="VRBO/Airbnb Rentals"
                  secondary="Perfect for groups and families"
                />
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Link
                    href="https://www.vrbo.com/search?destination=Beach+Haven%2C+New+Jersey%2C+United+States+of+America&regionId=77596&latLong=39.59293%2C-74.220963&flexibility=0_DAY&d1=2026-09-12&startDate=2026-09-12&d2=2026-09-13&endDate=2026-09-13&adults=2&typeaheadCollationId=e527e645-b6a6-42ea-b6b4-20ced42662cf"
                    target="_blank"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Language fontSize="small" />
                    VRBO
                  </Link>
                  <Link
                    href="https://www.airbnb.com/s/Beach-Haven--NJ/homes?place_id=ChIJ9ZS8aB8AwYkRp_cX2sE3J7I&refinement_paths%5B%5D=%2Fhomes&checkin=2026-09-12&checkout=2026-09-13&date_picker_type=calendar&adults=2&guests=12&search_type=unknown&query=Beach%20Haven%2C%20NJ&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-12-01&monthly_length=3&monthly_end_date=2026-03-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=2&channel=EXPLORE&source=structured_search_input_header"
                    target="_blank"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Language fontSize="small" />
                    Airbnb
                  </Link>
                </Box>
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Restaurant color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4">Restaurants</Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemText
                  primary="The Chicken or the Egg"
                  secondary="Famous breakfast spot"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Scojo's"
                  secondary="Casual dining with ocean views"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Black Whale Bar & Fish House"
                  secondary="Upscale seafood dining"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocalActivity color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4">Things to Do</Typography>
            </Box>
            <List>
              <ListItem
                sx={{ flexDirection: "column", alignItems: "flex-start" }}
              >
                <ListItemText
                  primary="Barnegat Lighthouse State Park"
                  secondary="Climb 217 steps to the top of Old Barney or walk along the Jettys"
                />
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <Link
                    href="https://www.nj.gov/dep/parksandforests/parks/barnegatlighthousestatepark.html"
                    target="_blank"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <Language fontSize="small" />
                    Website
                  </Link>
                </Box>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Boardwalk Stroll"
                  secondary="Shopping and entertainment"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Fishing Charters"
                  secondary="Deep sea and bay fishing"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Travel;
