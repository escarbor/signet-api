const dbContext = require('../database/dbContext');

class EntriesRepository {
    constructor({dbContext}) {
        this.dbContext = dbContext;
    }

    getAllEntries() {
        return dbContext.select().from('entries')
        .then((data) => {
            if(data.length > 0){
                return data;
            }
            return [];
        }).catch(err => console.log(err));
    }

    getEntryById(entry_id) {
        return dbContext.select().from('entries').where('entry_id', entry_id)
        .then((data) => {
            if(data.length > 0){
                return data;
            }
            return [];
        });
    }

    createEntry(entry) {
        return dbContext('entries')
        .returning(['entry_id','title', 'description', 'image_url'])
        .insert(entry)
        .then((data) => {
            if(data.length > 0){
                return data;
            }
            return [];
        });
    }
    
    deleteEntry(entry_id) {
        return dbContext('entries')
        .where('entry_id', entry_id)
        .update('isDeleted', true)
        .returning('entry_id')
        .then((data) => {
            if(data.length > 0){
                return data;
            }
            return [];
        });
    }
}

const entriesRepository = new EntriesRepository({
    dbContext
});

module.exports = entriesRepository;