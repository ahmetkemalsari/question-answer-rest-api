const express = require("express");
const {getAllQuestions} = require("../controllers/questionController");
const router = express.Router();

router.get("/" ,getAllQuestions);

module.exports =router;