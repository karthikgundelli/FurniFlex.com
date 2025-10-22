import React, { useState } from 'react'
import furnitureData from '../data/furnitureData'
import ProductCard from './ProductCard'
import './style.css'

const ProductList = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = furnitureData.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (category === 'All' || item.category === category)
  )

  return (
    <div className="products-container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Sofa</option>
          <option>Chair</option>
          <option>Table</option>
          <option>Storage</option>
        </select>
      </div>

      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  )
}

export default ProductList
