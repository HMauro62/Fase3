import { DoorClosedLocked, DoorOpen } from 'lucide-react';
import { Link,  useNavigate } from 'react-router-dom';

/*{ type NavBarProps = É um tipo TypeScript que define quais propriedades (props) o 
  componente NavBar aceita.
  Útil segurança de tipos, autocompletar do vscode, validação de retono - 
  garante que o coponente retorne um JSX }*/
type NavBarProps = {
  nomeUsuario: String;
};

const NavBar: React.FC<NavBarProps> = ({nomeUsuario}) => {


  const handleLogout = () => {
    if (!!nomeUsuario) { 
       return false;
    }

    const navigate = useNavigate();

    navigate("/", { state: { id: "", name: "" }});
};


return (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Container Principal */}
      <div className="flex justify-between items-center h-16">

        {/* Logo à Esquerda */}
        <div className="flex-shrink-0 flex items-center">
          <span className="text-2xl font-bold text-blue-600 px-3" style={{paddingLeft: '3rem'}}>AvisaLá</span>
        </div>

        {nomeUsuario ? (
          <div className="block md:flex items-center space-x-4" style={{paddingRight: '3rem'}}>
            <span>{nomeUsuario}</span>
            <button onClick={handleLogout}><DoorOpen className="size-6" /></button>
          </div>
        ) : (
          <div className="block md:flex items-center space-x-4" style={{paddingRight: '2.5rem'}}>
            <Link to="LoginPage" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              <DoorClosedLocked className="size-6" />
            </Link>
          </div>
        )}
      </div>
    </div>
  </nav>
);
}

export default NavBar;