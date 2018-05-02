const Note = require('../Models/Note');

const noteDelete = (req, res) => {
  // const { _id } = req.body;
  Note.findByIdAndRemove(req.params.id)
    .then(resposne => {
      res
        .status(200)
        .json({ Message: `Note successfully deleted: ${response}` });
    })
    .catch(err => {
      res.status(500).json({ Error: `Unable to delete note: ${err}` });
    });
};

module.exports = noteDelete;
