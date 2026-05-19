/* ============================================================
   Login / Registro page
   ============================================================ */
function Login({ setPage, initialTab = "login" }) {
  const [tab, setTab] = React.useState(initialTab);
  const [showPass, setShowPass] = React.useState(false);
  const [showPass2, setShowPass2] = React.useState(false);

  // Form state (solo visual, sin auth real)
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(tab === "login" ? "Login simulado (demo)" : "Registro simulado (demo)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar minimal */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <Logo onClick={() => setPage("landing")} />
          <div className="flex items-center gap-2">
            {tab === "login" ? (
              <button
                onClick={() => setTab("registro")}
                className="text-sm font-semibold px-4 py-2 rounded-lg bg-yellow-300 hover:bg-yellow-400 text-black transition shadow-sm"
              >
                Crear cuenta
              </button>
            ) : (
              <button
                onClick={() => setTab("login")}
                className="text-sm font-semibold px-4 py-2 rounded-lg border border-zinc-300 hover:bg-zinc-50 transition"
              >
                Iniciar sesión
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Split layout */}
      <div className="flex-1 grid lg:grid-cols-2">
        {/* LEFT — hero panel con identidad de marca */}
        <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-orange-400 via-red-500 to-red-700 text-white p-12 xl:p-16 flex-col justify-between">
          {/* Decoración: círculos translúcidos */}
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-yellow-300/25 blur-2xl" />
          <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-red-900/40 blur-3xl" />
          <div className="absolute inset-0 stripes opacity-10" />

          {/* Logo grande */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-300 flex items-center justify-center shadow-lg">
              <span className="text-red-600 font-black text-3xl leading-none -mt-1">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-black text-xl">Ars Magna</div>
              <div className="text-sm text-white/80 -mt-0.5">con Jimmy Marcelo</div>
            </div>
          </div>

          {/* Mensaje central */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]" style={{ textWrap: "balance" }}>
              Tu camino a la UNALM empieza acá.
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-md">
              Cursos en video estructurados por capítulos, con material descargable y soporte directo del profe. Sin academia, sin mensualidades.
            </p>

            {/* Card del profe */}
            <div className="mt-10 inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-yellow-300 to-orange-400 border-2 border-white/30 flex-shrink-0 relative">
                <img
                  src="img/jimmy_nobg.png"
                  alt="Jimmy"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white">Jimmy Marcelo</div>
                <div className="text-sm text-white/80">Profesor · Mat. y Química · UNALM</div>
              </div>
            </div>
          </div>

          {/* Footer del panel: stats */}
          <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-300" />
              +5,400 alumnos
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              196 clases
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-200" />
              4.9 ★ · 184 reseñas
            </div>
          </div>
        </div>

        {/* RIGHT — formulario */}
        <div className="flex items-center justify-center px-5 lg:px-8 py-12 lg:py-16 bg-zinc-50">
          <div className="w-full max-w-md">
            {/* Logo mobile (visible solo cuando se oculta el panel izquierdo) */}
            <div className="lg:hidden mb-8 flex justify-center">
              <Logo onClick={() => setPage("landing")} />
            </div>

            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-zinc-900">
              {tab === "login" ? "Bienvenido de vuelta" : "Crea tu cuenta"}
            </h2>
            <p className="mt-2 text-zinc-600">
              {tab === "login"
                ? "Accede a tus cursos comprados y continúa donde lo dejaste."
                : "Empieza con un curso, accede de por vida. Sin mensualidades."}
            </p>

            {/* Tabs */}
            <div className="mt-7 bg-white border border-zinc-200 rounded-xl p-1 flex relative">
              <button
                onClick={() => setTab("login")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition relative z-10 ${
                  tab === "login" ? "bg-yellow-300 text-black shadow-sm" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Iniciar sesión
              </button>
              <button
                onClick={() => setTab("registro")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition relative z-10 ${
                  tab === "registro" ? "bg-yellow-300 text-black shadow-sm" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Crear cuenta
              </button>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="mt-7 space-y-4">
              {tab === "registro" && (
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Nombre completo</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Carlos Mendoza"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-zinc-400 transition"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Correo electrónico</label>
                <div className="relative">
                  <Icon name="mail" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-zinc-400 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-semibold text-zinc-700">Contraseña</label>
                  {tab === "login" && (
                    <button
                      type="button"
                      onClick={() => alert("Te enviaríamos un email de recuperación (demo)")}
                      className="text-xs font-semibold text-red-600 hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Icon name="lock" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type={showPass ? "text" : "password"}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-11 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-zinc-400 transition"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
                    aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    <Icon name={showPass ? "eye-off" : "eye"} size={15} />
                  </button>
                </div>
              </div>

              {tab === "registro" && (
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">Confirmar contraseña</label>
                  <div className="relative">
                    <Icon name="lock" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type={showPass2 ? "text" : "password"}
                      value={pass2}
                      onChange={(e) => setPass2(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-11 py-3 rounded-xl border border-zinc-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-zinc-400 transition"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass2((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
                      aria-label={showPass2 ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      <Icon name={showPass2 ? "eye-off" : "eye"} size={15} />
                    </button>
                  </div>
                </div>
              )}

              {tab === "login" && (
                <label className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer select-none">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-yellow-400" />
                  Mantener sesión iniciada
                </label>
              )}

              {tab === "registro" && (
                <label className="flex items-start gap-2 text-xs text-zinc-600 cursor-pointer select-none">
                  <input type="checkbox" required className="w-4 h-4 mt-0.5 accent-yellow-400 flex-shrink-0" />
                  <span>
                    Acepto los <a href="#" className="text-red-600 hover:underline">Términos</a> y la{" "}
                    <a href="#" className="text-red-600 hover:underline">Política de privacidad</a>
                  </span>
                </label>
              )}

              <button
                type="submit"
                className="w-full mt-2 text-base font-bold px-6 py-3.5 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black transition shadow-sm flex items-center justify-center gap-2"
              >
                {tab === "login" ? "Iniciar sesión" : "Crear cuenta"}
                <Icon name="arrow-right" size={18} />
              </button>
            </form>

            {/* Switch helper */}
            <div className="mt-7 text-center text-sm text-zinc-600">
              {tab === "login" ? (
                <>
                  ¿Aún no tienes cuenta?{" "}
                  <button onClick={() => setTab("registro")} className="font-semibold text-red-600 hover:underline">
                    Crea una gratis
                  </button>
                </>
              ) : (
                <>
                  ¿Ya tienes cuenta?{" "}
                  <button onClick={() => setTab("login")} className="font-semibold text-red-600 hover:underline">
                    Inicia sesión
                  </button>
                </>
              )}
            </div>

            {/* Soporte */}
            <div className="mt-10 pt-6 border-t border-zinc-200 text-center text-xs text-zinc-500">
              ¿Problemas para acceder?{" "}
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-zinc-700 hover:text-zinc-900 inline-flex items-center gap-1"
              >
                Escríbenos por WhatsApp <Icon name="arrow-up-right" size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Login = Login;
