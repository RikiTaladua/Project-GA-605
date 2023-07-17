// //Require models here
// const Flight = require("../models/flight");

// //Export functions here
// module.exports = {
//   new: newComment,
//   create,
//   delete: deleteComment,
//   edit,
//   update,
// };

// async function newComment(req, res) {
//   try {


//     //Find flight that being commented --> into res.render
//     const flight = await Flight.findById(req.params.id)
//       .populate("pilots")
//       .exec();
//     res.render("comments/new", { flight });
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function create(req, res) {

//   //Checkbox
//   req.body.flyTogether = !!req.body.flyTogether;

//   //Add userID and username into req.body
//   req.body.userId = req.user._id;
//   req.body.userName = req.user.userName;
//   try {


//     //Find flight being commented on
//     const flight = await Flight.findById(req.params.id);


//     //Add req.body into comments model
//     flight.comments.push(req.body);


//     //Save changes to flight model
//     await flight.save();
//     res.redirect(`/flights/${flight._id}`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function deleteComment(req, res) {
//   try {


//     //Find flight that contains the comment being deleted
//     const flightWithComment = await Flight.findOne({
//       "comments._id": req.params.id,
//       "comments.userId": req.user._id,
//     });


//     //Remove comment from the comment schema in the flight
//     flightWithComment.comments.remove(req.params.id);


//     //Save changes made to flight
//     flightWithComment.save();


//     //Redirect to page for flight that has the comment
//     res.redirect(`/flights/${flightWithComment._id}`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function edit(req, res) {
//   try {
//     const flight = await Flight.findOne({
//       "comments._id": req.params.id,
//       "comments.userId": req.user._id,
//     })
//       .populate("pilots")
//       .exec();
//     const comment = flight.comments.id(req.params.id);
//     res.render("comments/edit", { flight, comment });
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function update(req, res) {
//   req.body.recommended = !!req.body.recommended;
//   try {
//     const flight = await Flight.findOne({
//       "comments._id": req.params.id,
//       "comments.userId": req.user._id,
//     });
//     const comment = flight.comments.id(req.params.id);
//     comment.content = req.body.content;
//     comment.rating = req.body.rating;
//     comment.flyTogether = req.body.flyTogether;
//     await flight.save();
//     res.redirect(`/flights/${flight._id}`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// const Flight = require("../models/flight");

// module.exports = {
//   newComment,
//   create,
//   deleteComment,
//   edit,
//   update,
// };

// async function newComment(req, res) {
//   try {
//     const flight = await Flight.findById(req.params.id)
//       .populate("pilots")
//       .exec();
//     res.render("comments/new", { flight });
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function create(req, res) {
//   req.body.flyTogether = !!req.body.flyTogether;
//   req.body.userId = req.user._id;
//   req.body.userName = req.user.userName;
//   try {
//     const flight = await Flight.findById(req.params.id);
//     flight.comments.push(req.body);
//     await flight.save();
//     res.redirect(`/flights/${flight._id}`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function deleteComment(req, res) {
//   try {
//     const flightWithComment = await Flight.findOne({
//       "comments._id": req.params.id,
//       "comments.userId": req.user._id,
//     });
//     flightWithComment.comments.remove(req.params.id);
//     await flightWithComment.save();
//     res.redirect(`/flights/${flightWithComment._id}`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function edit(req, res) {
//   try {
//     const flight = await Flight.findOne({
//       "comments._id": req.params.id,
//       "comments.userId": req.user._id,
//     })
//       .populate("pilots")
//       .exec();
//     const comment = flight.comments.id(req.params.id);
//     res.render("comments/edit", { flight, comment });
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function update(req, res) {
//   req.body.recommended = !!req.body.recommended;
//   try {
//     const flight = await Flight.findOne({
//       "comments._id": req.params.id,
//       "comments.userId": req.user._id,
//     });
//     const comment = flight.comments.id(req.params.id);
//     comment.content = req.body.content;
//     comment.rating = req.body.rating;
//     comment.flyTogether = req.body.flyTogether;
//     await flight.save();
//     res.redirect(`/flights/${flight._id}`);
//   } catch (err) {
//     console.log(err);
//   }
// }
const Flight = require("../models/flight");

module.exports = {
  newComment,
  create,
  deleteComment,
  edit,
  update,
};

async function newComment(req, res) {
  try {
    const flight = await Flight.findById(req.params.id)
      .populate("pilots")
      .exec();
    res.render("comments/new", { flight });
  } catch (err) {
    console.log(err);
  }
}

async function create(req, res) {
  req.body.flyTogether = !!req.body.flyTogether;
  req.body.userId = req.user._id;
  req.body.userName = req.user.userName;
  try {
    const flight = await Flight.findById(req.params.id);
    flight.comments.push(req.body);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
}

async function deleteComment(req, res) {
  try {
    const flightWithComment = await Flight.findOne({
      "comments._id": req.params.id,
      "comments.userId": req.user._id,
    });
    flightWithComment.comments.remove(req.params.id);
    await flightWithComment.save();
    res.redirect(`/flights/${flightWithComment._id}`);
  } catch (err) {
    console.log(err);
  }
}

async function edit(req, res) {
  try {
    const flight = await Flight.findOne({
      "comments._id": req.params.id,
      "comments.userId": req.user._id,
    })
      .populate("pilots")
      .exec();
    const comment = flight.comments.id(req.params.id);
    res.render("comments/edit", { flight, comment });
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  req.body.recommended = !!req.body.recommended;
  try {
    const flight = await Flight.findOne({
      "comments._id": req.params.id,
      "comments.userId": req.user._id,
    });
    const comment = flight.comments.id(req.params.id);
    comment.content = req.body.content;
    comment.rating = req.body.rating;
    comment.flyTogether = req.body.flyTogether;
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
}


