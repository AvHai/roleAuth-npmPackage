import User from "../models/user.model";
import { generateToken } from "../utils/token.js";


const register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const user = new User({ username, email, password,role });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export { register, login };