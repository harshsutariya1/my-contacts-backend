const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact's name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact's email"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact's phone number"],
    },
}, {
    timestamps: true,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;