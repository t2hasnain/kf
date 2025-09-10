import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About KF Distribution
          </h1>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
            Pakistan's leading distributor of premium beauty and wellness products,
            committed to bringing quality and innovation to every home.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2014, KF Distribution has been at the forefront of the beauty and wellness industry in Pakistan.
                What started as a small family business has grown into one of the most trusted names in product distribution.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 7 years of experience, we have built strong relationships with leading manufacturers worldwide,
                ensuring that our customers receive only the highest quality products at competitive prices.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">7+</div>
                  <div className="text-white/90">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-white/90">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
                  To provide Pakistani consumers with access to premium beauty and wellness products
                  that enhance their quality of life, while maintaining the highest standards of quality and service.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be Pakistan's most trusted and preferred distributor of beauty and wellness products,
                  setting new standards in the industry through innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind KF Distribution, dedicated to serving you with excellence.
            </p>
          </div>
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
                  alt="Asad Arif - CFO"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-400/20 to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Asad Arif</h3>
              <p className="text-lg text-teal-400 font-semibold mb-4">CFO</p>
              <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
                Operations specialist with extensive experience in logistics and supply chain management.
                Ensures seamless delivery and customer satisfaction across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at KF Distribution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on product quality. Every item undergoes rigorous testing and verification.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Our customers are at the heart of everything we do. We strive to exceed expectations in every interaction.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously seek new and better ways to serve our customers and improve our services.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct our business with honesty, transparency, and ethical practices in all our dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust KF Distribution for their beauty and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/products" className="bg-white text-[#6EC1E4] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Explore Our Products
            </a>
            <a href="/support" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#6EC1E4] transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}