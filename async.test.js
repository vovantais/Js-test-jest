const axios = require('axios');
const Ajax = require("./async");

jest.mock("axios");

describe('Ajax GET', () => { 
     let response;
     let todos;

     beforeEach(() => {
        todos = [
            {
                userId: 1,
                id: 1,
                title: "delectus aut autem",
                completed: false
            }
        ]
     });

     response = { data : { todos }};

     it('should return data from backend', () => {
        axios.get.mockReturnValue(response);

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos);
        });
     });
});