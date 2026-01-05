// 🛠️ Todo 1 / Step 3: ให้ Import ตัว Component Navbar เพื่อจะนำไป Render ลงใน Component App ด้านล่าง

//     ==== ตัวอย่าง ====

//     import Navbar from "./components/Navbar.jsx"

import Navbar from "./components/Navbar.jsx"
import ProductHighlight from "./components/ProductHighlight.jsx"
import ProductCategory from "./components/ProductCategory.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      {/* 
        Todo 1 / Step 4: ลบ HTML Element ที่แสดง <nav> ออกจาก App.jsx (ตั้งแต่บรรทัดที่ 29 - 61)
        แล้วนำ Component Navbar ที่ Import มา Render แทน

        ==== ตัวอย่าง ====

        <Navbar />
      */}
      <Navbar />
      {/* 🛠️ Todo 2: ให้สร้าง Component ProductHighlight แล้วนำมา Render */}
      <ProductHighlight />
      {/* 🛠️ Todo 3: ให้สร้าง Component ProductCategory แล้วนำมา Render */}
      <ProductCategory />
      {/* 🛠️ Todo 4: ให้สร้าง Component Footer แล้วนำมา Render */}
      <Footer />
    </>
  );
}

export default App;
