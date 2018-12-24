import React, { useEffect, useState } from 'react';

import Loading from './components/Loading';
import Header from './components/Header';
import ProductDetails from './components/ProductData';

const styles = {
  layout: {},
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f6f8fa',
  },
  title: {
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  chart: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  table: {
    display: 'flex',
    flex: 0,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    paddingTop: 50,
  },
};

const fetchProductData = async productId => {
  const url = `/products/${productId}.json`;
  const res = await fetch(url);
  const parsed = await res.json();
  return parsed[0];
};

const App = ({ productId }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (!productData) {
      fetchProductData(productId).then(setProductData);
    }
  });

  if (!productData) {
    return <Loading />;
  }

  return (
    <div style={styles.root}>
      <Header />
      <ProductDetails {...productData} />
    </div>
  );
};

export default App;
