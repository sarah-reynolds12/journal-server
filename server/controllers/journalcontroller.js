let express = require('express'); 
let router = express.Router();
let validateSession = require('../middleware/validate-session');
let Journal = require('../db').import('../models/journal');

router.get('/practice', validateSession, function(req, res) {
    res.send('Hey! This is a practice route!')
});

//Journal Create
router.post('/create', validateSession, (req, res) => {
    const journalEntry = {
        title: req.body.journal.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry, 
        owner: req.user.id
    }
    Journal.create(journalEntry)
    .then(journal => res.status(200).json(journal))
    .catch(err => res.status(500).json({error: err}))
})

module.exports = router;