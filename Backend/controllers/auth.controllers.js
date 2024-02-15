import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import bcrypt from 'bcryptjs'
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passwords don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username already exist" });
    }
    //hash passcode
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt)

    // https avatar api
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password:hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if(newUser){
//generate jwt token
generateTokenAndSetCookie(newUser._id,res);

    await newUser.save();
    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
    });
} else{
    res.status(400).json({ error: "invalid user data" });
}
  } catch (error) {
    console.log("Error controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export const login = (req, res) => {
  res.send("loginUser");
  console.log("login User");
};

export const logout = (req, res) => {
  res.send("logoutUser");
  console.log("logout User");
};
