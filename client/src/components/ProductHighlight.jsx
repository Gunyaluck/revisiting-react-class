import ProductCard from "./ProductCard";
import axios from "axios";
import { useState, useEffect, useRef } from "react"; // useState: จัดการสถานะของข้อมูล, useEffect: จัดการการเรียกใช้งานของข้อมูล, useRef: จัดการการเรียกใช้งานของข้อมูล

function ProductHighlight() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const getAllProducts = async () => {
    const productDataFromServer = await axios.get(
      `http://localhost:4000/products?search=`
    );
    setAllProducts(productDataFromServer.data);
  };

  const getProducts = async () => {
    //      http://localhost:4000/products?search=""
    //      http://localhost:4000/products?search="green"

    const productDataFromServer = await axios.get(
      `http://localhost:4000/products?search=${submittedText}`
    );
    setProducts(productDataFromServer.data);
  };

  useEffect(() => {
    getAllProducts();
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [submittedText]);

  useEffect(() => {
    if (searchText.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const searchLower = searchText.toLowerCase();
    const filtered = allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(searchLower)
      )
      .map((product) => product.name)
      .slice(0, 5); // จำกัดแสดงแค่ 5 คำแนะนำ

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [searchText, allProducts]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <div className="flex flex-row items-center gap-10">
            <div className="relative">
              <input
                ref={searchInputRef} // จัดการการเรียกใช้งานของข้อมูล
                type="text"
                placeholder="Search products..."
                className="p-2 border border-gray-400 rounded w-64"
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                }}
                onFocus={() => {
                  if (suggestions.length > 0) {
                    setShowSuggestions(true);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSubmittedText(searchText);
                    setShowSuggestions(false);
                  }
                }}
              />
              {showSuggestions && suggestions.length > 0 && (
                <div
                  ref={suggestionsRef}
                  className="absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto"
                >
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
                      onClick={() => {
                        setSearchText(suggestion);
                        setSubmittedText(suggestion);
                        setShowSuggestions(false);
                      }}
                    >
                      <span className="text-gray-800">{suggestion}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => {
                setSubmittedText(searchText);
                setShowSuggestions(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((item) => {
            return (
              <ProductCard
                key={item.id}
                imgSrc={item.image}
                productName={item.name}
                productPrice={item.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
