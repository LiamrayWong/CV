var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {
  tooltip: {},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '项目开发能力', max: 100},
      { name: '编程基础', max: 100},
      { name: 'Vue 全家桶', max: 100},
      { name: 'React 全家桶', max: 100},
      { name: '沟通能力', max: 100},
      { name: '静态页面', max: 100}
    ]
  },
  series: [{
    name: '能力雷达图',
    type: 'radar',
    // areaStyle: {normal: {}},
    data: [
      {
        value: [90, 75, 85, 90, 70, 100],
        name: '能力雷达图'
      }
    ]
  }]
};


myChart.setOption(option);