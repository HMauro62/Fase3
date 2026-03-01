import { useState } from 'react';
import { Menu, X, UserLock  } from 'lucide-react'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Container Principal */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo à Esquerda */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600 px-3">AvisaLá</span>
          </div>

          {/* Botão Login - Visível apenas em Desktop (md+) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              <UserLock className="size-6" />
            </a>
          </div>

          {/* Botão Menu Mobile (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Aparece ao clicar no hamburger */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
