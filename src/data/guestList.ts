export interface GuestParty {
  primaryName: string;
  guestNames: string[];
  totalAllowed: number;
}

export const invitedGuests: GuestParty[] = [
  // Add your actual guest list here
  // Example formats:
  // Single guest: { primaryName: "Guest Name", guestNames: ["Guest Name"], totalAllowed: 1 }
  // Couple: { primaryName: "John Doe", guestNames: ["John Doe", "Jane Doe"], totalAllowed: 2 }
  // Family: { primaryName: "The Smith Family", guestNames: ["John Smith", "Jane Smith", "Little Smith"], totalAllowed: 3 }
  {
    primaryName: "Anne & Steve Cafiero",
    guestNames: ["Anne Cafiero", "Steve Cafiero"],
    totalAllowed: 2,
  },
  {
    primaryName: "Chris Cafiero",
    guestNames: ["Chris Cafiero"],
    totalAllowed: 1,
  },
  {
    primaryName: "John Michael Cafiero",
    guestNames: ["John Cafiero", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Stephen Cafiero",
    guestNames: ["Stephen Cafiero", "Lauren Kaminskas"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. John Cafiero",
    guestNames: ["John Cafiero", "Glady Cafiero"],
    totalAllowed: 2,
  },
  {
    primaryName: "The Sorrentino Family",
    guestNames: [
      "Gerald Sorrentino",
      "Astrid Sorrentino",
      "Alexander Sorrentino",
      "Christian Sorrentino",
    ],
    totalAllowed: 4,
  },
  {
    primaryName: "The Sorrentino Family",
    guestNames: [
      "Jeff Sorrentino",
      "Katie Sorrentino",
      "Mackenzie Sorrentino",
      "Sydney Sorrentino",
    ],
    totalAllowed: 4,
  },
  {
    primaryName: "The Sorrentino Family",
    guestNames: ["Michael Sorrentino", "Jenny Sorrentino", "Josh Sorrentino"],
    totalAllowed: 3,
  },
  {
    primaryName: "The Pisciotta Family",
    guestNames: ["Barbara Pisciotta", "Tom Pisciotta"],
    totalAllowed: 2,
  },
  {
    primaryName: "Nick Pisciotta",
    guestNames: ["Nick Pisciotta", "Jenna Migliorino"],
    totalAllowed: 2,
  },
  {
    primaryName: "Katie Pisciotta and Andrew Lala",
    guestNames: ["Katie Pisciotta", "Andrew Lala"],
    totalAllowed: 2,
  },
  {
    primaryName: "The Pizzulo Family",
    guestNames: ["Stephanie Pizzulo", "Bob Pizzulo"],
    totalAllowed: 2,
  },
  {
    primaryName: "Victoria Pizzulo",
    guestNames: ["Victoria Pizzulo", "Leo Krupek"],
    totalAllowed: 2,
  },
  {
    primaryName: "The Cafiero Family",
    guestNames: ["Joseph Cafiero", "Cathy Cafiero", "Emma Cafiero"],
    totalAllowed: 3,
  },
  {
    primaryName: "Matthew Cafiero",
    guestNames: ["Matthew Cafiero"],
    totalAllowed: 1,
  },
  {
    primaryName: "Alyssa Cafiero and Troy Kopec",
    guestNames: ["Alyssa Cafiero", "Troy Kopec"],
    totalAllowed: 2,
  },
  {
    primaryName: "Andrew Cafiero",
    guestNames: ["Andrew Cafiero", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Brandon Cafiero",
    guestNames: ["Brandon Cafiero", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Gerald Sorrentino",
    guestNames: ["Gerald Sorrentino"],
    totalAllowed: 1,
  },
  {
    primaryName: "Joan Sorrentino",
    guestNames: ["Joan Sorrentino"],
    totalAllowed: 1,
  },
  {
    primaryName: "Dianne Scioscia",
    guestNames: ["Dianne Scioscia"],
    totalAllowed: 1,
  },
  {
    primaryName: "Frankie Scioscia",
    guestNames: ["Frankie Scioscia", "Skylar Haas"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mandi Scioscia",
    guestNames: ["Mandi Scioscia"],
    totalAllowed: 1,
  },
  {
    primaryName: "Nikki Scioscia",
    guestNames: ["Nikki Scioscia"],
    totalAllowed: 1,
  },
  {
    primaryName: "Laura Oliveto and Luis Nino",
    guestNames: ["Laura Oliveto", "Luis Nino"],
    totalAllowed: 2,
  },
  {
    primaryName: "Julia Panko and Guest",
    guestNames: ["Julia Panko", "Daniel Coates"],
    totalAllowed: 2,
  },
  {
    primaryName: "Victoria Cilurzo and Ray Ali",
    guestNames: ["Victoria Cilurzo", "Ray Ali"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mary McKeon and Nick Gattuso",
    guestNames: ["Mary McKeon", "Nick Gattuso"],
    totalAllowed: 2,
  },
  {
    primaryName: "Dan and Emily Blackburn",
    guestNames: ["Dan Blackburn", "Emily Blackburn"],
    totalAllowed: 2,
  },
  {
    primaryName: "Rachel Cipkins and David Horowitz",
    guestNames: ["Rachel Cipkins", "David Horowitz"],
    totalAllowed: 2,
  },
  {
    primaryName: "Erika McCarthy and Jack Frazier",
    guestNames: ["Erika McCarthy", "Jack Frazier"],
    totalAllowed: 2,
  },
  {
    primaryName: "Kaitlyn Casiano",
    guestNames: ["Kaitlyn Casiano"],
    totalAllowed: 1,
  },
  {
    primaryName: "Jen Searing and Guest",
    guestNames: ["Jen Searing", "Peter Demkowicz"],
    totalAllowed: 2,
  },
  {
    primaryName: "Joe Miles",
    guestNames: ["Joe Miles"],
    totalAllowed: 1,
  },
  {
    primaryName: "Frankie Guarini",
    guestNames: ["Frankie Guarini", "Elaine Nghiem"],
    totalAllowed: 2,
  },
  {
    primaryName: "Daniel Kilgore",
    guestNames: ["Daniel Kilgore"],
    totalAllowed: 1,
  },
  {
    primaryName: "Daniel Faulisi",
    guestNames: ["Daniel Faulisi"],
    totalAllowed: 1,
  },
  {
    primaryName: "Nick Zubrycki",
    guestNames: ["Nick Zubrycki"],
    totalAllowed: 1,
  },
  {
    primaryName: "Sean Gallagher",
    guestNames: ["Sean Gallagher", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Brianne Trollo",
    guestNames: ["Brianne Trollo"],
    totalAllowed: 1,
  },
  {
    primaryName: "Dan and Brianna Salerno",
    guestNames: ["Dan Salerno", "Brianna Salerno"],
    totalAllowed: 2,
  },
  {
    primaryName: "Kailee Pedersen",
    guestNames: ["Kailee Pedersen"],
    totalAllowed: 1,
  },
  {
    primaryName: "Erin and Miles Reto",
    guestNames: ["Erin Reto", "Miles Reto"],
    totalAllowed: 2,
  },
  {
    primaryName: "Debbie and Joseph Alexander",
    guestNames: ["Debbie Alexander", "Joseph Alexander"],
    totalAllowed: 2,
  },
  {
    primaryName: "Amanda and Todd Ludwinski",
    guestNames: ["Amanda Ludwinski", "Todd Ludwinski"],
    totalAllowed: 2,
  },
  {
    primaryName: "Carla and Vicente Coelho",
    guestNames: ["Carla Coelho", "Vicente Coelho"],
    totalAllowed: 2,
  },
  {
    primaryName: "Ray and Todd Ciemniecki",
    guestNames: ["Ray Ciemniecki", "Todd Ciemniecki"],
    totalAllowed: 2,
  },
  {
    primaryName: "Bernie and June Hyland",
    guestNames: ["Bernie Hyland", "June Hyland"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. Rob Richers",
    guestNames: ["Rob Richers", "Mary Richers"],
    totalAllowed: 2,
  },
  {
    primaryName: "The Richers Family",
    guestNames: [
      "Matt Richers",
      "Jessica Richers",
      "Sarah Richers",
      "Hannah Richers",
    ],
    totalAllowed: 4,
  },
  {
    primaryName: "Robert Gutierrez",
    guestNames: ["Robert Gutierrez", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Richard Gutierrez",
    guestNames: ["Richard Gutierrez", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Eileen and Ed Clark",
    guestNames: ["Eileen Clark", "Ed Clark"],
    totalAllowed: 2,
  },
  {
    primaryName: "Eddie Clark",
    guestNames: ["Eddie Clark"],
    totalAllowed: 1,
  },
  {
    primaryName: "Regina and Fred Amoroso",
    guestNames: ["Regina Amoroso", "Fred Amoroso"],
    totalAllowed: 2,
  },
  {
    primaryName: "Ashlee and Simon Gouldstone",
    guestNames: ["Ashlee Gouldstone", "Simon Gouldstone"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. Austin Amoroso",
    guestNames: ["Austin Amoroso", "Kristen Amoroso"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. Adam Amoroso",
    guestNames: ["Adam Amoroso", "Abby Amoroso"],
    totalAllowed: 2,
  },
  {
    primaryName: "April and Mark Jasa",
    guestNames: ["April Jasa", "Mark Jasa"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. John Richers and Eduardo Leff Godden",
    guestNames: ["John Richers", "Valerie Richers", "Eduardo Leff Godden"],
    totalAllowed: 3,
  },
  {
    primaryName: "Taylor Richers",
    guestNames: ["Taylor Richers"],
    totalAllowed: 1,
  },
  {
    primaryName: "Kathy and Ron Bicknell",
    guestNames: ["Kathy Bicknell", "Ron Bicknell"],
    totalAllowed: 2,
  },
  {
    primaryName: "Stephanie and Zachary Bicknell",
    guestNames: ["Stephanie Bicknell", "Zachary Bicknell"],
    totalAllowed: 2,
  },
  {
    primaryName: "Kameryn and Gregory Bicknell",
    guestNames: ["Kameryn Bicknell", "Gregory Bicknell"],
    totalAllowed: 2,
  },
  {
    primaryName: "Cara Richers and Kevin Golden",
    guestNames: ["Cara Richers", "Kevin Golden"],
    totalAllowed: 2,
  },
  {
    primaryName: "Kelly and Colin Grimm",
    guestNames: ["Kelly Grimm", "Colin Grimm"],
    totalAllowed: 2,
  },
  {
    primaryName: "Alyssa and Matt Berka",
    guestNames: ["Alyssa Berka", "Matt Berka"],
    totalAllowed: 2,
  },
  {
    primaryName: "Dan Gilman",
    guestNames: ["Dan Gilman", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Brian Lowrey",
    guestNames: ["Brian Lowrey"],
    totalAllowed: 1,
  },
  {
    primaryName: "Maggie and Billy Johnston",
    guestNames: ["Maggie Johnston", "Billy Johnston"],
    totalAllowed: 2,
  },
  {
    primaryName: "Amanda and Tyler Della Badia",
    guestNames: ["Amanda Della Badia", "Tyler Della Badia"],
    totalAllowed: 2,
  },
  {
    primaryName: "Brittany and Andrew Brockel",
    guestNames: ["Brittany Brockel", "Andrew Brockel"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mara and Daniel Lubranski",
    guestNames: ["Mara Lubranski", "Daniel Lubranski"],
    totalAllowed: 2,
  },
  {
    primaryName: "Jamie and Mark Koransky",
    guestNames: ["Jamie Koransky", "Mark Koransky"],
    totalAllowed: 2,
  },
  {
    primaryName: "Kristen and Mike Roth",
    guestNames: ["Kristen Roth", "Mike Roth"],
    totalAllowed: 2,
  },
  {
    primaryName: "Alexis and Joe DiPaolo",
    guestNames: ["Alexis DiPaolo", "Joe DiPaolo"],
    totalAllowed: 2,
  },
  {
    primaryName: "Jackie and Kevin Maroney",
    guestNames: ["Jackie Maroney", "Kevin Maroney"],
    totalAllowed: 2,
  },
  {
    primaryName: "Alyssa and Dan Breslin",
    guestNames: ["Alyssa Breslin", "Dan Breslin"],
    totalAllowed: 2,
  },
  {
    primaryName: "Sirene and Will Walsh",
    guestNames: ["Sirene Walsh", "Will Walsh"],
    totalAllowed: 2,
  },
  {
    primaryName: "Helen and Chris Plunkett",
    guestNames: ["Helen Plunkett", "Chris Plunkett"],
    totalAllowed: 2,
  },
  {
    primaryName: "Kate Doherty and John Astrue",
    guestNames: ["Kate Doherty", "John Astrue"],
    totalAllowed: 2,
  },
  {
    primaryName: "Kaitlyn and Eddie Reilly",
    guestNames: ["Kaitlyn Reilly", "Eddie Reilly"],
    totalAllowed: 2,
  },
  {
    primaryName: "Jennifer and Michael Albanese",
    guestNames: ["Jennifer Albanese", "Michael Albanese"],
    totalAllowed: 2,
  },
  {
    primaryName: "Chelsea and Mike Lombardi",
    guestNames: ["Chelsea Lombardi", "Mike Lombardi"],
    totalAllowed: 2,
  },
  {
    primaryName: "Jill and Pat Keating",
    guestNames: ["Jill Keating", "Pat Keating"],
    totalAllowed: 2,
  },
  {
    primaryName: "Shane Faherty and Brendan Barry",
    guestNames: ["Shane Faherty", "Brendan Barry"],
    totalAllowed: 2,
  },
  {
    primaryName: "Jamie Marchini",
    guestNames: ["Jamie Marchini", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. David Roth",
    guestNames: ["David Roth", "Connie Roth"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. William Johnston",
    guestNames: ["William Johnston", "Maureen Johnston"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. Gilman",
    guestNames: ["Keith Gilman", "Colleen Gilman"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. Tomlinson",
    guestNames: ["Bob Tomlinson", "Sue Tomlinson"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. Dennis Smith",
    guestNames: ["Dennis Smith"],
    totalAllowed: 1,
  },
  {
    primaryName: "Mr. & Mrs. Francis Lewis",
    guestNames: ["Francis Lewis", "Mary Lewis"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. & Mrs. John Lewis",
    guestNames: ["John Lewis", "Annette Lewis"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. & Mrs. Peter Lewis",
    guestNames: ["Peter Lewis", "Wendy Lewis"],
    totalAllowed: 2,
  },
  {
    primaryName: "Ms. Mary Daidone",
    guestNames: ["Mary Daidone"],
    totalAllowed: 1,
  },
  {
    primaryName: "Mr. John Lewis",
    guestNames: ["John Lewis"],
    totalAllowed: 1,
  },
  {
    primaryName: "Mrs. Marguerite Lewis",
    guestNames: ["Marguerite Lewis"],
    totalAllowed: 1,
  },
  {
    primaryName: "Mr. Patrick Lewis",
    guestNames: ["Patrick Lewis"],
    totalAllowed: 1,
  },
  {
    primaryName: "Margaret McSweeney & Lori Grace",
    guestNames: ["Margaret McSweeney", "Lori Grace"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. & Mrs. Glen Straffi",
    guestNames: ["Glen Straffi", "Gina Straffi"],
    totalAllowed: 2,
  },
  {
    primaryName: "Ms. Sophia Pasierski",
    guestNames: ["Sophia Pasierski", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. & Mrs. Don Ferrer",
    guestNames: ["Don Ferrer", "Jacqui Ferrer"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. & Mrs. McQuade",
    guestNames: ["Ed McQuade", "Cathy McQuade"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. & Mrs. Russell Calkin",
    guestNames: ["Russell Calkin", "Judy Calkin"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. & Mrs. Terence McSweeney",
    guestNames: ["Terence McSweeney", "Andrea McSweeney"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. Barry Johnson & Guest",
    guestNames: ["Barry Johnson", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. Robert Marino",
    guestNames: ["Robert Marino", "Guest"],
    totalAllowed: 2,
  },
  {
    primaryName: "Mr. and Mrs. Troy Walker",
    guestNames: ["Troy Walker", "Marie Walker"],
    totalAllowed: 2,
  },
  {
    primaryName: "Ms. Jacqueline Halldow & Mr. Mark Aesch",
    guestNames: ["Jacqueline Halldow", "Mark Aesch"],
    totalAllowed: 2,
  },
];

export const findGuestParty = (inputName: string): GuestParty | null => {
  const normalizedInput = inputName.toLowerCase().trim();

  return (
    invitedGuests.find(
      (party) =>
        // Exact match on primary name
        party.primaryName.toLowerCase() === normalizedInput ||
        // Exact match on any guest name
        party.guestNames.some(
          (name) => name.toLowerCase() === normalizedInput
        ) ||
        // Primary name starts with input (for autocomplete)
        party.primaryName.toLowerCase().startsWith(normalizedInput) ||
        // Any guest name starts with input
        party.guestNames.some((name) =>
          name.toLowerCase().startsWith(normalizedInput)
        )
    ) || null
  );
};
