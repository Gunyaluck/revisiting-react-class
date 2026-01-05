import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ProductCard(props) {
  return (
    <div className="bg-white p-4 shadow-md">
      {/* 🛠️ Todo 1: ให้เปลี่ยน Value ของ `src` เป็นข้อมูลส่งเข้ามาใน Component ผ่าน Prop ที่ชื่อว่า `imgSrc`
          โดยเราสามารถ Access `imgSrc` ผ่าน Object `props` ที่เป็น Parameter ของ Component
          
          ==== ตัวอย่าง ====

           <img
            src={props.imgSrc}
            alt="The Lorem Ipsum for photos."
            className="w-full mb-2"
          />
          
      */}
      <img
        src={props.imgSrc}
        alt={props.productName}
        className="w-full mb-2"
      />
      <h3 className="text-lg font-semibold mb-1">
        {props.title}
      </h3>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">$99.99</p>
        <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded flex items-center">
          <ShoppingCartIcon className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
