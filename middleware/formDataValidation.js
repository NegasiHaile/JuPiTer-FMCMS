const userDataFormValidation = async (req, res, next) => {
    try {
        const name = req.body.name;
        console.log("Test middileware " + name)

        next()
    }catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    userDataFormValidation
}