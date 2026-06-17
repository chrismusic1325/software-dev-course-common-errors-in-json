/*
===========================================
Using JSON | Practice 2: Debugging JSON Travel Bookings
===========================================

Scenario:
You are working as a developer on a team building a travel booking API.
A teammate created a JSON file for a hotel booking, but it contains several syntax errors.
The task is to identify the errors, correct them, and explain each fix.

Original Broken JSON:
const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15"
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]
  }
}
`;

Corrections Made:
1. Added a comma after "checkInDate": "2024-05-15"
   - JSON requires commas between key-value pairs.

2. Added quotation marks around name for Alice Johnson.
   - JSON keys must always use double quotation marks.

3. Changed "age": undefined to "age": null.
   - JSON does not allow undefined. If the value is unknown, null is valid.

4. Fixed Bob Smith's email from "bob.smith@example" to "bob.smith@example.com".
   - This makes the email look complete and realistic.

5. Removed the trailing comma after "Parking".
   - JSON does not allow trailing commas at the end of arrays or objects.

Follow-Up Questions:

1. What tools or techniques did you use to identify the errors?
I checked the JSON line by line and looked for common JSON errors such as missing commas, missing quotation marks, invalid values, and trailing commas.

2. How did you confirm that your corrected JSON file was valid?
I confirmed the corrected version by making sure all keys used double quotes, all values were valid JSON types, commas were placed correctly, and there were no trailing commas.

3. Which errors were the most difficult to spot? Why?
The missing comma after the check-in date was the most difficult to spot because the line itself looked correct, but JSON still needed a comma before the next property.

4. What strategies can help you avoid these kinds of errors in the future?
Using syntax highlighting, JSON validators, linters, careful indentation, and checking one object or array at a time can help avoid JSON syntax errors.
*/

// Corrected valid JSON stored as a JavaScript string

const validBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;

// Parse the JSON to confirm it works
const bookingData = JSON.parse(validBookingJSON);

console.log("Corrected JSON is valid.");
console.log(bookingData);
