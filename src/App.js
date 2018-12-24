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
  // const fetchedData = await fetch(`/products/${productId}.json`);
  return Promise.resolve(require('./data.json')[0]);
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

  console.log(productData);

  return (
    <div style={styles.root}>
      <Header />
      <ProductDetails {...productData} />
    </div>
  );

  // return (
  //   <div style={styles.root}>
  //     <h1 style={styles.title}>StackLine Interview Demo</h1>

  //     <Suspense fallback={<Loading />}>
  //       <div style={styles.chart}>
  //         <Chart options={options} />
  //       </div>
  //     </Suspense>

  //     <Suspense fallback={<Loading />}>
  //       <div style={styles.table}>
  //         <DataTable rows={data} renderCell={([x, y]) => `${x}, ${y}`} />
  //       </div>
  //     </Suspense>
  //   </div>
  // );
};

export default App;
