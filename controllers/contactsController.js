//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "Here are all the Contacts!" });
};

//@desc Get a single contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Here is the contact with id: ${req.params.id}` });
};

//@desc Create a new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    res.status(201).json({ message: "New contact created!", contactInfo: req.body });
};

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Contact with id: ${req.params.id} updated!` });
};

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Contact with id: ${req.params.id} deleted!` });
};

module.exports = {
    getContacts, getContact, createContact, updateContact, deleteContact,
};