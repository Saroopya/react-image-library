import axios from 'axios';
import { BASE_URL, EMAIL } from '../constants';


const headers = {
  Authorization: `BASIC ${EMAIL}`
};
let url = `${BASE_URL}?perPage=30&page=`

export const fetchData = async (page) => {
  let response =  await axios
    .get(`${url}${page}`, {headers});
    return response
}