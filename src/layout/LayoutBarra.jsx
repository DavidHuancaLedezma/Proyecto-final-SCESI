import Barra from "../components/home/Barra";
import "../style/layout.css"
function LayoutBarra ( { children } ) {
  return (
    <>
      <Barra />
      <main className="barra-superior">
        {children}
      </main>
    </>
  );
}

export default LayoutBarra;