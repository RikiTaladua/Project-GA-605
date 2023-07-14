const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

//no prepended file paths for comments router
router.get("/flights/:id/comments/new", commentsCtrl.new);


//Create comment
router.post("/flights/:id/comments", commentsCtrl.create);


//Delete comment that user has posted
router.delete("/comments/:id", commentsCtrl.delete);


//Form to edit comment
router.get("/comments/:id/edit", commentsCtrl.edit);


//Update comment with new comment
router.put("/comments/:id", commentsCtrl.update);

module.exports = router;