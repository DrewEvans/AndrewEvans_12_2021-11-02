import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  /**
   * @typedef {Object} state
   */

  /**
   * @callback state
   * @param {state} state
   * @returns {void}
   */

  /**
   * @namespace {Object}
   * @property {state} null
   * @property {state} object
   */
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: null, loading: false });
    /**
     * Download data from the specified URL.
     *
     * @async
     * @function fetchUrl
     * @param {string} url - The URL to fetch from.
     * @return {Promise<string>} The data from the URL.
     */
    async function fetchData() {
      /** @constant
       * @type {string}
       * @default
       */
      const request = await axios.get(url);
      setState({ data: request.data.data, loading: false });
    }
    fetchData();
  }, [url]);

  return state;
}

export default useFetch;
