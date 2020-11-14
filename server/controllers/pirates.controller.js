const { Pirate } = require('../models/pirate.models');

module.exports = {

    // Create A New Pirate - Create
    createPirate: (req,res) => {
        Pirate.exists({ position: req.body.position })
            .then(pirateExists => {
                if(pirateExists) {
                    return Promise.reject({errors: { name: { message: "Only one captain can sail the ship."} } });
                } 
                return Pirate.create(req.body)
            })
        // Pirate.create (req.body)
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },

    // Get All Pirates - Read
    allPirates: (req,res) => {
        Pirate.find().sort({"name":1})
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // Get One Pirate Only - Read
    onePirate: (req,res) => {
        Pirate.findOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // Edit The Given Pirate - Update
    updatePirate: (req,res) => {
        Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // Delete the Pirate - Destroy
    deletePirate: (req,res) => {
        Pirate.deleteOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    }
}