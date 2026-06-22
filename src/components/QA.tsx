import { Typography, Link, Box } from "@mui/material";
import { useState } from "react";
import HotelBlockModal from "./HotelBlockModal";

const QAItem = ({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h5"
      sx={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 600,
        mb: 2,
        color: "primary.main",
      }}
    >
      {question}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        lineHeight: 1.6,
        color: "text.primary",
      }}
    >
      {children}
    </Typography>
  </Box>
);

const Divider = () => (
  <Box
    sx={{
      width: 60,
      height: 1,
      backgroundColor: "text.secondary",
      mx: "auto",
      my: 4,
      opacity: 0.6,
    }}
  />
);

function QA() {
  const [hotelModalOpen, setHotelModalOpen] = useState(false);

  const handleHotelModal = () => {
    setHotelModalOpen(!hotelModalOpen);
  };

  return (
    <div className="page-content">
      <Box
        sx={{
          maxWidth: 700,
          margin: "0 auto",
          padding: 4,
          textAlign: "left",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: 2,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          {/* Header */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              mb: 1,
              textAlign: "center",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
        {/* Q&A Items */}
        <QAItem question="When is the RSVP deadline?">
          Please RSVP by August 1st.
        </QAItem>

        <Divider />

        <QAItem question="Is there a hotel block?">
          There is a hotel block at the SeaShell.{" "}
          <Link
            component="a"
            variant="body1"
            onClick={handleHotelModal}
            role="button"
            tabIndex={0}
          >
            To book within our block
          </Link>
          , you will need to call the hotel for making a reservation. If this
          block fills up, there are many other small hotels on the island that
          are a short Uber away from the SeaShell too (see our{" "}
          <Link href="/travel" sx={{ color: "primary.main", fontWeight: 500 }}>
            Travel
          </Link>{" "}
          page for other suggestions).
        </QAItem>

        <Divider />

        <QAItem question="What should I wear?">
          Cocktail attire is suggested. Weather permitting, our ceremony will be
          at the venue's private beach, so wear shoes that either slip off
          easily or won't get stuck in the sand (block heel, platform, etc).
        </QAItem>

        <Divider />

        <QAItem question="What colors will the bridal party be wearing?">
          The bridal party will be in light sage green dresses and blue suits.
        </QAItem>

        <Divider />

        <QAItem question="Are children invited?">
          Your RSVP will indicate if your children are invited.
        </QAItem>

        <Divider />

        <QAItem question="What if I have dietary restrictions?">
          When you RSVP, you can note any dietary restrictions or allergies. We
          will pass these along to the venue to assist in menu selection. Dinner
          will be a plated buffet and a staff member should be able to assist
          with avoiding any allergens or restrictions.
        </QAItem>
      </Box>

      <HotelBlockModal
        open={hotelModalOpen}
        onClose={() => setHotelModalOpen(false)}
      />
    </div>
  );
}

export default QA;
