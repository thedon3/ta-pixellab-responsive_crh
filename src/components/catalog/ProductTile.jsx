export default function ProductTile() {
  return <article className="product-tile">
    <header className="product-tile-header">
      <a href="/" title="Thread Affair Monochrome Suit">
        <picture>
          <img src="/images/products/product-01-a.jpg" alt="" />
        </picture>
      </a>

      <span className="badge badge-primary">%</span>

      <h1 className="product-tile-title">
        <a href="/" title="Thread Affair Monochrome Suit">Thread Affair Monochrome Suit</a>
        </h1>
      <h2 className="product-tile-subtitle">
        <a href="/" title="London fit semi-slim">London fit semi-slim</a>
        </h2>
    </header>

    <section className="product-tile-content">{/* add pricing */}</section>

    <footer className="product-tile-footer"></footer>
  </article>
}
