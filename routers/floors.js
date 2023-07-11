const express = require("express");
const { getAllFloors, addFloor } = require("../controllers/floors");

const router = express.Router();

router.get("/", getAllFloors);
router.post("/", addFloor);

module.exports = router;
