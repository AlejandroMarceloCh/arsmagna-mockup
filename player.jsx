/* ============================================================
   Player page
   ============================================================ */
function Player({ setPage }) {
  const curso = CURSOS.find((c) => c.id === "analisis-mat-1");
  const [tab, setTab] = React.useState("descripcion");
  const [openCap, setOpenCap] = React.useState({ 0: true });
  const [playing, setPlaying] = React.useState(false);
  const [notas, setNotas] = React.useState(
    "02:18  Definición de número real\n08:42  Propiedades de orden\n14:05  Ejercicio: |x−3| < 5"
  );

  // The "current" class: cap 0, clase 1
  const currentCap = 0;
  const currentClase = 0;

  // Build flat clase list per capítulo (use cap.clases count, fall back to clases for caps not detailed)
  const capitulos = curso.capitulos;

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar page="player" setPage={setPage} />

      <div className="max-w-[1500px] mx-auto px-3 lg:px-6 py-5 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-5">
        {/* LEFT */}
        <div>
          {/* Player */}
          <div className="rounded-2xl overflow-hidden bg-black aspect-video relative shadow-2xl shadow-zinc-900/10">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 30% 40%, rgba(252,211,77,0.35), transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(220,38,38,0.25), transparent 50%)",
              }}
            />
            {/* Whiteboard fake */}
            <div className="absolute inset-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
              <div className="text-white/85 font-bold text-3xl lg:text-5xl tracking-tight text-center font-mono">
                |x − 3| &lt; 5  ⟺  −2 &lt; x &lt; 8
              </div>
            </div>

            {/* Center play */}
            <button
              onClick={() => setPlaying((p) => !p)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className={`w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transition group-hover:scale-110 ${playing ? "opacity-0" : "opacity-100"}`}>
                <Icon name="play" size={32} className="ml-1" style={{ fill: "#000" }} />
              </div>
            </button>

            {/* HD badge */}
            <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 text-white text-[10px] font-bold tracking-wider border border-white/10">
              HD
            </div>

            {/* Controls bottom */}
            <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              {/* progress bar */}
              <div className="h-1 w-full bg-white/25 rounded-full mb-3 group cursor-pointer relative">
                <div className="h-full bg-yellow-300 rounded-full" style={{ width: "30%" }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-300 shadow" style={{ left: "calc(30% - 6px)" }} />
              </div>
              <div className="flex items-center gap-3 text-white">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center"
                >
                  <Icon name={playing ? "pause" : "play"} size={18} style={{ fill: "#fff" }} />
                </button>
                <button className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center">
                  <Icon name="skip-back" size={16} />
                </button>
                <button className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center">
                  <Icon name="skip-forward" size={16} />
                </button>
                <div className="text-xs font-mono tabular-nums">
                  02:18 / 2:08:15
                </div>
                <div className="flex-1" />
                <button className="text-xs font-bold px-2 py-1 rounded hover:bg-white/15">1x</button>
                <button className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center">
                  <Icon name="volume-2" size={16} />
                </button>
                <button className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center">
                  <Icon name="settings" size={16} />
                </button>
                <button className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center">
                  <Icon name="maximize" size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Title / instructor */}
          <div className="mt-5 flex items-start gap-4">
            <div className="flex-1">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Capítulo I · Clase 1 de {curso.clases}
              </div>
              <h1 className="mt-1 text-2xl lg:text-3xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
                Análisis Matemático I — Capítulo I: Números reales
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center font-bold text-white">J</div>
                <div className="leading-tight">
                  <div className="font-semibold text-sm">{INSTRUCTOR.nombre}</div>
                  <div className="text-xs text-zinc-500">Profesor del curso</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-lg border border-zinc-300 hover:bg-white text-sm font-medium flex items-center gap-1.5">
                <Icon name="bookmark" size={14} /> Guardar
              </button>
              <button className="px-3 py-2 rounded-lg border border-zinc-300 hover:bg-white text-sm font-medium flex items-center gap-1.5">
                <Icon name="share-2" size={14} /> Compartir
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-zinc-200 flex items-center gap-1 overflow-x-auto no-scrollbar">
            {[
              ["descripcion", "Descripción"],
              ["notas", "Notas"],
              ["material", "Material"],
              ["preguntas", "Preguntas"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition ${
                  tab === id ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {label}
                {tab === id && (
                  <span className="absolute left-2 right-2 -bottom-px h-0.5 bg-yellow-300 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-6">
            {tab === "descripcion" && (
              <div className="max-w-3xl">
                <p className="text-zinc-700 leading-relaxed text-[15px]">
                  En esta clase iniciamos el <b>Capítulo I: Números reales</b>. Veremos la definición axiomática de los reales, sus propiedades de orden, el valor absoluto y cómo se aplican estas ideas a resolver inecuaciones del tipo <span className="font-mono bg-zinc-100 px-1 rounded">|x − a| &lt; r</span>.
                </p>
                <p className="mt-4 text-zinc-700 leading-relaxed text-[15px]">
                  Esta clase es la base de todo el curso. Si entiendes bien esto, los siguientes capítulos te van a fluir mucho más fácil.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["números reales", "inecuaciones", "valor absoluto", "UNALM 2026"].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-medium">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {tab === "notas" && (
              <div className="max-w-3xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-zinc-500">Tus notas con timestamps (privadas)</div>
                  <button className="text-xs font-semibold text-red-600 hover:underline flex items-center gap-1">
                    <Icon name="plus" size={12} /> Agregar timestamp actual
                  </button>
                </div>
                <textarea
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  rows={10}
                  className="w-full p-4 rounded-xl border border-zinc-300 bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 leading-relaxed"
                />
                <div className="mt-2 text-xs text-zinc-500">Auto-guardado · hace un momento</div>
              </div>
            )}

            {tab === "material" && (
              <div className="max-w-3xl space-y-2">
                {[
                  { name: "Ejercicios resueltos — Cap. I.pdf", size: "2.4 MB", pages: 18 },
                  { name: "Resumen Capítulo I.pdf", size: "640 KB", pages: 4 },
                  { name: "Banco de problemas — Inecuaciones.pdf", size: "1.1 MB", pages: 9 },
                  { name: "Tabla de propiedades (descargable).pdf", size: "180 KB", pages: 1 },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-[10px]">
                        PDF
                      </div>
                      <div className="leading-tight">
                        <div className="font-semibold text-sm text-zinc-900">{f.name}</div>
                        <div className="text-xs text-zinc-500">{f.pages} págs · {f.size}</div>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-zinc-800">
                      <Icon name="download" size={13} /> Descargar
                    </button>
                  </div>
                ))}
              </div>
            )}

            {tab === "preguntas" && (
              <div className="max-w-3xl">
                <div className="rounded-xl border border-zinc-200 p-4 bg-white">
                  <textarea
                    placeholder="¿Tienes una duda sobre esta clase? Pregúntale al profe Jimmy..."
                    rows={3}
                    className="w-full p-2 text-sm focus:outline-none resize-none"
                  />
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100">
                    <div className="text-xs text-zinc-500">Jimmy suele responder en menos de 24h</div>
                    <button className="px-4 py-1.5 rounded-lg bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold">
                      Publicar pregunta
                    </button>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { autor: "Ana V.", time: "hace 3 días", pregunta: "Profe en el minuto 14:05 no me queda claro por qué pasa el 5 al otro lado.", resp: "Buena pregunta Ana, ahí estoy usando la propiedad de orden. Mira la clase 3 que lo explico con más detalle." },
                    { autor: "Bruno T.", time: "hace 1 semana", pregunta: "¿El examen UNALM 2026 pide demostraciones formales o solo aplicación?", resp: "Solo aplicación, no te preocupes por las demostraciones formales para el examen." },
                  ].map((q, i) => (
                    <div key={i} className="rounded-xl border border-zinc-200 bg-white p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">{q.autor.charAt(0)}</div>
                        <div className="font-semibold text-sm">{q.autor}</div>
                        <div className="text-xs text-zinc-500">· {q.time}</div>
                      </div>
                      <p className="mt-2 text-sm text-zinc-700">{q.pregunta}</p>
                      <div className="mt-3 pl-4 border-l-2 border-yellow-300 bg-yellow-50/40 rounded-r p-3">
                        <div className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded bg-yellow-300 text-black flex items-center justify-center text-[10px] font-black">J</span>
                          Jimmy Marcelo · respondió
                        </div>
                        <p className="mt-1 text-sm text-zinc-700">{q.resp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — playlist sidebar */}
        <aside>
          <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden lg:sticky lg:top-20">
            <div className="p-5 border-b border-zinc-200">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Curso</div>
              <div className="mt-0.5 font-bold tracking-tight text-zinc-900">Análisis Matemático I</div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-700">12 de 55 clases completadas</span>
                <span className="text-zinc-500">22%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-300 rounded-full" style={{ width: "22%" }} />
              </div>
            </div>

            <div className="max-h-[600px] overflow-y-auto scrollbar-thin">
              {capitulos.map((cap, i) => {
                const open = !!openCap[i];
                return (
                  <div key={i} className="border-b border-zinc-100 last:border-0">
                    <button
                      onClick={() => setOpenCap({ ...openCap, [i]: !open })}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-zinc-50"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded-md bg-zinc-100 font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-sm text-zinc-900 truncate">{cap.titulo}</div>
                          <div className="text-[11px] text-zinc-500">{cap.clases} clases</div>
                        </div>
                      </div>
                      <Icon name={open ? "chevron-up" : "chevron-down"} size={16} className="text-zinc-400 flex-shrink-0" />
                    </button>
                    {open && (
                      <div className="pb-2">
                        {Array.from({ length: cap.clases }).map((_, j) => {
                          const completada = i === 0 && j < currentClase;
                          const actual = i === currentCap && j === currentClase;
                          const bloqueada = i > 0 || j > 4;
                          return (
                            <button
                              key={j}
                              className={`w-full text-left flex items-center gap-3 px-5 py-2.5 text-sm transition ${
                                actual
                                  ? "bg-yellow-50 border-l-2 border-yellow-400"
                                  : "hover:bg-zinc-50 border-l-2 border-transparent"
                              }`}
                            >
                              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                {completada ? (
                                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                                    <Icon name="check" size={11} className="text-white" strokeWidth={3} />
                                  </div>
                                ) : bloqueada ? (
                                  <Icon name="lock" size={13} className="text-zinc-400" />
                                ) : actual ? (
                                  <Icon name="play" size={12} style={{ fill: "#A16207" }} className="text-yellow-700" />
                                ) : (
                                  <Icon name="play-circle" size={14} className="text-zinc-400" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`truncate ${actual ? "font-bold text-zinc-900" : bloqueada ? "text-zinc-400" : "text-zinc-700"}`}>
                                  Clase {j + 1}. {cap.titulo.split(": ")[1] || cap.titulo} · pt {j + 1}
                                </div>
                              </div>
                              <div className="text-[11px] text-zinc-400 font-mono flex-shrink-0">
                                {String(8 + (j % 90)).padStart(2, "0")}:{String((j * 17) % 60).padStart(2, "0")}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 border-t border-zinc-200 bg-zinc-50">
              <button
                onClick={() => setPage("curso")}
                className="w-full text-sm font-semibold px-4 py-2.5 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-50 transition flex items-center justify-center gap-1.5"
              >
                <Icon name="arrow-left" size={14} /> Volver al curso
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

window.Player = Player;
