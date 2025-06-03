export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white py-24 lg:py-32">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Discover Events Near You</h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Find upcoming local events and register in seconds. Connect with your community and discover amazing
          experiences happening right in your neighborhood.
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5 animate-pulse delay-500"></div>
      </div>
    </section>
  )
}
