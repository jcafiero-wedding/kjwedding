/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Autocomplete,
} from "@mui/material";
import {
  findGuestParty,
  type GuestParty,
  invitedGuests,
} from "../data/guestList";

interface LatestResponse {
  timestamp: string;
  primaryName: string;
  attendingGuests: string;
  notAttendingGuests: string;
  totalAttending: string;
  dietaryRestrictions: string;
}

interface RSVPCheckResult {
  exists: boolean;
  latestResponse?: LatestResponse;
}

function RSVP() {
  const [step, setStep] = useState(0);
  const [inputName, setInputName] = useState("");
  const [selectedGuest, setSelectedGuest] = useState<GuestParty | null>(null);
  const [filteredGuests, setFilteredGuests] = useState<GuestParty[]>([]);
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const [nameError, setNameError] = useState("");
  const [guestParty, setGuestParty] = useState<GuestParty | null>(null);
  const [rsvpData, setRsvpData] = useState<{ [key: string]: "Yes" | "No" }>({});
  const [dietaryData, setDietaryData] = useState<{ [key: string]: string }>({});
  const [guestNames, setGuestNames] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [hasAlreadyRSVPd, setHasAlreadyRSVPd] = useState(false);
  const [previousResponse, setPreviousResponse] =
    useState<LatestResponse | null>(null);

  // Filter guests as user types (after 2+ characters)
  const handleNameInputChange = (value: string) => {
    setInputName(value);
    setSelectedGuest(null);
    setNameError(""); // Clear any existing errors

    if (value.length >= 2) {
      const filtered = invitedGuests.filter((party) => {
        const primaryMatch = party.primaryName
          .toLowerCase()
          .includes(value.toLowerCase());
        const guestMatch = party.guestNames.some((name) =>
          name.toLowerCase().includes(value.toLowerCase())
        );
        return primaryMatch || guestMatch;
      });
      setFilteredGuests(filtered);
      setAutocompleteOpen(filtered.length > 0);
    } else {
      setFilteredGuests([]);
      setAutocompleteOpen(false);
    }
  };

  // Handle selection from dropdown
  const handleGuestSelection = (guest: GuestParty | null) => {
    setSelectedGuest(guest);
    if (guest) {
      setInputName(guest.primaryName);
      setFilteredGuests([]);
      setAutocompleteOpen(false);
    }
  };

  const checkExistingRSVP = async (
    primaryName: string
  ): Promise<RSVPCheckResult> => {
    try {
      const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
      const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

      if (!SHEET_ID || !API_KEY) {
        console.warn("Google Sheets credentials not configured");
        return { exists: false };
      }

      // Get all columns to access timestamps and full response data
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Form Responses 1!A:Z?key=${API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);

        // Try alternative sheet name if Form Responses 1 doesn't work
        if (errorText.includes("Unable to parse range")) {
          const altUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Form responses 1!A:Z?key=${API_KEY}`;
          const altResponse = await fetch(altUrl);

          if (altResponse.ok) {
            const altData = await altResponse.json();
            return processSheetData(altData, primaryName);
          }
        }

        return { exists: false };
      }

      const data = await response.json();
      return processSheetData(data, primaryName);
    } catch (error) {
      console.error("Error checking existing RSVP:", error);
      return { exists: false };
    }
  };

  const processSheetData = (
    data: { values?: string[][] },
    primaryName: string
  ): RSVPCheckResult => {
    const rows = data.values || [];

    if (rows.length === 0) {
      return { exists: false };
    }

    // Find all rows that match the primary name (column B, index 1)
    const matchingRows = rows.filter((row: string[], index: number) => {
      if (index === 0) return false; // Skip header row
      const nameInRow = row[1]; // Column B
      return (
        nameInRow &&
        nameInRow.toLowerCase().trim() === primaryName.toLowerCase().trim()
      );
    });

    if (matchingRows.length === 0) {
      return { exists: false };
    }

    // Sort by timestamp (column A, index 0) to get the most recent
    const sortedRows = matchingRows.sort(
      (a: (string | number | Date)[], b: (string | number | Date)[]) => {
        const timestampA = new Date(a[0]);
        const timestampB = new Date(b[0]);
        return timestampB.getTime() - timestampA.getTime(); // Most recent first
      }
    );

    const latestResponse = sortedRows[0];

    return {
      exists: true,
      latestResponse: {
        timestamp: latestResponse[0],
        primaryName: latestResponse[1],
        attendingGuests: latestResponse[2] || "",
        notAttendingGuests: latestResponse[3] || "",
        totalAttending: latestResponse[4] || "0",
        dietaryRestrictions: latestResponse[5] || "",
      },
    };
  };

  const validateAndProceed = async () => {
    // Use selected guest if available, otherwise try to find by input
    const party = selectedGuest || findGuestParty(inputName);

    if (!party) {
      setNameError(
        "Name not found on guest list. Please select your name from the dropdown or check spelling."
      );
      return;
    }

    setIsChecking(true);

    // Check if this party has already RSVP'd
    const rsvpCheck = await checkExistingRSVP(party.primaryName);
    setHasAlreadyRSVPd(rsvpCheck.exists);
    setPreviousResponse(rsvpCheck.latestResponse || null);

    if (rsvpCheck.exists && rsvpCheck.latestResponse) {
      // Pre-populate form with previous response
      const prevResponse = rsvpCheck.latestResponse;
      const attendingList = prevResponse.attendingGuests
        .split(", ")
        .filter(Boolean);

      const initialRsvp: { [key: string]: "Yes" | "No" } = {};
      const initialDietary: { [key: string]: string } = {};
      const initialGuestNames: { [key: string]: string } = {};

      party.guestNames.forEach((name) => {
        // Check if this guest was attending (handle Guest (Name) format)
        const wasAttending = attendingList.some((attendingGuest) => {
          if (name === "Guest") {
            // Check for "Guest (Actual Name)" format
            const guestMatch = attendingGuest.match(/^Guest \((.+)\)$/);
            if (guestMatch) {
              initialGuestNames[name] = guestMatch[1];
              return true;
            }
            return attendingGuest === name;
          }
          return attendingGuest === name;
        });

        initialRsvp[name] = wasAttending ? "Yes" : "No";
        initialDietary[name] = "";
        if (!initialGuestNames[name]) {
          initialGuestNames[name] = "";
        }
      });

      // Parse dietary restrictions
      if (prevResponse.dietaryRestrictions) {
        const dietaryPairs = prevResponse.dietaryRestrictions.split("; ");
        dietaryPairs.forEach((pair: string) => {
          const [name, restriction] = pair.split(": ");
          if (name && restriction) {
            initialDietary[name.trim()] = restriction.trim();
          }
        });
      }

      setRsvpData(initialRsvp);
      setDietaryData(initialDietary);
      setGuestNames(initialGuestNames);
    } else {
      // Initialize with default values for new RSVP
      const initialRsvp: { [key: string]: "Yes" | "No" } = {};
      const initialDietary: { [key: string]: string } = {};
      const initialGuestNames: { [key: string]: string } = {};
      party.guestNames.forEach((name) => {
        initialRsvp[name] = "No";
        initialDietary[name] = "";
        initialGuestNames[name] = "";
      });
      setRsvpData(initialRsvp);
      setDietaryData(initialDietary);
      setGuestNames(initialGuestNames);
    }

    setNameError("");
    setGuestParty(party);

    setIsChecking(false);
    setStep(1);
  };

  const handleDietaryChange = (guestName: string, dietary: string) => {
    setDietaryData((prev) => ({
      ...prev,
      [guestName]: dietary,
    }));
  };

  const handleGuestRsvp = (guestName: string, attending: "Yes" | "No") => {
    setRsvpData((prev) => ({
      ...prev,
      [guestName]: attending,
    }));
  };

  const handleGuestNameChange = (originalName: string, actualName: string) => {
    setGuestNames((prev) => ({
      ...prev,
      [originalName]: actualName,
    }));
  };

  const handleSubmit = async () => {
    if (!guestParty) return;

    // Validate that all attending "Guest" entries have names filled out
    const attendingGuests = Object.entries(rsvpData).filter(
      ([_, attending]) => attending === "Yes"
    );
    
    const missingGuestNames = attendingGuests.filter(
      ([name, _]) => name === "Guest" && !guestNames[name]?.trim()
    );

    if (missingGuestNames.length > 0) {
      alert("Please enter the full name for all attending guests.");
      return;
    }

    const attendingGuestsList = attendingGuests.map(([name, _]) => {
      if (name === "Guest" && guestNames[name]?.trim()) {
        return `Guest (${guestNames[name].trim()})`;
      }
      return name;
    });

    const notAttendingGuests = Object.entries(rsvpData)
      .filter(([_, attending]) => attending === "No")
      .map(([name, _]) => name);

    // Create dietary restrictions summary for attending guests
    const attendingDietary = attendingGuestsList
      .map((name) => {
        // For Guest (Name) format, use the original "Guest" key for dietary lookup
        const lookupName = name.startsWith("Guest (") ? "Guest" : name;
        const dietary = dietaryData[lookupName]?.trim();
        return dietary ? `${name}: ${dietary}` : null;
      })
      .filter(Boolean)
      .join("; ");

    // Submit to Google Forms
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScKhXHCaZNAPeGXrZ37UQCLhHYlrG1b0y0G7FUPGhhoReSh3g/formResponse";
    const formDataToSubmit = new FormData();

    // Google Form field IDs from your form
    formDataToSubmit.append("entry.2016896556", guestParty.primaryName); // Primary Name
    formDataToSubmit.append("entry.1162753304", attendingGuestsList.join(", ")); // Attending Guests
    formDataToSubmit.append("entry.898086083", notAttendingGuests.join(", ")); // Not Attending
    formDataToSubmit.append(
      "entry.1586449974",
      attendingGuestsList.length.toString()
    ); // Total Attending
    formDataToSubmit.append("entry.1602854707", attendingDietary); // Dietary Restrictions

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors",
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (submitted) {
    return (
      <div className="page-content">
        <Typography variant="h1" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1">
          Your RSVP has been {hasAlreadyRSVPd ? "updated" : "submitted"}{" "}
          successfully.
        </Typography>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Typography variant="h1" gutterBottom>
        RSVP
      </Typography>

      <Box maxWidth="800px" margin="auto">
        <Stepper activeStep={step} sx={{ mb: 4 }}>
          <Step>
            <StepLabel>Find Your Invitation</StepLabel>
          </Step>
          <Step>
            <StepLabel>RSVP Details</StepLabel>
          </Step>
        </Stepper>
      </Box>

      {step === 0 && (
        <Box sx={{ maxWidth: 500, mx: "auto" }}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Please enter your name as it appears on your invitation:
          </Typography>

          <Autocomplete
            freeSolo
            options={filteredGuests}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.primaryName
            }
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <Box>
                  <Typography variant="body1">{option.primaryName}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Party of {option.totalAllowed}:{" "}
                    {option.guestNames.join(", ")}
                  </Typography>
                </Box>
              </Box>
            )}
            inputValue={inputName}
            onInputChange={(_, value) => handleNameInputChange(value)}
            onChange={(_, value) =>
              handleGuestSelection(value as GuestParty | null)
            }
            open={autocompleteOpen}
            onOpen={() => setAutocompleteOpen(true)}
            onClose={() => setAutocompleteOpen(false)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Full Name"
                error={!!nameError}
                helperText={
                  nameError || "Type at least 2 characters to see suggestions"
                }
                onKeyPress={(e) => e.key === "Enter" && validateAndProceed()}
              />
            )}
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={validateAndProceed}
            disabled={!inputName.trim() || isChecking}
            fullWidth
          >
            {isChecking ? "Checking..." : "Find My Invitation"}
          </Button>
        </Box>
      )}

      {step === 1 && guestParty && (
        <Box sx={{ maxWidth: 600, mx: "auto" }}>
          {hasAlreadyRSVPd ? (
            <Alert severity="info" sx={{ mb: 3 }}>
              We found your previous RSVP response
              {previousResponse?.timestamp &&
                ` from ${new Date(previousResponse.timestamp).toLocaleDateString()}`}
              . You can review and update your information below if needed.
            </Alert>
          ) : (
            <Alert severity="success" sx={{ mb: 3 }}>
              Found your invitation! You have {guestParty.totalAllowed} guest
              {guestParty.totalAllowed > 1 ? "s" : ""} invited.
            </Alert>
          )}

          <Typography variant="h5" sx={{ mb: 3 }}>
            Please RSVP for each person:
          </Typography>

          {guestParty.guestNames.map((guestName) => (
            <Card key={guestName} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {guestName}
                </Typography>
                <FormControl component="fieldset" sx={{ mb: 2 }}>
                  <RadioGroup
                    row
                    value={rsvpData[guestName] || "Yes"}
                    onChange={(e) =>
                      handleGuestRsvp(guestName, e.target.value as "Yes" | "No")
                    }
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Will attend"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="Cannot attend"
                    />
                  </RadioGroup>
                </FormControl>

                {rsvpData[guestName] === "Yes" && (
                  <>
                    {guestName === "Guest" && (
                      <TextField
                        fullWidth
                        label="Guest's full name"
                        placeholder="Enter guest's full name"
                        value={guestNames[guestName] || ""}
                        onChange={(e) =>
                          handleGuestNameChange(guestName, e.target.value)
                        }
                        size="small"
                        sx={{ mb: 2 }}
                        required
                      />
                    )}
                    <TextField
                      fullWidth
                      label="Dietary restrictions or allergies"
                      placeholder="e.g., vegetarian, gluten-free, nut allergy"
                      value={dietaryData[guestName] || ""}
                      onChange={(e) =>
                        handleDietaryChange(guestName, e.target.value)
                      }
                      size="small"
                    />
                  </>
                )}
              </CardContent>
            </Card>
          ))}

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="outlined" onClick={() => setStep(0)}>
              Back
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{ flex: 1 }}
            >
              {hasAlreadyRSVPd ? "Update RSVP" : "Submit RSVP"}
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default RSVP;
