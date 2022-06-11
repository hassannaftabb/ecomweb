import React from 'react';
import {
  Product,
  Footer,
  FooterBanner,
  Navbar,
  Cart,
  HeroBanner,
  Layout,
} from '../components/index';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Various Products</p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const BannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(BannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
