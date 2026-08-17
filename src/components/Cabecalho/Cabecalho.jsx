import logo from "../../assets/image.png";
import carrinho from "../../assets/carrinho.png";
import burgerButton from "../../assets/burgerButton.svg";
import lupa from "../../assets/lupa.svg";
import "./Cabecalho.css";


export function Cabecalho() {
return(
    <div className="cabecalho">
        <a  href="/">
            <img src={logo} alt="Logo" className="img" />
        </a>
        <div className="pesquisa">
            <img src={lupa} alt="Lupa" />
            <input 
                type="text" 
                placeholder="Estou buscando..."
            />
        </div>
        <a  href="/">
            <img src={burgerButton} alt="burger" className="img"  />
        </a>
        <a  href="/">
            <img src={carrinho} alt="Carrinho" className="img"  />
        </a>
    </div>
)


}