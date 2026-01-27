export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Fans</span>
              <span className="text-red-600">Hub</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-red-600 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-600 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-600 transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-600 transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300">
                  Terms of Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors duration-300">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FansHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
