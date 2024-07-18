const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const multer = require("../middleware/multer-config");

const stuffController = require("../controllers/stuff");

router.post("/", auth, multer, stuffController.createThing);
router.put("/:id", auth, multer, stuffController.modifieThing);
router.get("/:id", auth, stuffController.getOneThing);
router.get("/", auth, stuffController.getAllThing);
router.delete("/:id", auth, stuffController.deleteOneThing);

module.exports = router;
