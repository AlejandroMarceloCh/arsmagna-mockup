/* ============================================================
   App root — page router con history stack (back/forward)
   ============================================================ */
function App() {
  const [stack, setStack] = React.useState({
    entries: [{ page: "landing", cursoId: "analisis-mat-1" }],
    index: 0,
  });
  const [authTab, setAuthTab] = React.useState("login");

  const current = stack.entries[stack.index];
  const page = current.page;
  const cursoId = current.cursoId;

  // Scroll to top on page/cursoId change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [stack.index]);

  // setPage — apila nueva entrada en el historial
  const setPage = (p) => {
    let nextPage = p;
    if (typeof p === "string" && p.startsWith("login:")) {
      setAuthTab(p.split(":")[1] || "login");
      nextPage = "login";
    }
    setStack((prev) => {
      const cur = prev.entries[prev.index];
      // Si ya estoy exactamente en esa página (mismo page + cursoId), no apilar
      if (nextPage === cur.page) return prev;
      const next = { page: nextPage, cursoId: cur.cursoId };
      const newEntries = prev.entries.slice(0, prev.index + 1);
      newEntries.push(next);
      return { entries: newEntries, index: newEntries.length - 1 };
    });
  };

  // setCursoId — actualiza el cursoId de la entrada actual (no apila)
  const setCursoId = (id) => {
    setStack((prev) => {
      const newEntries = [...prev.entries];
      newEntries[prev.index] = { ...newEntries[prev.index], cursoId: id };
      return { ...prev, entries: newEntries };
    });
  };

  const goBack = () => setStack((p) => (p.index > 0 ? { ...p, index: p.index - 1 } : p));
  const goForward = () => setStack((p) => (p.index < p.entries.length - 1 ? { ...p, index: p.index + 1 } : p));
  const canBack = stack.index > 0;
  const canForward = stack.index < stack.entries.length - 1;

  let pageEl;
  if (page === "landing") pageEl = <Landing setPage={setPage} setCursoId={setCursoId} />;
  else if (page === "catalogo") pageEl = <Catalogo setPage={setPage} setCursoId={setCursoId} />;
  else if (page === "curso") pageEl = <Curso setPage={setPage} setCursoId={setCursoId} cursoId={cursoId} />;
  else if (page === "player") pageEl = <Player setPage={setPage} />;
  else if (page === "login") pageEl = <Login setPage={setPage} initialTab={authTab} />;
  else pageEl = <Landing setPage={setPage} setCursoId={setCursoId} />;

  // En login no mostramos el FAB para no competir con el form
  const showFab = page !== "login";

  return (
    <>
      <NavArrows canBack={canBack} canForward={canForward} onBack={goBack} onForward={goForward} />
      {pageEl}
      {showFab && <WhatsAppFab />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
