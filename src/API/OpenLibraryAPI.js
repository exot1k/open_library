import * as axios from "axios";

const openLink = 'http://openlibrary.org/';

export const openLibraryAPI = {
    searchBook(queryType,queryName,pageNumber) {
        const params = {};
        params[queryType] =  queryName;
        params['page'] = pageNumber;
       return axios.get(openLink + 'search.json', {params}).then( response => response.data)
    }
}