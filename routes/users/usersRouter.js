const express = require("express");
const router = express.Router();
const { createUser, getUsers, getUserById, userBookingPUT } = require("./usersController");

router.post("/", async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.json({
      message: "User has been successfully created",
      payload: newUser,
    });
  } catch (error) {
    res.json({
      message: "failure",
      payload: error,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await getUsers()
    res.json({ message: "Successfully found users", payload: users });
} catch (error) {
    res.json({
        message: "failure",
        payload: error.message,
    });
}
});
router.get("/:userID", async (req, res) => {
    try {
        const user = await getUserById(req.params.userID)
        res.json({ message: "Successfully found user by ID", payload: user });
        
    } catch (error) {
        res.json({
          message: "failure",
          payload: error.message,
        });
        
      }
    })
//     router.put("/:userID", async (req,res) => {
//       try {
//         const user = await userBookingPUT(req.body)
//       } catch (error) {
//         res.json({
//           message: "failure",
//           payload: error.message,
//         });
        
//   }
// })
module.exports = router;
