// jsonUtils.js

import JSONbig from 'json-bigint';
import JSON5 from 'json5';
import * as flatted from 'flatted';

const JsonUtils = {
  // 解析 JSON 字符串
  parseJson: (jsonString) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      throw new Error(`Failed to parse JSON: ${error.message}`);
    }
  },

  // 序列化 JavaScript 对象为 JSON 字符串
  stringifyJson: (object) => {
    try {
      return JSON.stringify(object);
    } catch (error) {
      throw new Error(`Failed to stringify object to JSON: ${error.message}`);
    }
  },

  // 使用 json-bigint 库解析 JSON 字符串
  parseJsonWithBigInt: (jsonString) => JSONbig.parse(jsonString),

  // 使用 json5 库解析 JSON 字符串
  parseJsonWithJson5: (jsonString) => JSON5.parse(jsonString),

  // 使用 flatted 库序列化 JavaScript 对象为 JSON 字符串
  stringifyJsonWithFlatted: (object) => flatted.stringify(object),

  // 其他自定义的 JSON 处理方法...
};

export default JsonUtils;
