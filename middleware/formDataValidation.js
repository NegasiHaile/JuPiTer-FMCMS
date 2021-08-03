const clientBusinesses = require("../models/clientBusinessModel");
const formDataValidation = {
    userDataFormValidation: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  clientBusiness: async (req, res) => {
    try {
      const {
        ownerID,
        TIN,
        businessName,
        companyName,
        TL_Image,
        city,
        subCity,
        kebele,
        woreda,
        buildingName,
        officeNumber,
        telephone,
        email,
        fax,
        branch,
        credentials,
        sw_Tech,
      } = req.body;

      const business = await clientBusinesses.findOne({ TIN });

      if (business)
        return res.status(400).json({
          msg: "There is a business with this TIN, please check the TIN!",
        });

      const newBusiness = new clientBusinesses({
        ownerID,
        TIN,
        businessName,
        companyName,
        TL_Image,
        city,
        subCity,
        kebele,
        woreda,
        buildingName,
        officeNumber,
        telephone,
        email,
        fax,
        branch,
        credentials,
        sw_Tech,
      });
        if (TIN) return res.status(400).json({ msg: "TIN Accepted" });
        return res.status(400).json({ msg: " There is no TIN Accepted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = formDataValidation;