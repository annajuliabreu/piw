
const Imagem = ({id}) => {
    return (
        <>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }
        alt="Pokemon" 
        style={{width:"300px"}}
        />
        </>
    )
}

export default Imagem;