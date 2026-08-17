
import "./AnuncioHorizontal.css";
import imgGenerica from "../../assets/anuncioGenerico.png";

export function AnuncioHorizontal() {
return(
    <div className="anuncio">
        <img  className='imgAnuncio'  src={imgGenerica} alt="imagem" />
        <div className="descricao">
            <h2>Titulo do Anuncio(Marcovich)</h2>
            <p>R$:<strong>00.00</strong></p>
            
            <p> <span className="frete-gratis">Frete grátis</span></p>
        </div>
    </div>
)


}