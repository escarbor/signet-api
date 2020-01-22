const entriesController = require('../../../routes/controllers/entriesController');
const entriesService = require('../../../services/entriesService');
const utils = require('../../../utils/utils');
const httpMocks = require('node-mocks-http');

var request = {};
var response = {};

beforeEach(() => {
  request = httpMocks.createRequest({});
  response = httpMocks.createResponse({});
});

describe("EntriesController.getAllEntries", () => {
  it("should have a getAllEntries method", () => {
    expect(typeof entriesController.getAllEntries).toBe("function");
  });
});

describe("EntriesController.getEntryById", () => {
  it("should have a getEntryById method", () => {
    expect(typeof entriesController.getEntryById).toBe("function");
  })

  it("should return a 400 if no entryId is passed", () => {
    request.params.entry_id = null;
    const getEntryById = entriesController.getEntryById(request, response);
    expect(getEntryById.statusCode).toBe(400);
  })
});

describe("EntriesController.createEntry", () => {
  it("should have a createEntry method", () => {
    expect(typeof entriesController.createEntry).toBe("function");
  });

  it("should return a 400 if no entry is passed", () => {
    request.body = null;
    const createEntry = entriesController.createEntry(request, response);
    expect(createEntry.statusCode).toBe(400);
  });
});

describe("EntriesController.deleteEntry", () => {
  it("should have a deleteEntry method", () => {
    expect(typeof entriesController.deleteEntry).toBe("function");
  });  
  
  it("should return a 400 if no entryId is passed", () => {
    request.params.entry_id = null;
    const getEntryById = entriesController.getEntryById(request, response);
    expect(getEntryById.statusCode).toBe(400);
  })

  it("should call entryService.deleteEntry once", () => {
    var id = '1aa80268-8011-4a19-ae74-470f37231030';
    var req = {params: {
        entry_id:id
    }}
    const deleteEntrySpy = jest.spyOn(entriesService, 'deleteEntry')
    deleteEntrySpy.mockImplementation(() => new Promise(resolve => resolve()));
    utils.startPromiseChain()
    .then(() => {entriesController.deleteEntry(req)})
    .then(function(data) {
      expect(entryService.deleteEntry).toHaveBeenCalledTimes(1);
    });
  });

});