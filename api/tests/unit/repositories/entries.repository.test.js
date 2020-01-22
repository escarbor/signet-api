const entriesRepository = require('../../../repositories/entriesRepository');
const bootstrapper = require('../../../database/testBootstrap');

beforeEach(() => {
  return bootstrapper.testSetup();
});

afterAll(() => {
  return bootstrapper.testCleanUp();
});

describe("EntriesRepository.getAllEntries", () => {

  it('should return an array containing an Entry', () => {
    return entriesRepository.getAllEntries()
      .then(data => {
        expect(data[0]).toHaveProperty("description");
        expect(data[0]).toHaveProperty("entry_id");
      });
  });

  it('should return multiple Entires', () => {
    return entriesRepository.getAllEntries().then(data => expect(data).toHaveLength(3));
  });

  it('should return an empty array if no Entries are found', () => {
    return bootstrapper.truncateTable('entries')
      .then(entriesRepository.getAllEntries)
      .then((data) => {
        expect(data).toHaveLength(0);
        expect(data).toEqual([]);
      });
  });
});

describe("EntriesRepository.getEntryById", () => {

  it('should return an array containing an Entry', () => {
    var entry_id = '1aa80268-8011-4a19-ae74-470f37231030';
    return entriesRepository.getEntryById(entry_id)
      .then(data => {
        expect(data[0]).toHaveProperty("description");
        expect(data[0]).toHaveProperty("entry_id");
      });
  });

  it('should return one entry', () => {
    var entry_id = '1aa80268-8011-4a19-ae74-470f37231030';
    return entriesRepository.getEntryById(entry_id).then(data => expect(data).toHaveLength(1));
  });

  it('should return an empty array if no Entries are found', () => {
    var entry_id = '1aa80268-8011-4a19-ae74-470f37231030';
    return bootstrapper.truncateTable('entries')
      .then(() => { return entriesRepository.getEntryById(entry_id) })
      .then((data) => {
        expect(data).toHaveLength(0);
        expect(data).toEqual([]);
      });
  });
});

describe("EntriesRepository.createEntry", () => {

  it('should return an array containing the entry created', () => {
    var entry = {
      title: "test",
      image_url: "www.google.com",
      description: "Test description"
    }
    return entriesRepository.createEntry(entry)
      .then(data => {
        expect(data[0]).toHaveProperty("description", "Test description");
        expect(data[0]).toHaveProperty("title", "test");
      });
  });

  it('should exist in db after creation', () => {
    var entry = {
      title: "test",
      image_url: "www.google.com",
      description: "Test description"
    }
    return bootstrapper.truncateTable('entries')
      .then(() => { return entriesRepository.createEntry(entry) })
      .then((data) => {
        expect(data).toHaveLength(1);
      });
  });
});

describe("EntriesRepository.deleteEntry", () => {

  it('should return a entry_id after creating and then deleting', () => {
    var entry = {
      entry_id: 'c8752f37-020d-4170-b436-e7967994d287',
      title: "test",
      image_url: "www.google.com",
      description: "Test description"
    }
    return bootstrapper.truncateTable('entries')
    .then(() => { return entriesRepository.createEntry(entry) })
    .then((data) => {
      expect(data).toHaveLength(1);
      return data;
    })  
    .then((afterCreateData) => {
      return entriesRepository.deleteEntry(afterCreateData[0].entry_id)
        .then((postDeleteData) => {
          expect(postDeleteData).toHaveLength(1);
          expect(postDeleteData[0]).toMatch(entry.entry_id);
        });
    });
  });
});
