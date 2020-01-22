const entriesRepository = require('../repositories/entriesRepository');


class EntriesService {
    constructor({entriesRepository}) {
        this.entriesRepository = entriesRepository;
    }

    getEntryById(entry_id) {
        return entriesRepository.getEntryById(entry_id);
    }

    getAllEntries() {
        return entriesRepository.getAllEntries();
    }

    createEntry(entry) {
        return entriesRepository.createEntry(entry);
    }

    deleteEntry(entry_id) {
        return entriesRepository.deleteEntry(entry_id);
    }
}

const entriesService = new EntriesService({
    entriesRepository
  });

module.exports = entriesService;