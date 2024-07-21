const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error) return res.status(400).send({ message: error.details[0].message });
  
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(401).send({ message: "Invalid Email or Password" });
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });
  
      const token = user.generateAuthToken();
  
      // Set userId in local storage
    //   localStorage.setItem('userId', user._id);
    //   console.log('User ID set in local storage:', user._id);
  
      // Send userId along with the token in the response
      res.status(200).send({ userId: user._id, token, message: "Logged in successfully" });
  
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
