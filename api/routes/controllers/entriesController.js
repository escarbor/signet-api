var utils = require('../../utils/utils');
var entriesService = require('../../services/entriesService');

class EntriesController {
  constructor({entriesService}) {
      this.entriesService = entriesService;
  } 
/* GET entries */
getAllEntries(req, res, next) {
  utils.startPromiseChain()
  .then(() => {
    return entriesService.getAllEntries().then((data) => {
      res.send(data);
      });
    }).catch((err) => {
      next(err);
  })
}
/* GET entry by entry_id. */
getEntryById(req, res, next) {
  let entryId = req.params.entry_id;
  if(!entryId) {
    return res.sendStatus(400)
  }
  utils.startPromiseChain()
    .then(() => {
      return res.send(entriesService.getEntryById(entryId));
    }).catch((err) => {
      next(err);
    });
}
/* POST entry */
createEntry(req, res, next) {  
    let entry = req.body;
    if(!entry) {
      return res.sendStatus(400)
    }
    utils.startPromiseChain()
    .then(() => {
      return res.send(entriesService.createEntry(entry));
    }).catch((err) => {
      next(err);
    });
  }
  deleteEntry(req, res, next) {
    let entryId = req.params.entry_id;
    if(!entryId) {
      return res.sendStatus(400)
    }
    utils.startPromiseChain()
      .then(() => {
        return res.send(entriesService.deleteEntry(entryId));
      }).catch((err) => {
        next(err);
      });
  }

}




const entriesController = new EntriesController({
  entriesService
});

module.exports = entriesController;
