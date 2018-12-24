import React, { Suspense } from 'react';

import Loading from './Loading';
import { borderStyles } from '../commonStyles';
const SalesChart = React.lazy(() => import('./SalesChart'));
const DataTable = React.lazy(() => import('./DataTable'));

const styles = {
  root: {
    display: 'flex',
    marginTop: 50,
  },
  productInfo: {
    ...borderStyles,
    borderWidth: 1,
    display: 'flex',
    flex: 0.2,
    flexDirection: 'column',
    borderRadius: 2.5,
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    marginLeft: 15,
    boxShadow: '11px 0px 22px -6px rgba(0,0,0,0.19)',
    height: '100%',
  },
  productTags: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#CDCDCD',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
  },
  productTag: {
    display: 'flex',
    ...borderStyles,
    borderWidth: 1,
    borderRadius: 3,
    textAlign: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: 4,
    marginBottom: 4,
    marginRight: 8,
    flexShrink: 0,
    fontSize: 11,
  },
  graphsAndCharts: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
  },
  productImage: {
    maxWidth: 130,
    paddingBottom: 20,
    alignSelf: 'center',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 4,
    fontSize: 16,
  },
  subTitle: {
    color: '#AAA',
    fontSize: 11,
    textAlign: 'center',
    marginLeft: '15%',
    marginRight: '15%',
    paddingBottom: 14,
  },
  salesChart: {
    backgroundColor: '#fff',
  },
  dataTable: {
    marginTop: 40,
    backgroundColor: '#fff',
  },
};

const ProductTags = ({ tags }) => (
  <div style={styles.productTags}>
    {tags.map((tag, i) => (
      <ProductTag key={i} tag={tag} />
    ))}
  </div>
);

const ProductTag = ({ tag }) => <div style={styles.productTag}>{tag}</div>;

const ProductInfoPanel = ({ title, subtitle, tags, image }) => (
  <div style={styles.productInfo}>
    <img
      style={styles.productImage}
      src={image}
      alt={`${title}: ${subtitle}`}
    />
    <span style={styles.title}>{title}</span>
    <span style={styles.subTitle}>{subtitle}</span>
    <ProductTags tags={tags} />
    Overview <br />
    Sales
  </div>
);

const ProductGraphsAndCharts = ({ salesData }) => (
  <div style={styles.graphsAndCharts}>
    <Suspense fallback={<Loading />}>
      <div style={styles.salesChart}>
        <SalesChart data={salesData} />
      </div>
    </Suspense>

    <Suspense fallback={<Loading />}>
      <div style={styles.dataTable}>
        <DataTable data={salesData} />
      </div>
    </Suspense>
  </div>
);

const ProductDetails = ({ sales, ...props }) => (
  <div style={styles.root}>
    <ProductInfoPanel {...props} />
    <ProductGraphsAndCharts salesData={sales} />
  </div>
);

export default ProductDetails;
