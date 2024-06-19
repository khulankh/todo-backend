const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: String,
  createdAt: { type: String, default: Date.now },
  statusType: String,
});

const ListModel = mongoose.models.lists || mongoose.model("lists", ListSchema);

export default ListModel;
