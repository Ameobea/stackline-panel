const palette = [
  '#bce784',
  '#5dd39e',
  '#348aa7',
  '#525174',
  '#513b56',
  '#e884bc',
  '#d39e5d',
  '#89a533',
  '#507252',
  '#3b5651',
  '#a533a5',
];

const defaultAxis = () => ({
  splitLine: {
    lineStyle: {
      color: '#444',
    },
  },
});

export default {
  color: palette,
  backgroundColor: '#212124',
  textStyle: {
    color: '#d8d9da',
  },
  valueAxis: defaultAxis(),
  line: {
    symbol: 'none',
  },
};
