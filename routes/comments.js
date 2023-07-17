const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

// Route for rendering the form to create a new comment
router.get("/flights/:id/comments/new", commentsCtrl.newComment);

// Route for creating a new comment
router.post("/flights/:id/comments", commentsCtrl.create);

// Route for deleting a comment that a user has posted
router.delete("/comments/:id", commentsCtrl.deleteComment);

// Route for rendering the form to edit a comment
router.get("/comments/:id/edit", commentsCtrl.edit);

// Route for updating a comment with new content
router.put("/comments/:id", commentsCtrl.update);

module.exports = router;

