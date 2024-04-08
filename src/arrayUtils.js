// arrayUtils.js

const ArrayUtils = {
  // 合并并去重多个数组
  mergeAndDistinct: (...arrays) => [...new Set([].concat(...arrays))],

  // 将数组分割成指定大小的块
  chunkArray: (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  },

  // 获取数组中的最大值
  getMaxValue: (array) => Math.max(...array),

  // 获取数组中的最小值
  getMinValue: (array) => Math.min(...array),

  // 获取数组中的平均值
  getAverageValue: (array) => array.reduce((acc, cur) => acc + cur, 0) / array.length,

  // 获取数组中的中位数
  getMedianValue: (array) => {
    const sortedArray = array.sort((a, b) => a - b);
    const middle = Math.floor(sortedArray.length / 2);
    if (sortedArray.length % 2 === 0) {
      return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
      return sortedArray[middle];
    }
  },

  // 检查数组是否包含指定元素
  contains: (array, element) => array.includes(element),

  // 数组去重
  distinct: (array) => [...new Set(array)],

  // 在数组中查找元素的索引位置
  findIndex: (array, predicate) => array.findIndex(predicate),

  // 移除数组中指定元素
  remove: (array, element) => array.filter(item => item !== element),

  // 将数组中的元素按照指定大小分组
  groupBySize: (array, size) => {
    return array.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(array.slice(i, i + size));
      }
      return acc;
    }, []);
  }

  // 其他自定义的数组处理方法...
};

export default ArrayUtils;

