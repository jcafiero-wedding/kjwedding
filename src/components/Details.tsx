import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import { LocationOn, Schedule } from "@mui/icons-material";

function Details() {
  return (
    <div className="page-content">
      <Typography variant="h1" gutterBottom>
        Details
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
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
        <Typography variant="h2">Our Wedding Day</Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", marginInline: 2 }}>
        <Card sx={{ flex: 1, minWidth: 300 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOn color="primary" sx={{ mr: 1 }} />
              <Typography variant="h5">Where</Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
              The SeaShell Resort
            </Typography>
            <Typography color="text.secondary">10 S Atlantic Ave</Typography>
            <Typography color="text.secondary">
              Beach Haven, NJ 08008
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, minWidth: 300 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Schedule color="primary" sx={{ mr: 1 }} />
              <Typography variant="h5">When</Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
              September 12, 2026
            </Typography>
            <Chip label="Time TBD" color="secondary" variant="outlined" />
          </CardContent>
        </Card>
      </Box>

      <Typography variant="body1" sx={{ mt: 3, fontStyle: "italic" }}>
        More details coming soon!
      </Typography>
    </div>
  );
}

export default Details;
