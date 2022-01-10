import axios from "axios";
import {BASE_URL, EMAIL} from "../constants";
import { fetchData } from "./fetchData";

jest.mock("axios");

describe("fetchData", () => {
  describe("when API call is successful", () => {
    it("should return data", async () => {
      const pageNumber = '2';
      const data = {
        total: 1234567,
    rows: [{}, {}, {}]
      };
      axios.get.mockResolvedValueOnce(data);
      const result = await fetchData(pageNumber);

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}?perPage=30&page=${pageNumber}`, {
        headers: {
          Authorization: `BASIC ${EMAIL}`
        }
      });
      expect(result).toEqual(data);
    });
  });
});







