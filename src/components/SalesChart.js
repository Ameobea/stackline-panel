import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as R from 'ramda';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  chartTitle: {
    marginTop: 16,
    marginLeft: 16,
    color: '#545454',
    fontSize: 15,
  },
  chart: {
    width: '100%',
    height: 450,
  },
};

const createDataFilterer = dataProp => data =>
  data.map(({ weekEnding, ...datum }) => [
    new Date(weekEnding),
    datum[dataProp],
  ]);

const createSeries = (name, data) => ({
  name,
  data,
  type: 'line',
  smooth: true,
  symbol: 'none',
  yAxisIndex: 0,
  xAxisIndex: 0,
});

/**
 * `pred` should accept an element from `series` as input and return its value.
 */
const minMaxBy = (series, pred) =>
  series.reduce(
    ([min, max], datum) => {
      let val = pred(datum);
      return [Math.min(min, val), Math.max(max, val)];
    },
    [Infinity, -Infinity]
  );

const millisecondsPerWeek = 604800 * 1000;
const millisecondsPerMonth = millisecondsPerWeek * 4;

/**
 * `salesData` elements are in the following format:
 * ```
 * {
 *   retailSales: 348123,
 *   retailerMargin: 123294,
 *   unitsSold: 887,
 *   weekEnding: "2017-01-01",
 *   wholesaleSales: 255721,
 * }
 * ```
 */
const createChartOption = salesData => {
  const retailSalesSeries = createDataFilterer('retailSales')(salesData);
  const wholesaleSales = createDataFilterer('wholesaleSales')(salesData);

  const [minRetail, maxRetail] = minMaxBy(salesData, R.prop('retailSales'));
  const [minWholesale, maxWholesale] = minMaxBy(
    salesData,
    R.prop('wholesaleSales')
  );

  const yMin = Math.min(minRetail, minWholesale);
  const yMax = Math.max(maxRetail, maxWholesale);
  const yRange = yMax - yMin;

  return {
    grid: { left: 50, right: 150 },
    xAxis: {
      type: 'time',
      interval: millisecondsPerMonth,
      axisLabel: {
        showMinLabel: false,
        showMaxLabel: false,
        align: 'left',
        formatter: timestamp =>
          moment(timestamp)
            .format('MMM')
            .toUpperCase(),
        color: '#aaa',
      },
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      min: yMin - yRange,
      max: yMax + yRange,
    },
    tooltip: { trigger: 'axis' },
    series: [
      createSeries('Retail Sales', retailSalesSeries),
      createSeries('WholesaleSales', wholesaleSales),
    ],
    color: ['#46A6F6', '#9AA5BE'],
  };
};

const SalesChart = ({ data }) => (
  <div style={styles.root}>
    <span style={styles.chartTitle}>Retail Sales</span>
    <br />
    <ReactEchartsCore
      option={createChartOption(data)}
      echarts={echarts}
      notMerge={true}
      lazyUpdate={true}
      opts={{}}
      style={styles.chart}
    />
  </div>
);

SalesChart.propTypes = {
  salesData: PropTypes.arrayOf(
    PropTypes.shape({
      retailSales: PropTypes.number,
      retailerMargin: PropTypes.number,
      unitsSold: PropTypes.number,
      weekEnding: PropTypes.string,
      wholesaleSales: PropTypes.number,
    })
  ),
};

export default SalesChart;
