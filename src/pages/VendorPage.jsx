import { useParams, Link, useSearchParams } from "react-router";
import { useVendors } from "../hooks/useVendors";
import MenuList from "../components/MenuList";

function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors();

  const [searchParams, setSearchParams] = useSearchParams();

  if (loading) return <p>Loading vendor...</p>;

  if (error) {
    return (
      <div className="box">
        <p>Could not load vendor: {error}</p>
        <button onClick={reload}>Retry</button>
      </div>
    );
  }

  const vendor = vendors.find((v) => v.id === id);

  if (!vendor) {
    return (
      <div className="box">
        <h2>Vendor not found</h2>
        <Link to="/">Back to vendors</Link>
      </div>
    );
  }

  // Get the selected category from the URL
  const selectedCategory = searchParams.get("cat") || "All";

  // Build the category list from this vendor's menu
  const categories = [
    "All",
    ...new Set(vendor.menu.map((item) => item.category)),
  ];

  // Filter menu items
  const filteredMenu =
    selectedCategory === "All"
      ? vendor.menu
      : vendor.menu.filter((item) => item.category === selectedCategory);

  // Update the URL when the category changes
  function handleCategoryChange(event) {
    const category = event.target.value;
    const nextParams = new URLSearchParams(searchParams);

    if (category === "All") {
      nextParams.delete("cat");
    } else {
      nextParams.set("cat", category);
    }

    setSearchParams(nextParams);
  }

  return (
    <section>
      <Link to="/">← Back to vendors</Link>

      <h2>Menu: {vendor.name}</h2>
      <p>{vendor.location}</p>

      <div className="category-filter">
        <label htmlFor="category">Filter by category: </label>

        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <MenuList items={filteredMenu} />
    </section>
  );
}

export default VendorPage;
