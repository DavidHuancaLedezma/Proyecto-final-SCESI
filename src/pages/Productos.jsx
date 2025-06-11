import LayoutBarra from "../layout/LayoutBarra"
import ComponenteProducto from "../components/productos/ComponenteProducto"
import "../style/productos.css"
function Productos () {
    const testProductos = [{
        id: 1,
        nombre:"Pique Macho",
        descripcion:"Un riquisimo pique",
        precio: 100,
        imagen: "https://i0.wp.com/elcalderoviajero.com/wp-content/uploads/2018/12/pique-a-lo-macho-12.jpg?fit=750%2C498&ssl=1",
        origen: "Bolivia",
        categoria: "Comidas",
        popular: "Si",
        disponible: true
    }, {
        id: 2,
        nombre:"Milanesa con papas",
        descripcion:"Unriquisimo milanesa",
        precio: 50,
        imagen: "https://resizer.glanacion.com/resizer/v2/el-truco-para-hacer-milanesas-de-bajo-MJ6775DYBRF3FNKAWVJVB6KY5I.jpg?auth=d69225ae02a7ee3cb62de88ec89b27b6b480558bff97cc7342a6d7c7f2db9c35&width=880&height=586&quality=70&smart=true",
        origen: "Bolivia",
        categoria: "Comidas",
        popular: "Si",
        disponible: false
    },
    {
        id: 3,
        nombre:"Almuerzo completo",
        descripcion:"Contiene su sopa y segundo",
        precio: 20,
        imagen: "https://i.pinimg.com/736x/61/01/52/6101524f1cd987fba78b98c914864e15.jpg",
        origen: "Bolivia",
        categoria: "Completos",
        popular: "No",
        disponible: false
    }]
    return(
        <LayoutBarra>
            <main className="cartelera-de-comidas">
                {
                    testProductos.map(({id, nombre, descripcion, precio, imagen, origen, categoria, popular, disponible}) =>(
                        <ComponenteProducto key={id} nombre={nombre} descripcion={descripcion} precio={precio} imagen={imagen} origen={origen} categoria={categoria} popular={popular} disponible={disponible}/>
                    ))
                }
                
            </main>
        </LayoutBarra>
    )
}
export default Productos