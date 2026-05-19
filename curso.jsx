/* ============================================================
   Curso detalle page (always shows analisis-mat-1)
   ============================================================ */
function Curso({ setPage, setCursoId }) {
  const curso = CURSOS.find((c) => c.id === "analisis-mat-1");
  const descuento = Math.round(((curso.precio_antes - curso.precio) / curso.precio_antes) * 100);
  const [openCap, setOpenCap] = React.useState(0);

  return (
    <div>
      <Navbar page="curso" setPage={setPage} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 text-sm text-zinc-500 flex items-center gap-1.5 flex-wrap">
        <button onClick={() => setPage("catalogo")} className="hover:text-zinc-900">Cursos</button>
        <Icon name="chevron-right" size={14} />
        <button onClick={() => setPage("catalogo")} className="hover:text-zinc-900">UNALM</button>
        <Icon name="chevron-right" size={14} />
        <span className="text-zinc-900 font-medium truncate">Análisis Matemático I</span>
      </div>

      {/* Hero curso */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 pb-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-100 text-green-800 text-xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
            UNALM
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]" style={{ textWrap: "balance" }}>
            {curso.titulo}
          </h1>
          <p className="mt-4 text-zinc-600 text-lg leading-relaxed">{curso.descripcion}</p>

          <div className="mt-6 flex items-center gap-5 flex-wrap text-sm">
            <div className="flex items-center gap-1.5"><Stars value={5} /><span className="font-bold">4.9</span><span className="text-zinc-500">(184 reseñas)</span></div>
            <div className="flex items-center gap-1.5 text-zinc-600"><Icon name="users" size={15} /><span><b className="text-zinc-900">1,240</b> alumnos</span></div>
            <div className="flex items-center gap-1.5 text-zinc-600"><Icon name="refresh-cw" size={15} />Última actualización: Mar 2026</div>
          </div>

          <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ["play-circle", `${curso.clases}`, "clases"],
              ["clock", `${curso.horas}h`, "de contenido"],
              ["bar-chart-2", curso.nivel, "nivel"],
              ["globe", "Español", "idioma"],
            ].map(([icon, big, small], i) => (
              <div key={i} className="rounded-xl border border-zinc-200 p-3.5">
                <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                  <Icon name={icon} size={13} />
                  {small}
                </div>
                <div className="mt-1 font-bold text-zinc-900">{big}</div>
              </div>
            ))}
          </div>

          {/* Video preview */}
          <button
            onClick={() => setPage("player")}
            className="mt-8 group relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-orange-400 to-yellow-400 border border-zinc-200"
          >
            <div className="absolute inset-0 stripes opacity-25" />
            <div className="absolute top-4 left-4 px-2.5 py-1.5 rounded-md bg-black/85 text-white text-xs font-bold uppercase tracking-wider">
              Vista previa gratis
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div className="text-white">
                <div className="text-2xl font-black drop-shadow">Clase 1 · Números reales</div>
                <div className="text-sm text-white/90">2h 08min</div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                <Icon name="play" size={32} className="ml-1" style={{ fill: "#000" }} />
              </div>
            </div>
          </button>
        </div>

        {/* Sticky buy card */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-20">
            <div className="rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-xl shadow-zinc-900/5">
              <div className={`aspect-video bg-gradient-to-br ${curso.color_thumb} relative`}>
                <div className="absolute inset-0 stripes opacity-25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setPage("player")}
                    className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:scale-110 transition"
                  >
                    <Icon name="play" size={26} className="ml-0.5" style={{ fill: "#000" }} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-5xl font-black tracking-tight">S/{curso.precio}</span>
                  <span className="text-lg text-zinc-400 line-through">S/{curso.precio_antes}</span>
                  <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">−{descuento}%</span>
                </div>
                <div className="mt-1 text-xs text-zinc-500 flex items-center gap-1.5">
                  <Icon name="alarm-clock" size={13} className="text-red-600" />
                  Oferta termina en <span className="font-mono text-red-600 font-bold">04:21:09</span>
                </div>

                <button
                  onClick={() => alert("Checkout — próximamente")}
                  className="mt-5 w-full text-base font-semibold px-5 py-4 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black transition shadow-sm"
                >
                  Comprar ahora — S/{curso.precio}
                </button>
                <button
                  onClick={() => alert("Agregado al carrito (demo)")}
                  className="mt-2.5 w-full text-base font-semibold px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-50 transition"
                >
                  Agregar al carrito
                </button>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Pago único — sin mensualidades",
                    "Material descargable (PDFs, ejercicios)",
                    "Soporte directo del profe Jimmy",
                    "Certificado al finalizar el curso",
                    "Compatible con celular y laptop",
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Icon name="check" size={11} className="text-white" />
                      </div>
                      <span className="text-zinc-700">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5"><Icon name="shield-check" size={14} className="text-green-600" />Garantía 7 días</span>
                  <span className="flex items-center gap-1.5"><Icon name="credit-card" size={14} />Yape · Plin · Visa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que aprenderás */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <div className="rounded-2xl border border-zinc-200 p-7 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Lo que aprenderás</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-3">
            {APRENDERAS.map((a, i) => (
              <div key={i} className="flex items-start gap-3 text-[15px]">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                  <Icon name="check" size={12} strokeWidth={3} />
                </div>
                <span className="text-zinc-700">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temario */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Temario del curso</h2>
          <div className="text-sm text-zinc-500">
            <b className="text-zinc-900">4 capítulos</b> · {curso.clases} clases · {curso.horas}h totales
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 divide-y divide-zinc-200 overflow-hidden bg-white">
          {curso.capitulos.map((cap, i) => {
            const open = openCap === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenCap(open ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 hover:bg-zinc-50 transition text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-yellow-300 text-black font-black flex items-center justify-center text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">{cap.titulo}</div>
                      <div className="text-xs text-zinc-500">{cap.clases} clases · ~{Math.round((curso.horas * cap.clases) / curso.clases)}h</div>
                    </div>
                  </div>
                  <Icon name={open ? "chevron-up" : "chevron-down"} size={18} className="text-zinc-400" />
                </button>
                {open && (
                  <div className="bg-zinc-50 border-t border-zinc-200">
                    {Array.from({ length: cap.clases }).map((_, j) => {
                      const locked = !(i === 0 && j < 2);
                      return (
                        <div
                          key={j}
                          className="flex items-center justify-between px-5 py-3 border-b border-zinc-100 last:border-0 group"
                        >
                          <div className="flex items-center gap-3 text-sm">
                            <Icon
                              name={locked ? "lock" : "play-circle"}
                              size={16}
                              className={locked ? "text-zinc-400" : "text-red-600"}
                            />
                            <span className={locked ? "text-zinc-600" : "text-zinc-900 font-medium"}>
                              Clase {j + 1}. {cap.titulo.split(": ")[1]} · parte {j + 1}
                            </span>
                            {!locked && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-green-100 text-green-800 rounded">
                                Gratis
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-zinc-500 font-mono">
                            {String(8 + (j % 90)).padStart(2, "0")}:{String((j * 17) % 60).padStart(2, "0")}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Sobre el profesor */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Sobre el profesor</h2>
        <div className="mt-6 rounded-2xl border border-zinc-200 p-7 lg:p-10 grid md:grid-cols-[200px_minmax(0,1fr)] gap-7 items-start">
          <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 relative">
            <div className="absolute inset-0 stripes opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-black text-7xl">J</div>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{INSTRUCTOR.nombre}</h3>
            <div className="text-sm text-zinc-500">Profesor · Matemáticas y Química</div>
            <p className="mt-4 text-zinc-700 leading-relaxed">{INSTRUCTOR.bio}</p>
            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-red-600 transition"><Icon name="youtube" size={16} className="text-red-600" /><b>5,440</b> suscriptores</a>
              <div className="flex items-center gap-2"><Icon name="video" size={16} /><b>196</b> videos publicados</div>
              <div className="flex items-center gap-2"><Icon name="users" size={16} /><b>5,400+</b> alumnos formados</div>
              <div className="flex items-center gap-2"><Stars value={5} size={14} /><b>4.9</b> en promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Reseñas de alumnos</h2>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <Stars value={5} />
              <b>4.9</b><span className="text-zinc-500">basado en 184 reseñas</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 p-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: ["#DC2626", "#1E3A8A", "#16A34A", "#F59E0B", "#7C3AED"][i % 5] }}
                >
                  {r.nombre.charAt(0)}
                </div>
                <div className="leading-tight">
                  <div className="font-bold text-sm">{r.nombre}</div>
                  <div className="text-xs text-zinc-500">{r.fecha}</div>
                </div>
                <div className="ml-auto"><Stars value={r.estrellas} /></div>
              </div>
              <p className="mt-3 text-zinc-700 text-[15px] leading-relaxed">"{r.texto}"</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="text-sm font-semibold px-4 py-2.5 rounded-lg border border-zinc-300 hover:bg-zinc-50">
            Ver todas las reseñas
          </button>
        </div>
      </section>

      {/* Cursos relacionados */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Otros cursos del profe</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURSOS.filter((c) => c.id !== "analisis-mat-1").slice(0, 3).map((c) => (
            <CourseCard
              key={c.id}
              curso={c}
              onClick={() => { setCursoId(c.id); setPage("curso"); }}
            />
          ))}
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}

window.Curso = Curso;
