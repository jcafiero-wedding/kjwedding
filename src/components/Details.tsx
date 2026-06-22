import { Typography, Box } from "@mui/material";

function Details() {
  return (
    <div className="page-content">
      <Typography variant="h1" gutterBottom>
        Details
      </Typography>
      <Box
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          padding: 4,
          textAlign: "center",
          // background: "rgba(255, 255, 255, 0.9)",
          borderRadius: 2,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Wedding Day Details */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            mb: 3,
            color: "primary.main",
          }}
        >
          Wedding Ceremony & Reception
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Saturday, September 12th, 2026
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Ceremony will begin at 4:30pm
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Cocktail hour 5:00-6:00pm
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Reception 6:00-10:00pm
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          After party 10:00-12:00am
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          Cocktail attire requested
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          The SeaShell Resort
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          10 South Atlantic Avenue
          <br />
          Beach Haven, New Jersey 08008
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            width: 60,
            height: 1,
            backgroundColor: "text.secondary",
            mx: "auto",
            my: 4,
          }}
        />

        {/* Next Day Event */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            mb: 3,
            color: "primary.main",
          }}
        >
          Morning After Brunch
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Sunday, September 13th, 2026
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Served from 8:00am to 11:00am
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Please join us for brunch the morning after our wedding. All guests
          who are invited to the wedding are welcome to attend, even if you are
          not staying at The SeaShell!
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
          Brunch will be buffet style.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          The SeaShell Resort
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          10 South Atlantic Avenue
          <br />
          Beach Haven, New Jersey 08008
        </Typography>

        {/* Footer Message */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "text.secondary",
            }}
          >
            We can't wait to celebrate with you!
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Details;
