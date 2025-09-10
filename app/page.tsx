import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KF Distribution - Premium Cosmetics, Baby Products & Beauty Essentials",
  description: "Discover premium cosmetics, baby products, beauty essentials, and wellness products at KF Distribution. Your trusted reseller for quality products with fast delivery across Pakistan.",
  keywords: "cosmetics, baby products, beauty essentials, wellness, Pakistan, premium products, KF Distribution",
  openGraph: {
    title: "KF Distribution - Premium Beauty & Wellness Products",
    description: "Your trusted reseller for premium cosmetics, baby products, and beauty essentials in Pakistan.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="heading-modern text-gray-900 mb-8 leading-tight animate-fade-in-up">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 animate-gradient-x font-black">KF Distribution</span>
          </h1>
          <p className="subheading-modern text-gray-700 mb-12 max-w-5xl mx-auto animate-fade-in-up delay-200">
            Your trusted reseller for premium cosmetics, baby products, beauty essentials, and wellness products.
            Discover quality products that enhance your lifestyle with our curated collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up delay-400">
            <a href="/products" className="btn-modern btn-primary group relative overflow-hidden">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="/about" className="btn-modern btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
              <div className="text-6xl font-bold mb-2 text-white">1000+</div>
              <div className="text-xl font-light text-white/90">Happy Customers</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200">
              <div className="text-6xl font-bold mb-2 text-white">100+</div>
              <div className="text-xl font-light text-white/90">Quality Products</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
              <div className="text-6xl font-bold mb-2 text-white">7+</div>
              <div className="text-xl font-light text-white/90">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover our extensive range of premium products designed for your beauty and wellness needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-modern animate-fade-in-up">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cosmetics</h3>
                <p className="text-gray-600 mb-4">Premium makeup products from top brands, perfect for every occasion and skin type.</p>
                <a href="/products" className="text-blue-600 font-semibold hover:text-cyan-500 transition-colors inline-flex items-center">
                  Explore <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            <div className="card-modern animate-fade-in-up delay-200">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Baby Products</h3>
                <p className="text-gray-600 mb-4">Gentle and safe products for your little ones, ensuring comfort, care, and development.</p>
                <a href="/products" className="text-blue-600 font-semibold hover:text-cyan-500 transition-colors inline-flex items-center">
                  Explore <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            <div className="card-modern animate-fade-in-up delay-400">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beauty Essentials</h3>
                <p className="text-gray-600 mb-4">Skincare, haircare, and wellness products to help you look and feel your best.</p>
                <a href="/products" className="text-blue-600 font-semibold hover:text-cyan-500 transition-colors inline-flex items-center">
                  Explore <span className="ml-1">→</span>
                </a>
              </div>
            </div>
            <div className="card-modern animate-fade-in-up delay-600">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Health & Wellness</h3>
                <p className="text-gray-600 mb-4">Natural supplements and wellness products for a healthier lifestyle.</p>
                <a href="/products" className="text-blue-600 font-semibold hover:text-cyan-500 transition-colors inline-flex items-center">
                  Explore <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-modern text-center text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="subheading-modern text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            The passionate individuals behind KF Distribution, dedicated to bringing you the best products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <Image
                  src="/arif.jpg"
                  alt="Arif Darbari - Founder"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Arif Darbari</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">Founder</p>
              <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                The visionary founder who established KF Distribution with a mission to bring premium beauty and wellness products to Pakistan.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <Image
                  src="/osama.jpg"
                  alt="Osama Arif - CEO"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Osama Arif</h3>
              <p className="text-lg text-cyan-500 font-semibold mb-4">CEO</p>
              <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                Visionary leader with over 12 years in business development and distribution.
                Expert in building strong manufacturer relationships and market expansion strategies.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <Image
                  src="/asad.jpg"
                  alt="Asad Arif - COO"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-400/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Asad Arif</h3>
              <p className="text-lg text-teal-400 font-semibold mb-4">COO</p>
              <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                Operations specialist with extensive experience in logistics and supply chain management.
                Ensures seamless delivery and customer satisfaction across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Pakistan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#A8E6CF] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ahmed Khan</h4>
                  <p className="text-gray-600 text-sm">Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "KF Distribution has been our go-to supplier for cosmetics and baby products. Their quality is unmatched and delivery is always on time. Highly recommended!"
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6EC1E4] to-[#AEDFF7] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  F
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fatima Ahmed</h4>
                  <p className="text-gray-600 text-sm">Karachi, Pakistan</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "The baby products from KF Distribution are excellent. My little one loves their gentle skincare line. Fast shipping and great customer service!"
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#AEDFF7] to-[#98FF98] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Muhammad Ali</h4>
                  <p className="text-gray-600 text-sm">Islamabad, Pakistan</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Outstanding service and premium quality products. KF Distribution's health and wellness range has transformed my daily routine. Five stars!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-modern text-gray-900 mb-6">
              Why Choose KF Distribution?
            </h2>
            <p className="subheading-modern text-gray-600 max-w-4xl mx-auto">
              With over a decade of experience in the Pakistani market, we have established ourselves as the leading distributor
              of premium beauty, cosmetic, and baby care products. Our commitment to excellence drives everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-[#A8E6CF] to-[#6EC1E4] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Premium Quality</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Every product in our inventory undergoes rigorous quality testing and certification.
                We source only from trusted manufacturers worldwide to ensure authenticity and safety.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-[#6EC1E4] to-[#AEDFF7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Express Delivery</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Fast, reliable delivery across Pakistan with real-time tracking.
                Same-day delivery available in major cities with our extensive logistics network.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-[#AEDFF7] to-[#98FF98] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Expert Support</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Our knowledgeable team provides 24/7 customer support with expert advice
                on product selection, usage, and skincare routines tailored to Pakistani climate.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-r from-[#98FF98] to-[#A8E6CF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Competitive Pricing</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Direct sourcing and bulk purchasing allow us to offer premium products
                at competitive prices, making luxury beauty accessible to everyone in Pakistan.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#A8E6CF] to-[#6EC1E4] rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
              <p className="text-xl mb-6 opacity-90">
                Experience the KF Distribution difference today. Quality products, exceptional service, and unbeatable value.
              </p>
              <a href="/products" className="bg-white text-[#6EC1E4] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
                Start Shopping Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <Image
                src="/LOGO.png"
                alt="KF Distribution Logo"
                width={180}
                height={60}
                className="mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 max-w-lg leading-relaxed">
                Pakistan's leading distributor of premium cosmetics, baby products, beauty essentials, and health products.
                Serving customers across the nation with quality, trust, and excellence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#A8E6CF]">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-300 hover:text-[#A8E6CF] transition-colors duration-300">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-[#A8E6CF] transition-colors duration-300">About Us</a></li>
                <li><a href="/products" className="text-gray-300 hover:text-[#A8E6CF] transition-colors duration-300">Our Products</a></li>
                <li><a href="/support" className="text-gray-300 hover:text-[#A8E6CF] transition-colors duration-300">Get in Touch</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#6EC1E4]">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#A8E6CF] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">+92 306 2393268</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#6EC1E4] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Modal Colony, karachi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#AEDFF7] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Mon-Fri: 9AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-lg">&copy; 2024 KF Distribution. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
