import React, { Suspense } from 'react';

import Loading from '../Loading';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as GraphIcon } from '../icons/graph.svg';
import styles from './styles';

const SalesChart = React.lazy(() => import('../SalesChart'));
const DataTable = React.lazy(() => import('../DataTable'));

const ProductTags = ({ tags }) => (
  <div style={styles.productTags}>
    {tags.map((tag, i) => (
      <ProductTag key={i} tag={tag} />
    ))}
  </div>
);

const ProductTag = ({ tag }) => <div style={styles.productTag}>{tag}</div>;

const MenuItem = ({ text, icon: Icon, active = false, url }) => (
  <div
    style={{ ...styles.menuItem, color: active ? '#111' : '#A1B1C3' }}
    onClick={() => alert(url)}
  >
    <Icon
      width={26}
      height={26}
      style={{
        ...styles.icon,
        fill: active ? '#45A7F7' : '#A1B1C3',
      }}
    />
    {text}
  </div>
);

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

    <MenuItem icon={HomeIcon} text="OVERVIEW" url="/" />
    <MenuItem icon={GraphIcon} text="SALES" active url="/sales" />
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
