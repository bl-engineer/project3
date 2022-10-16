const router = require("express").Router();
const User = require("../models/User");

//Register
router.get("/register", async (req, res) => {
    const user = await new User({
        username: "Bocar",
        email: "boc@yahoo.com",
        password: "12345678"
    })

   user.save();

   res.send("Its working..")
});


module.exports = router