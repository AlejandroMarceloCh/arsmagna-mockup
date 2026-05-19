/* ============================================================
   Catálogo page
   ============================================================ */
function Catalogo({ setPage, setCursoId }) {
  const [universidades, setUniversidades] = React.useState({ UNALM: true, UNMSM: true, UNA: true, UNFV: true });
  const [niveles, setNiveles] = React.useState({ Básico: true, "Básico-Intermedio": true, Intermedio: true });
  const [precio, setPrecio] = React.useState(150);
  const [orden, setOrden] = React.useState("relevancia");
  const [busqueda, setBusqueda] = React.useState("");

  const filtrados = CURSOS.filter(
    (c) =>
      universidades[c.universidad] &&
      niveles[c.nivel] &&
      c.precio <= precio &&
      (busqueda === "" ||
        c.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.universidad.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const ordenados = [...filtrados].sort((a, b) => {
    if (orden === "precio-asc") return a.precio - b.precio;
    if (orden === "precio-desc") return b.precio - a.precio;
    if (orden === "clases") return b.clases - a.clases;
    return 0;
  });

  return (
    <div>
      <Navbar page="catalogo" setPage={setPage} />

      {/* Hero corto */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-red-600">Ciclo 2026</div>
          <h1 className="mt-1 text-4xl lg:text-5xl font-bold tracking-tight">Todos los cursos</h1>
          <p className="mt-3 text-zinc-600 max-w-xl">
            Cursos completos en video con temario por capítulos, material descargable y soporte del profe Jimmy.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10 grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <details className="lg:open:block" open>
            <summary className="lg:hidden flex items-center justify-between p-4 rounded-xl border border-zinc-200 mb-4">
              <span className="font-semibold text-sm">Filtros</span>
              <Icon name="chevron-down" size={16} />
            </summary>

            <div className="space-y-7">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Universidad</div>
                <div className="space-y-2">
                  {Object.keys(universidades).map((u) => (
                    <label key={u} className="flex items-center gap-2.5 text-sm cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={universidades[u]}
                        onChange={(e) =>
                          setUniversidades({ ...universidades, [u]: e.target.checked })
                        }
                        className="w-4 h-4 accent-yellow-400"
                      />
                      <span className="group-hover:text-zinc-900 text-zinc-700">{u}</span>
                      <span className="ml-auto text-xs text-zinc-400">
                        {CURSOS.filter((c) => c.universidad === u).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Nivel</div>
                <div className="space-y-2">
                  {Object.keys(niveles).map((n) => (
                    <label key={n} className="flex items-center gap-2.5 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={niveles[n]}
                        onChange={(e) => setNiveles({ ...niveles, [n]: e.target.checked })}
                        className="w-4 h-4 accent-yellow-400"
                      />
                      <span className="text-zinc-700">{n}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Precio máx.</div>
                  <div className="text-sm font-bold text-zinc-900">S/{precio}</div>
                </div>
                <input
                  type="range"
                  min={30}
                  max={200}
                  value={precio}
                  onChange={(e) => setPrecio(+e.target.value)}
                  className="w-full accent-yellow-400"
                />
                <div className="flex justify-between text-[11px] text-zinc-400 mt-1">
                  <span>S/30</span>
                  <span>S/200</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setUniversidades({ UNALM: true, UNMSM: true, UNA: true, UNFV: true });
                  setNiveles({ Básico: true, "Básico-Intermedio": true, Intermedio: true });
                  setPrecio(200);
                  setBusqueda("");
                }}
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          </details>
        </aside>

        {/* Grid */}
        <div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Icon name="search" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar curso, universidad o tema…"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-zinc-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500">
                {ordenados.length} curso{ordenados.length === 1 ? "" : "s"}
              </span>
              <select
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
                className="text-sm py-2 px-3 rounded-lg border border-zinc-300 bg-white"
              >
                <option value="relevancia">Relevancia</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
                <option value="clases">Más clases</option>
              </select>
            </div>
          </div>

          {ordenados.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-300 p-16 text-center">
              <div className="text-zinc-500">Ningún curso coincide con tus filtros.</div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {ordenados.map((c) => (
                <CourseCard
                  key={c.id}
                  curso={c}
                  onClick={() => { setCursoId(c.id); setPage("curso"); }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}

window.Catalogo = Catalogo;
