// import { ArrayUtils, ApiUtils, JsonUtils } from '../index';
import JsonUtils from './jsonUtils.js';
import ArrayUtils from './arrayUtils.js'

const mergedArray = ArrayUtils.mergeAndDistinct([1, 2, 3], [3, 4, 5]);
console.log("mergedArray:", mergedArray)

const jsonString = '{"name": "John", "age": 30}';
const parsedData = JsonUtils.parseJson(jsonString);
console.log("parsedData:", parsedData)
