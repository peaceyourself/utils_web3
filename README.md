# 项目名称

该项目是一个 JavaScript 工具库，提供了一些常用的工具函数和方法，包括数组处理、API 请求封装以及 JSON 数据处理等功能。

## 安装

```bash
npm install utils_web3
```

## 使用方法

### 导入模块

```javascript
import { ArrayUtils, ApiUtils, JsonUtils } from 'utils_web3';
```

### 数组工具(ArrayUtils)

#### 合并并去重多个数组

```javascript
ArrayUtils.mergeAndDistinct(array1, array2, ...);
```

#### 将数组分割成指定大小的块

```javascript
ArrayUtils.chunkArray(array, size);
```

#### 获取数组中的最大值

```javascript
ArrayUtils.getMaxValue(array);
```

#### 获取数组中的最小值

```javascript
ArrayUtils.getMinValue(array);
```

#### 获取数组中的平均值

```javascript
ArrayUtils.getAverageValue(array);
```

#### 获取数组中的中位数

```javascript
ArrayUtils.getMedianValue(array);
```

#### 检查数组是否包含指定元素

```javascript
ArrayUtils.contains(array, element);
```

#### 数组去重

```javascript
ArrayUtils.distinct(array);
```

#### 在数组中查找元素的索引位置

```javascript
ArrayUtils.findIndex(array, predicate);
```

#### 移除数组中指定元素

```javascript
ArrayUtils.remove(array, element);
```

#### 将数组中的元素按照指定大小分组

```javascript
ArrayUtils.groupBySize(array, size);
```

### API 请求封装(ApiUtils)

#### 发起 GET 请求

```javascript
ApiUtils.get(url, config);
```

#### 发起 POST 请求

```javascript
ApiUtils.post(url, data, config);
```

#### 发起 PUT 请求

```javascript
ApiUtils.put(url, data, config);
```

#### 发起 DELETE 请求

```javascript
ApiUtils.delete(url, config);
```

### JSON 数据处理(JsonUtils)

#### 解析 JSON 字符串

```javascript
JsonUtils.parseJson(jsonString);
```

#### 序列化 JavaScript 对象为 JSON 字符串

```javascript
JsonUtils.stringifyJson(object);
```

#### 使用 json-bigint 库解析 JSON 字符串

```javascript
JsonUtils.parseJsonWithBigInt(jsonString);
```

#### 使用 json5 库解析 JSON 字符串

```javascript
JsonUtils.parseJsonWithJson5(jsonString);
```

#### 使用 flatted 库序列化 JavaScript 对象为 JSON 字符串

```javascript
JsonUtils.stringifyJsonWithFlatted(object);
```

## 示例

```javascript
import { ArrayUtils, ApiUtils, JsonUtils } from 'utils_web3';

const mergedArray = ArrayUtils.mergeAndDistinct([1, 2, 3], [3, 4, 5]);
console.log("mergedArray:", mergedArray)

const jsonString = '{"name": "John", "age": 30}';
const parsedData = JsonUtils.parseJson(jsonString);
console.log("parsedData:", parsedData)

// 示例代码...
```

## 许可证

[MIT](LICENSE)
