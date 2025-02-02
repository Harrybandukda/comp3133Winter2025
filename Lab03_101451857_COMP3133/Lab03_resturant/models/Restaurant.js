const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  cuisine: String,
  city: String,
  restaurant_id: String
}, { collection: "Restaurants" }); 


module.exports = mongoose.model("Restaurant", RestaurantSchema);
