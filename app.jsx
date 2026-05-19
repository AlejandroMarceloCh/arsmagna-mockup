/* ============================================================
   App root — page router with useState
   ============================================================ */
function App() {
  const [page, setPage] = React.useState("landing");
  const [cursoId, setCursoId] = React.useState("analisis-mat-1");
  const [authTab, setAuthTab] = React.useState("login");

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  // goto("login:registro") abre la página de login con tab=registro
  const goto = (p) => {
    if (typeof p === "string" && p.startsWith("login:")) {
      setAuthTab(p.split(":")[1] || "login");
      setPage("login");
    } else {
      setPage(p);
    }
  };

  let pageEl;
  if (page === "landing") pageEl = <Landing setPage={goto} setCursoId={setCursoId} />;
  else if (page === "catalogo") pageEl = <Catalogo setPage={goto} setCursoId={setCursoId} />;
  else if (page === "curso") pageEl = <Curso setPage={goto} setCursoId={setCursoId} />;
  else if (page === "player") pageEl = <Player setPage={goto} />;
  else if (page === "login") pageEl = <Login setPage={goto} initialTab={authTab} />;
  else pageEl = <Landing setPage={goto} setCursoId={setCursoId} />;

  // En la página de login no mostramos el FAB para no competir con el form
  const showFab = page !== "login";

  return (
    <>
      {pageEl}
      {showFab && <WhatsAppFab />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
