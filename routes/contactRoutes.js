const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Get all contacts" });
// });

// we can also write in one line because method is same.
router.route("/").get(getContacts).post(createContact);

// router.route("/").post((req, res) => {
//   res.status(200).json({ message: "Create contacts" });
// });

// router.route("/").post(createContact);

// router.route("/:id").get((req, res) => {
//   res.status(200).json({ message: `Get contacts for ${req.params.id}` });
// });

// similarly
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// router.route("/:id").put((req, res) => {
//   res.status(200).json({ message: `Update contacts for ${req.params.id}` });
// });

// router.route("/:id").put(updateContact);

// router.route("/:id").delete((req, res) => {
//   res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
// });

// router.route("/:id").delete(deleteContact);
router.use(validateToken);

module.exports = router;
