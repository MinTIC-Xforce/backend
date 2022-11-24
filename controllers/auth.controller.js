import User from "../dal/models/auth.js";

export const getUser = async (req, res) => {
    try {
        const OneUser = await User.findById(req.params.id);
    
        if (!OneUser) {
          return res.sendStatus(404);
        } else {
          return res.json(OneUser);
        }
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: error.message });
    }
  };

export const createUser = async (req, res) => {
    try {
        const { idUser, userName, passwordUser, rolUser } = req.body;
        const Newuser = new User({ idUser, userName, passwordUser, rolUser });
        await Newuser.save();
        return res.json(Newuser);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
      }
    };