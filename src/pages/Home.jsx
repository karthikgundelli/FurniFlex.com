import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import furnitureData from '../data/furnitureData'
import './style.css'

const Home = () => {
  // Pick first 6 products as featured
  const featuredProducts = furnitureData.slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Transform Your Space with Style</h1>
          <p>Discover furniture that fits your life, not the other way around.</p>
          <Link to="/products" className="shop-btn">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="view-more">
          <Link to="/products">View All Products</Link>
        </div>
      </section>
    </>
  )
}

export default Home
