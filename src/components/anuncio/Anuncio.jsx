
import "./Anuncio.css";
import imgGenerica from "../../assets/anuncioGenerico.png";

export function Anuncio() {
return(
    <div className="anuncio">
        <img  className='imgAnuncio'  src={imgGenerica} alt="imagem" />
        <div className="descricao">
            <h2>Titulo do Anuncio(Marcovich)</h2>
            <p>R$:00.00</p>
            <p>FRETE 200% GRATIS</p>
        </div>
    </div>
)


}