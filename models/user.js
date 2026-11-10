const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    rationCard: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    village: { type: String, required: true },
    members: { type: Number, required: true },
    password: { type: String, required: true },
    eligible: {
        Rice: { type: Number, default: 0 },
        Wheat: { type: Number, default: 0 },
        Sugar: { type: Number, default: 0 },
        Kerosene: { type: Number, default: 0 }
    }
});

module.exports = mongoose.model("User", schema);