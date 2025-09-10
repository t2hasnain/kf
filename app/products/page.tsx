'use client';

import Image from "next/image";
import { useState } from "react";

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // All product images in one array
  const allProducts = [
    "/BABY/IMG-20250910-WA0023.jpg",
    "/BABY/IMG-20250910-WA0024.jpg",
    "/BABY/IMG-20250910-WA0026.jpg",
    "/BABY/IMG-20250910-WA0027.jpg",
    "/BABY/IMG-20250910-WA0028.jpg",
    "/BABY/IMG-20250910-WA0029.jpg",
    "/BABY/IMG-20250910-WA0030.jpg",
    "/BABY/IMG-20250910-WA0031.jpg",
    "/BABY/IMG-20250910-WA0032.jpg",
    "/BABY/IMG-20250910-WA0033.jpg",
    "/BABY/IMG-20250910-WA0034.jpg",
    "/BABY/IMG-20250910-WA0037.jpg",
    "/BABY/IMG-20250910-WA0041.jpg",
    "/BABY/IMG-20250910-WA0043.jpg",
    "/BABY/IMG-20250910-WA0046.jpg",
    "/BABY/IMG-20250910-WA0047.jpg",
    "/BABY/IMG-20250910-WA0048.jpg",
    "/BABY/IMG-20250910-WA0049.jpg",
    "/BABY/IMG-20250910-WA0050.jpg",
    "/BABY/IMG-20250910-WA0051.jpg",
    "/BABY/IMG-20250910-WA0052.jpg",
    "/BABY/IMG-20250910-WA0053.jpg",
    "/BABY/WhatsApp Image 2025-09-10 at 12.08.49_3f9d0494.jpg",
    "/BABY/WhatsApp Image 2025-09-10 at 12.08.49_a218490e.jpg",
    "/SOUP/IMG-20250910-WA0035.jpg",
    "/SOUP/IMG-20250910-WA0036.jpg",
    "/SOUP/IMG-20250910-WA0038.jpg",
    "/SOUP/IMG-20250910-WA0039.jpg",
    "/SOUP/IMG-20250910-WA0040.jpg",
    "/SOUP/IMG-20250910-WA0042.jpg",
    "/TISSUES/IMG-20250910-WA0046.jpg",
    "/TISSUES/IMG-20250910-WA0047.jpg",
    "/TISSUES/IMG-20250910-WA0048.jpg",
    "/TISSUES/IMG-20250910-WA0049.jpg",
    "/TISSUES/IMG-20250910-WA0050.jpg",
    "/TISSUES/IMG-20250910-WA0051.jpg",
    "/TISSUES/IMG-20250910-WA0052.jpg",
    "/TISSUES/IMG-20250910-WA0053.jpg"
  ];

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set(prev).add(src));
  };

  const handleImageError = (src: string) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our Product Gallery
          </h1>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of premium products.
            Click on any image to view it in full size.
          </p>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">All Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our complete collection of premium products. Click on any image to view it in full size.
            </p>
            <div className="mt-6 text-lg font-semibold text-blue-600">
              Total Products: {allProducts.length}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allProducts.map((product, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  !loadedImages.has(product) ? 'hidden' : ''
                }`}
              >
                <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => openModal(product)}>
                  <Image
                    src={product}
                    alt={`Product ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    onLoad={() => handleImageLoad(product)}
                    onError={() => handleImageError(product)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Premium Product #{index + 1}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    High-quality product from our collection
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-600">Contact for Price</span>
                    <a
                      href="https://wa.me/923062393268?text=hello%20i%20want%20help%20i%20want%20to%20order%20can%20we%20call%20now%20%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {loadedImages.size === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loading Products...</h3>
              <p className="text-gray-600">Please wait while we load your product gallery.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full size product"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need Something Special?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Can't find what you're looking for? Contact us for custom orders, bulk purchases, or specialized product recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/support" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </a>
            <a href="https://wa.me/923062393268?text=hello%20i%20want%20help%20i%20want%20to%20order%20can%20we%20call%20now%20%3F" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 hover:text-white transition-colors duration-300">
              WhatsApp: +92 306 2393268
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}