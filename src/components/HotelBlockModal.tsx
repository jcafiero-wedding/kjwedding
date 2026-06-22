import { Modal, Box, Typography } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 600 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: 2, sm: 4 },
  borderRadius: 2,
};

interface HotelBlockModalProps {
  open: boolean;
  onClose: () => void;
}

function HotelBlockModal({ open, onClose }: HotelBlockModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Important Information on How to Book a Reservation:
        </Typography>
        <ul>
          <li>
            Guests can call the resort at 609-492-4611 ext 1 anytime Monday -
            Saturday 12pm-5pm.
          </li>
          <li>
            Guests cannot use the online booking portal to secure a room
            within your room block.
          </li>
          <li>
            If guests call the resort and do not connect with a receptionist,
            they should leave a voicemail for a call back.
          </li>
        </ul>
      </Box>
    </Modal>
  );
}

export default HotelBlockModal;