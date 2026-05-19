/* ============================================================
   Landing page
   ============================================================ */
function Landing({ setPage, setCursoId }) {
  return (
    <div>
      <Navbar page="landing" setPage={setPage} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top right, rgba(252,211,77,0.35), transparent 55%), radial-gradient(ellipse at bottom left, rgba(220,38,38,0.10), transparent 55%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-900 bg-yellow-300 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              Nuevo · Ciclo 2026
            </div>
            <h1 className="mt-6 font-black tracking-tight text-zinc-900 text-5xl sm:text-6xl lg:text-[72px] leading-[1.02]" style={{ textWrap: "balance" }}>
              Ingresa a la <span className="bg-yellow-300 px-2 -mx-1 rounded">UNALM</span>, UNMSM o Villarreal con el profe Jimmy.
            </h1>
            <p className="mt-6 text-lg text-zinc-600 max-w-xl leading-relaxed">
              Cursos en video estructurados por capítulos, con material descargable y soporte directo del profe. Pago único, acceso de por vida. Sin academias, sin suscripciones.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setPage("catalogo")}
                className="inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black shadow-sm transition"
              >
                Ver cursos <Icon name="arrow-right" size={18} />
              </button>
              <button className="inline-flex items-center gap-2 text-base font-semibold px-5 py-3 rounded-xl text-zinc-900 hover:bg-zinc-100 transition">
                <span className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center">
                  <Icon name="play" size={14} style={{ fill: "#fff" }} />
                </span>
                Conoce a Jimmy
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#FCD34D", "#DC2626", "#1E3A8A", "#10B981"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}
                  >
                    {["C", "A", "D", "M"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-zinc-600">
                <span className="font-semibold text-zinc-900">+5,400 preuniversitarios</span> aprenden con Jimmy
              </div>
            </div>
          </div>

          {/* Hero card — dinámica según EN_VIVO */}
          <div className="lg:col-span-5">
            <div className="relative">
              {EN_VIVO ? (
                /* Estado: EN VIVO */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-zinc-900/10 border border-zinc-200 aspect-[4/5] bg-gradient-to-br from-orange-400 via-yellow-400 to-amber-300">
                  <div className="absolute inset-0 stripes opacity-25" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    En vivo ahora
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="text-white text-2xl font-black leading-tight drop-shadow">
                      Análisis Matemático I
                    </div>
                    <div className="text-white/90 text-sm mt-1">Capítulo I · Números reales</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl">
                      <Icon name="play" size={30} className="text-black ml-1" style={{ fill: "#000" }} />
                    </div>
                  </div>
                </div>
              ) : (
                /* Estado: NO HAY VIVO — próximo + último */
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-zinc-900/10 border border-zinc-200 bg-white aspect-[4/5] flex flex-col">
                  {/* Próxima transmisión */}
                  <div className="p-5 border-b border-zinc-100">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-red-600">
                      <Icon name="radio" size={12} />
                      Próxima transmisión
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-3">
                      <div className="leading-tight">
                        <div className="text-2xl font-black tracking-tight text-zinc-900">
                          {PROXIMA_LIVE.fecha.split(" ").slice(0, 2).join(" ")}
                        </div>
                        <div className="text-sm text-zinc-500 mt-0.5">{PROXIMA_LIVE.hora} hrs · {PROXIMA_LIVE.curso}</div>
                      </div>
                      <button className="text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition flex items-center gap-1 flex-shrink-0">
                        <Icon name="bell" size={11} />
                        Recordarme
                      </button>
                    </div>
                    <div className="mt-3 text-sm text-zinc-700 font-medium leading-snug">
                      "{PROXIMA_LIVE.titulo}"
                    </div>
                  </div>

                  {/* Último video publicado */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                      <Icon name="play-circle" size={12} />
                      Última clase publicada
                    </div>
                    <a
                      href={ULTIMO_VIDEO.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver "${ULTIMO_VIDEO.titulo}" en YouTube`}
                      className={`group/thumb mt-3 relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br ${ULTIMO_VIDEO.color_thumb} block`}
                    >
                      <div className="absolute inset-0 stripes opacity-25" />
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/85 text-white text-[10px] font-mono">
                        {ULTIMO_VIDEO.duracion}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition group-hover/thumb:scale-110">
                          <Icon name="play" size={18} className="ml-0.5" style={{ fill: "#000" }} />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover/thumb:opacity-100 transition">
                        <Icon name="youtube" size={10} /> Ver en YouTube
                      </div>
                    </a>
                    <div className="mt-3 leading-tight">
                      <div className="text-sm font-bold text-zinc-900 line-clamp-2">{ULTIMO_VIDEO.titulo}</div>
                      <div className="text-xs text-zinc-500 mt-1">
                        {ULTIMO_VIDEO.capitulo} · {ULTIMO_VIDEO.publicado}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating cards (siempre visibles) */}
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl shadow-zinc-900/10 border border-zinc-200 px-4 py-3 flex items-center gap-3 hover:shadow-2xl hover:-translate-y-0.5 transition"
                aria-label="Ir al canal de YouTube"
              >
                <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center">
                  <Icon name="youtube" size={18} className="text-white" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-zinc-900">5.44K alumnos</div>
                  <div className="text-[11px] text-zinc-500">en YouTube</div>
                </div>
              </a>
              <div className="absolute -top-4 -right-3 bg-white rounded-xl shadow-xl shadow-zinc-900/10 border border-zinc-200 px-4 py-3 flex items-center gap-2">
                <Stars value={5} />
                <div className="text-sm font-bold text-zinc-900">4.9</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics band */}
        <div className="border-y border-zinc-200 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {[
              ["+5,400", "alumnos"],
              ["196+", "clases en YouTube"],
              ["6", "cursos premium"],
              ["+10 años", "de experiencia"],
            ].map(([big, small], i) => (
              <div key={i} className="flex flex-col">
                <div className="text-2xl lg:text-3xl font-black tracking-tight text-zinc-900">{big}</div>
                <div className="text-sm text-zinc-500">{small}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSIDADES */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600">Preparación oficial</div>
            <h2 className="mt-1 text-2xl lg:text-3xl font-bold tracking-tight">Universidades para las que preparamos</h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { sigla: "UNALM", nombre: "U. Nacional Agraria La Molina", color: "#16A34A" },
            { sigla: "UNMSM", nombre: "U. Nacional Mayor de San Marcos", color: "#DC2626" },
            { sigla: "UNA", nombre: "U. Nacional del Altiplano (Puno)", color: "#1E3A8A" },
            { sigla: "UNFV", nombre: "U. Nacional Federico Villarreal", color: "#7C2D12" },
            { sigla: "CEPRE", nombre: "Ciclos pre-universitarios", color: "#0A0A0A" },
          ].map((u) => (
            <div
              key={u.sigla}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition bg-white"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-[11px] font-black"
                style={{ background: u.color }}
              >
                {u.sigla}
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm text-zinc-900">{u.sigla}</div>
                <div className="text-xs text-zinc-500">{u.nombre}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURSOS DESTACADOS */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-16 lg:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600">Catálogo</div>
            <h2 className="mt-1 text-3xl lg:text-4xl font-bold tracking-tight">Cursos destacados</h2>
            <p className="mt-2 text-zinc-600 max-w-lg">Empieza por el ciclo en el que postulas. Acceso inmediato tras el pago.</p>
          </div>
          <button
            onClick={() => setPage("catalogo")}
            className="self-start md:self-auto inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 hover:text-red-600 transition"
          >
            Ver todos los cursos <Icon name="arrow-right" size={14} />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURSOS.map((c) => (
            <CourseCard
              key={c.id}
              curso={c}
              onClick={() => { setCursoId(c.id); setPage("curso"); }}
            />
          ))}
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600">Por qué Ars Magna</div>
            <h2 className="mt-1 text-3xl lg:text-4xl font-bold tracking-tight">
              No es otra playlist de YouTube. Es preparación seria.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "book-open",
                title: "Cursos estructurados, no playlists",
                text: "Temario completo, ordenado por capítulos, con un objetivo claro: que ingreses.",
                color: "bg-yellow-300",
              },
              {
                icon: "download",
                title: "Material descargable",
                text: "PDFs de ejercicios resueltos, resúmenes por capítulo y banco de problemas tipo examen.",
                color: "bg-red-600 text-white",
              },
              {
                icon: "message-circle",
                title: "Soporte directo del profe",
                text: "Pregunta cualquier duda. Jimmy responde personalmente, en menos de 24 horas.",
                color: "bg-blue-900 text-white",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-zinc-200 p-7 hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.color}`}
                >
                  <Icon name={f.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE JIMMY */}
      <section id="sobre-jimmy" className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-200 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 relative">
            <div className="absolute inset-0 stripes opacity-20" />
            <img
              src="img/jimmy_nobg.png"
              alt="Jimmy Marcelo, profesor de matemáticas y química"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <div className="text-white font-bold drop-shadow">Jimmy Marcelo</div>
              <div className="text-white/80 text-sm drop-shadow">Profesor · Mat. y Química</div>
            </div>
          </div>
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-4 right-4 bg-white border border-zinc-200 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 hover:shadow-xl hover:-translate-y-0.5 transition"
            aria-label="Ir al canal de YouTube"
          >
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center">
              <Icon name="youtube" size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold">5.44K subs</div>
              <div className="text-[11px] text-zinc-500">196 videos</div>
            </div>
          </a>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-red-600">Sobre el profe</div>
          <h2 className="mt-1 text-3xl lg:text-4xl font-bold tracking-tight">Enseñar es un arte y una pasión.</h2>
          <p className="mt-5 text-zinc-600 leading-relaxed text-[17px]">
            Soy Jimmy Marcelo, profesor de matemáticas y química con más de 10 años preparando preuniversitarios para UNALM, UNMSM, UNA y Villarreal. Mi método es simple: explicar paso a paso, con paciencia, hasta que se entienda de verdad.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed text-[17px]">
            En mi canal de YouTube comparto clases gratuitas. Aquí, en Ars Magna, encontrarás los cursos premium: estructurados, completos y con soporte personal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg border border-zinc-300 hover:bg-zinc-50 transition"
            >
              <Icon name="youtube" size={16} className="text-red-600" />
              Visitar canal de YouTube
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600">Testimonios</div>
            <h2 className="mt-1 text-3xl lg:text-4xl font-bold tracking-tight">Alumnos que ya ingresaron.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {TESTIMONIOS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-zinc-200 p-7 flex flex-col">
                <Icon name="quote" size={22} className="text-yellow-400" />
                <p className="mt-4 text-zinc-700 leading-relaxed flex-1">"{t.texto}"</p>
                <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: ["#DC2626", "#1E3A8A", "#16A34A"][i % 3] }}
                  >
                    {t.nombre.charAt(0)}
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold text-sm text-zinc-900">{t.nombre}</div>
                    <div className="text-xs text-zinc-500">{t.universidad}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden grid md:grid-cols-2 gap-0">
          <div className="p-8 lg:p-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600">Contacto</div>
            <h2 className="mt-1 text-3xl lg:text-4xl font-bold tracking-tight" style={{ textWrap: "balance" }}>
              ¿Tienes dudas antes de inscribirte?
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Escríbeme directo por WhatsApp. Te respondo personalmente — sin bots, sin formularios largos.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/51998234406?text=Hola%20profe%20Jimmy%2C%20tengo%20una%20consulta%20sobre%20los%20cursos%20de%20Ars%20Magna."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white shadow-sm transition"
              >
                <Icon name="message-circle" size={18} style={{ fill: "#fff" }} />
                Escribirme por WhatsApp
              </a>
              <div className="text-sm text-zinc-500">
                <span className="font-mono font-semibold text-zinc-900">+51 998 234 406</span>
              </div>
            </div>
            <div className="mt-5 text-xs text-zinc-500 flex items-center gap-1.5">
              <Icon name="clock" size={13} />
              Respuesta promedio: menos de 2 horas en horario peruano (8am – 10pm)
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 relative p-8 lg:p-12 flex flex-col justify-between min-h-[280px]">
            <div className="absolute inset-0 stripes opacity-15" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Disponible ahora
              </div>
              <p className="mt-5 text-white text-xl font-bold leading-snug drop-shadow" style={{ textWrap: "balance" }}>
                "Si tienes una duda sobre matemáticas, química o sobre qué curso te conviene, escríbeme. Resuelvo dudas todos los días."
              </p>
            </div>
            <div className="relative mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center font-black text-green-700 shadow">
                J
              </div>
              <div className="leading-tight text-white">
                <div className="font-bold text-sm">Jimmy Marcelo</div>
                <div className="text-xs text-white/80">Profesor · Responde personalmente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-yellow-300">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-zinc-900" style={{ textWrap: "balance" }}>
              Empieza hoy. Ingresa este ciclo.
            </h2>
            <p className="mt-4 text-zinc-800 max-w-xl text-lg">
              Acceso inmediato, material descargable y soporte directo del profe. Sin mensualidades.
            </p>
          </div>
          <div className="md:justify-self-end">
            <button
              onClick={() => setPage("catalogo")}
              className="inline-flex items-center gap-2 text-base font-semibold px-7 py-4 rounded-xl bg-black text-white hover:bg-zinc-800 transition shadow-lg"
            >
              Ver todos los cursos <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
}

window.Landing = Landing;
