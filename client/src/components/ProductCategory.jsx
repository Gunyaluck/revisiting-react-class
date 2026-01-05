import { ComputerDesktopIcon, ShoppingBagIcon, VideoCameraIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";

function ProductCategory() {
    return ( <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <ComputerDesktopIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Electronics</h3>
            </div>
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Fashion</h3>
            </div>
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <VideoCameraIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Photography</h3>
            </div>
            <div className="bg-white p-4 shadow-md flex items-center">
              <div className="mr-2">
                <MusicalNoteIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">Audio</h3>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProductCategory;