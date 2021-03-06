import d3Conduit from '../../src/d3Conduit';
import initFunc from './initFunc';
import renderFunc from './renderFunc';

const HorizontalBarChart = d3Conduit(initFunc, renderFunc, {
  displayName: 'horizontalBarChart',
  width: 800,
  height: 400,
  margin: {
    top: 120,
    right: 50,
    bottom: 150,
    left: 120,
  },
});

export default HorizontalBarChart;
