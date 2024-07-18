const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const stuffController = require("../controllers/stuff");

router.post("/", auth, stuffController.createThing);
router.put("/:id", auth, stuffController.modifieThing);
router.get("/:id", auth, stuffController.getOneThing);
router.get("/", auth, stuffController.getAllThing);
router.delete("/:id", auth, stuffController.deleteOneThing);

module.exports = router;
