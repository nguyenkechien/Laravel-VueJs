import axios from "axios";
import config from "../../config";

/**
 *
 * @param {String} endpoint
 * @param {String} method
 * @param {Object} body
 * @type axios
 * Gọi API
 */
export const ApiCaller = async (endpoint, method = "GET", body) => {
  let api = await axios({
    method: method,
    url: `${config.DOMAIN_API}/${endpoint}`,
    data: body
  });

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return error.response;
    }
  );

  try {
    return await api;
  } catch (err) {
    console.log(err);
  }
};

/**
 * @type {axios}
 * Gọi API
 */
export default ApiCaller;
