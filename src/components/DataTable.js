import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import * as R from 'ramda';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const columns = [
  { dataField: 'retailSales', text: 'Retailer Sales' },
  { dataField: 'weekEnding', text: 'Week Ending' },
  { dataField: 'wholesaleSales', text: 'Wholesale Sales' },
  { dataField: 'unitsSold', text: 'Units Sold' },
  { dataField: 'retailerMargin', text: 'Retailer Margin' },
];

const DataTable = ({ data }) => (
  <div>
    <BootstrapTable
      bootstrap4
      keyField="weekEnding"
      data={data}
      columns={columns.map(({ dataField, text }) => ({
        dataField,
        text: text.toUpperCase(),
        sort: true,
      }))}
    />
  </div>
);

DataTable.propTypes = { data: PropTypes.array };

export default DataTable;
