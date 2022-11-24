import Client from "../dal/models/clients.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.send(clients);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createClients = async (req, res) => {
    try {
        const { identification, lastName, age, address, phone, name, email } = req.body;
        const Newclient = new Client({ identification, lastName, age, address, phone, name, email });
        await Newclient.save();
        return res.json(Newclient);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
      }
    };