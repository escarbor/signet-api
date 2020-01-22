const entriesService = require('../../../services/entriesService');
const entriesRepository = require('../../../repositories/entriesRepository');

describe("EntriesService.getAllEntries", () => {
    
    it("should have a getAllEntries method", () => {
        expect(typeof entriesService.getAllEntries).toBe("function");
    })
    
    it("should call getAllEntries repository method", () => {
        var response = {entry_id: '63e33de6-066a-400a-9c92-b6e15d0491bd'}
        const getAllEntriesSpy = jest.spyOn(entriesRepository, 'getAllEntries')
        getAllEntriesSpy.mockImplementation(() => new Promise(resolve => resolve(response)));
        
        return entriesService.getAllEntries().then(function(data) {
            expect(entriesRepository.getAllEntries).toHaveBeenCalledTimes(1);
            expect(data).toEqual(response);
            getAllEntriesSpy.mockRestore();
        }); 
    });
});

describe("EntriesService.getEntryById", () => {
    
    it("should have a getEntryById method", () => {
        expect(typeof entriesService.getEntryById).toBe("function");
    })
    
    it("should call getEntryById repository method", () => {
        var entry_id = '63e33de6-066a-400a-9c92-b6e15d0491bd';
        var response = {entry_id: entry_id}
        const getEntryByIdSpy = jest.spyOn(entriesRepository, 'getEntryById')
        getEntryByIdSpy.mockImplementation(() => new Promise(resolve => resolve(response)));
        
        return entriesService.getEntryById(entry_id).then(function(data) {
            expect(entriesRepository.getEntryById).toHaveBeenCalledTimes(1);
            expect(data).toEqual(response);
            getEntryByIdSpy.mockRestore();
        }); 
    });
});

describe("EntriesService.createEntry", () => {
    
    it("should have a createEntry method", () => {
        expect(typeof entriesService.createEntry).toBe("function");
    })
    
    it("should call createEntry repository method", () => {
        var entry = {};
        var response = {entry_id:'63e33de6-066a-400a-9c92-b6e15d0491bd'}
        const createEntrySpy = jest.spyOn(entriesRepository, 'createEntry')
        createEntrySpy.mockImplementation(() => new Promise(resolve => resolve(response)));
        
        return entriesService.createEntry(entry).then(function(data) {
            expect(entriesRepository.createEntry).toHaveBeenCalledTimes(1);
            expect(data).toEqual(response);
            createEntrySpy.mockRestore();
        }); 
    });
});
