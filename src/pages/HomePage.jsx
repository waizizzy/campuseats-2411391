import { useVendors } from "../hooks/useVendors";
import VendorCard from "../components/VendorCard";

function HomePage() {
  const { vendors, loading, error, reload } = useVendors();

  if (loading) return <p>Loading vendors...</p>;

  if (error) {
    return (
      <div className="box">
        <p>Could not load vendors: {error}</p>
        <button onClick={reload}>Retry</button>
      </div>
    );
  }

  return (
    <section>
      <h2 className="section-title">Choose a vendor</h2>

      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
