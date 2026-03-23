attendeeId = 'T001';
attendeeName = "Alice Smith";
event = "JavaScript Conference";
ticketType = "VIP";
ticketPrice = 150;

attendee = {
  attendeeId,
  name: attendeeName,
  event,
  ticketType,
  ticketPrice
};

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

function removeEventProperty(attendee) {
  delete attendee.event;
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}




//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};