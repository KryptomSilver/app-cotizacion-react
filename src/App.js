import Header from "./Components/Header";
import styled from "@emotion/styled";
import Formulario from "./Components/Formulario";
import { useState } from "react";
import Resumen from "./Components/Resumen";
import Resultado from "./Components/Resultado";
import Spinner from "./Components/Spinner";
const Contenedor = styled.div`
    max-width: 600px;
    margin: 0.5rem auto;
`;
const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;
function App() {
    //definir state
    const [resumen, setResumen] = useState({
        cotizacion: 0,
        datos: {
            marca: "",
            year: "",
            plan: "",
        },
    });
    const [cargando, setCargando] = useState(false);
    //extraer datos
    const { cotizacion, datos } = resumen;
    return (
        <Contenedor>
            <Header titulo="Cotizador de Seguros" />
            <ContenedorFormulario>
                <Formulario setResumen={setResumen} setCargando={setCargando} />
                {cargando ? <Spinner /> : null}
                <Resumen datos={datos} />

                {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
            </ContenedorFormulario>
        </Contenedor>
    );
}

export default App;
