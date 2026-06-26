function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-pink-600">J💕S</h1>
            <ul className="hidden md:flex gap-8 font-medium">
                <li><a href="#home" className="hover:text-pink-600 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-pink-600 transition-colors duration-300">About</a></li>
                <li><a href="#gallery" className="hover:text-pink-600 transition-colors duration-300">Gallery</a></li>  
                </ul>
               </div>
    </nav>
    );
}
export default Navbar;