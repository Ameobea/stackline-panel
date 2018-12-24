import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import * as R from 'ramda';
import moment from 'moment';
import numeral from 'numeral';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const formatDollars = dollars => numeral(dollars).format('$0,0');

const columns = [
  {
    dataField: 'weekEnding',
    text: 'Week Ending',
    formatter: weekEnding => moment(weekEnding).format('MM-DD-YY'),
  },
  {
    dataField: 'retailSales',
    text: 'Retailer Sales',
    formatter: formatDollars,
  },
  {
    dataField: 'wholesaleSales',
    text: 'Wholesale Sales',
    formatter: formatDollars,
  },
  {
    dataField: 'unitsSold',
    text: 'Units Sold',
    formatter: n => numeral(n).format('0,0'),
  },
  {
    dataField: 'retailerMargin',
    text: 'Retailer Margin',
    formatter: formatDollars,
  },
];

const DataTable = ({ data }) => (
  <div>
    <BootstrapTable
      bootstrap4
      keyField="weekEnding"
      data={data}
      columns={columns.map(({ text, ...rest }) => ({
        text: text.toUpperCase(),
        sort: true,
        ...rest,
      }))}
    />
  </div>
);

DataTable.propTypes = { data: PropTypes.array };

export default DataTable;
