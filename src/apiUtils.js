// apiUtils.js

import axios from 'axios';

const ApiUtils = {
  // 发起 GET 请求
  get: async (url, config = {}) => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw new Error(`GET request failed: ${error.message}`);
    }
  },

  // 发起 POST 请求
  post: async (url, data = {}, config = {}) => {
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      throw new Error(`POST request failed: ${error.message}`);
    }
  },

  // 发起 PUT 请求
  put: async (url, data = {}, config = {}) => {
    try {
      const response = await axios.put(url, data, config);
      return response.data;
    } catch (error) {
      throw new Error(`PUT request failed: ${error.message}`);
    }
  },

  // 发起 DELETE 请求
  delete: async (url, config = {}) => {
    try {
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      throw new Error(`DELETE request failed: ${error.message}`);
    }
  },

  // 其他自定义的 API 请求方法...
};

export default ApiUtils;

