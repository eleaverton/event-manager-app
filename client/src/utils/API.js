import axios from "axios";

export default {
  // Gets all events (landing page)
  getAllEvents: function() {
    return axios.get("/api/events");
  },

  //Gets the events with the searched term
  getSearchedEvents: function(search) {
    return axios.get("/api/events/search?title=" +search);
  },
  // Gets the event with the given id (single event page)
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the book with the given id (admin capability)
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves an event to the database (create new event)
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  //gets User information for sign in (may not be necessary with existing authentication pathways) and event registration
  getUser:function(id) {
    return axios.get("/api/users/"+ id);
  },
  //saves User to database (sign up)
  saveUser: function(userData) {
    return axios.post("/api/users",userData);
  },
  //gets comments associated with an event (event page)
  getComments:function(eventId){
    return axios.get("/api/comments/"+ eventId);
  },
  //saves a user posted comment (event page)
  saveComment: function(commentData){
    return axios.post("/api/comments", commentData);
  }
};
