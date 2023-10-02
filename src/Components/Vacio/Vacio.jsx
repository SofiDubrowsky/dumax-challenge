import "./Vacio.css"

const Vacio = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100%"}}>
            <div class="loader"></div>
            <p>En proceso...</p>
        </div>
    )
}

export default Vacio;