//  🛠️ Todo 1: ให้สร้าง ProductCard Component แล้วนำไป Render ในไฟล์ `ProductHighlight.jsx`
//  แทนที่ Product Card 1, Product Card 2 และ Product Card 3
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ProductCard() {
    return (
        <div className="bg-white p-4 shadow-md">
            <img src="https://picsum.photos/200/200" alt="Product" className="w-full mb-2" />
            <h3 className="text-lg font-semibold mb-1">Product Name</h3>
            <p className="text-gray-600">$100</p>
            <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
                <ShoppingCartIcon className="h-4 w-4 mr-2" />
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;