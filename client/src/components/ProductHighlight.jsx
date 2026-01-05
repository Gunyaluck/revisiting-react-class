import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ProductHighlight() {
    return (
        <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-md">
              <img
                src="https://picsum.photos/id/231/200/200"
                alt="The Lorem Ipsum for photos."
                className="w-full mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">
                The Lorem Ipsum for photos.
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">$99.99</p>
                <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img
                src="https://picsum.photos/id/232/200/200"
                alt="Wireless Bluetooth Earbuds"
                className="w-full mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">
                Wireless Bluetooth Earbuds
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">$79.99</p>
                <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img
                src="https://picsum.photos/200/200"
                alt="Product 4"
                className="w-full mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">
                Stylish Cool Sunglasses in The World
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">$79.99</p>
                <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                  <ShoppingCartIcon className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProductHighlight;