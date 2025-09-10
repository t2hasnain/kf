import Image from "next/image";

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our Premium Products
          </h1>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover our extensive collection of high-quality beauty, wellness, and baby care products
            sourced from the world's leading manufacturers.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Baby Products */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/baby.jpg"
                  alt="Baby Products"
                  width={300}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-semibold">Baby Care</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Baby Products</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Gentle, safe, and effective products for your little ones. From diapers to skincare,
                  we have everything your baby needs for healthy development.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Premium Diapers & Wipes
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Baby Skincare & Lotions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Feeding & Bath Products
                  </div>
                </div>
                <a href="tel:+923062393268" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-center inline-block">
                  Call: +92 306 2393268
                </a>
              </div>
            </div>

            {/* Cosmetics */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/cosmetica.jpeg"
                  alt="Cosmetics"
                  width={300}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-semibold">Makeup</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cosmetics</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Professional-grade makeup products from renowned brands. Enhance your natural beauty
                  with our premium cosmetics collection.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    Foundation & Concealers
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    Lipsticks & Eyeshadows
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    Brushes & Tools
                  </div>
                </div>
                <a href="tel:+923062393268" className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 text-center inline-block">
                  Call: +92 306 2393268
                </a>
              </div>
            </div>

            {/* Health & Beauty */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/beauty.jpg"
                  alt="Beauty Products"
                  width={300}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-semibold">Beauty</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Health & Beauty</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive wellness products for body and mind. From skincare to nutritional supplements,
                  take care of your health naturally.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Skincare & Haircare
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Nutritional Supplements
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Essential Oils & Aromatherapy
                  </div>
                </div>
                <a href="tel:+923062393268" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center inline-block">
                  Call: +92 306 2393268
                </a>
              </div>
            </div>

            {/* Custom Orders */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/cleaing.jpg"
                  alt="Cleaning Products"
                  width={300}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-semibold">Cleaning</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Orders</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Can't find what you're looking for? Let us help you source specific products
                  or create custom beauty solutions tailored to your needs.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Specialized Product Sourcing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Bulk Order Discounts
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Personalized Consultations
                  </div>
                </div>
                <a href="tel:+923062393268" className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-center inline-block">
                  Call: +92 306 2393268
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked selections from our most popular and highly-rated products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-[#A8E6CF] to-[#6EC1E4] flex items-center justify-center">
                <span className="text-6xl">🧴</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Face Cream</h3>
                <p className="text-gray-600 mb-4">Hydrating formula with natural ingredients for all skin types</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[#A8E6CF] rounded-full mr-2"></span>
                    Natural ingredients
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[#A8E6CF] rounded-full mr-2"></span>
                    Suitable for all skin types
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-[#6EC1E4] mb-3">Contact for Details</p>
                  <a href="tel:+923062393268" className="bg-[#6EC1E4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5AB8D6] transition-colors duration-300 inline-block">
                    Call: +92 306 2393268
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-[#6EC1E4] to-[#AEDFF7] flex items-center justify-center">
                <span className="text-6xl">👶</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Baby Care Set</h3>
                <p className="text-gray-600 mb-4">Complete care package for newborns with gentle, hypoallergenic products</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[#6EC1E4] rounded-full mr-2"></span>
                    Hypoallergenic formula
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[#6EC1E4] rounded-full mr-2"></span>
                    Complete newborn kit
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-[#6EC1E4] mb-3">Contact for Details</p>
                  <a href="tel:+923062393268" className="bg-[#6EC1E4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5AB8D6] transition-colors duration-300 inline-block">
                    Call: +92 306 2393268
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-[#AEDFF7] to-[#98FF98] flex items-center justify-center">
                <span className="text-6xl">💄</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Lipstick Set</h3>
                <p className="text-gray-600 mb-4">Professional makeup collection with long-lasting, moisturizing formulas</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[#AEDFF7] rounded-full mr-2"></span>
                    Long-lasting color
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-[#AEDFF7] rounded-full mr-2"></span>
                    Moisturizing formula
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-[#6EC1E4] mb-3">Contact for Details</p>
                  <a href="tel:+923062393268" className="bg-[#6EC1E4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5AB8D6] transition-colors duration-300 inline-block">
                    Call: +92 306 2393268
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need Something Special?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Contact us for custom orders, bulk purchases, or specialized product recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/support" className="bg-white text-[#6EC1E4] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </a>
            <a href="tel:+923062393268" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#6EC1E4] transition-colors duration-300">
              Call Now: +92 306 2393268
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}