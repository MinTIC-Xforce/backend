import Sale from "../dal/models/sales.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.send(sales);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createSale = async (req, res) => {
    try {
        const { date, idClient, amount, confirm, detailSale } = req.body;
        const Newsale = new Sale({ date, idClient, amount, confirm, detailSale  });
        await Newsale.save();
        return res.json(Newsale);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
      }
    };

export const getSalesbyId = async (req, res) => {
    try {
        const SalebyId = await Sale.findById(req.params.id);
    
        if (!SalebyId) {
          return res.sendStatus(404);
        } else {
          return res.json(SalebyId);
        }
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
      };

      export const getSalesbyUser = async (req, res) => {
        try {
            const SalebyUser = await Sale.find({"idClient": `ObjectId(${req.params.id})`}).populate("idClient");
        
            if (!SalebyUser) {
              return res.sendStatus(404);
            } else {
              return res.json(SalebyUser);
            }
          } catch (error) {
            return res.status(500).json({ message: error.message });
          }
          };