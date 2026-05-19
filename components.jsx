/* ============================================================
   Shared components: Icon, Logo, Navbar, Footer, CourseCard, Stars
   ============================================================ */

// Convert kebab-case SVG attribute keys to camelCase for React.
function kebabToCamelAttrs(attrs) {
  const out = {};
  for (const k in attrs) {
    const ck = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[ck] = attrs[k];
  }
  return out;
}

function Icon({ name, size = 20, className = "", strokeWidth = 2, style }) {
  // Look up lucide icon by PascalCase name (accepts "play", "book-open", "BookOpen")
  const pascal = name.replace(/(^|-)([a-z])/g, (_, _d, c) => c.toUpperCase());
  // lucide UMD exposes icons directly on window.lucide (PascalCase); older builds used window.lucide.icons
  const lucideGlobal = window.lucide || {};
  const lib = lucideGlobal.icons || lucideGlobal;
  const entry =
    lib[pascal] || lib[name] || lib[name.charAt(0).toUpperCase() + name.slice(1)];

  // Normalize: entry can be either an iconNode `[tag, attrs, children]`
  // or a wrapper object `{ iconNode: [...] }` (depending on lucide version).
  let iconNode = null;
  if (Array.isArray(entry)) iconNode = entry;
  else if (entry && Array.isArray(entry.iconNode)) iconNode = entry.iconNode;

  if (!iconNode) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  // Two shapes supported:
  //  a) full svg: ['svg', attrs, children]
  //  b) children-only list: [['path', attrs], ['line', attrs], ...]
  let attrs, children;
  if (typeof iconNode[0] === "string" && iconNode[0] === "svg") {
    [, attrs, children] = iconNode;
  } else {
    attrs = {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    };
    children = iconNode;
  }

  return (
    <svg
      {...kebabToCamelAttrs(attrs)}
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
    >
      {children.map((c, i) => React.createElement(c[0], { ...kebabToCamelAttrs(c[1]), key: i }))}
    </svg>
  );
}

// Links sociales reales — usados en Navbar, Footer y FAB
const SOCIAL = {
  youtube: "https://www.youtube.com/@arsmagnaconjimmymarcelo",
  facebook: "https://web.facebook.com/profile.php?id=100065244420212&locale=es_LA",
  whatsapp:
    "https://wa.me/51998234406?text=Hola%20profe%20Jimmy%2C%20tengo%20una%20consulta%20sobre%20los%20cursos%20de%20Ars%20Magna.",
  whatsappNumber: "+51 998 234 406",
};

// Icono de WhatsApp (lucide no lo trae como brand icon)
function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// FAB de WhatsApp — siempre visible, esquina inferior derecha
function WhatsAppFab() {
  return (
    <a
      href={SOCIAL.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-2xl shadow-green-900/30 hover:shadow-green-900/40 transition-all hover:scale-105"
      aria-label="Chatea con Jimmy por WhatsApp"
    >
      <WhatsAppIcon size={22} className="text-white" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        Chatea con el profe
      </span>
    </a>
  );
}

// Botones flotantes de atrás/adelante (estilo browser)
function NavArrows({ canBack, canForward, onBack, onForward }) {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-3 z-50 flex flex-col gap-2">
      <button
        onClick={onBack}
        disabled={!canBack}
        aria-label="Página anterior"
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-zinc-200 transition
          ${canBack ? "bg-white hover:bg-zinc-50 text-zinc-900 hover:scale-105 cursor-pointer" : "bg-zinc-100 text-zinc-300 cursor-not-allowed"}`}
      >
        <Icon name="chevron-left" size={20} />
      </button>
      <button
        onClick={onForward}
        disabled={!canForward}
        aria-label="Página siguiente"
        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-zinc-200 transition
          ${canForward ? "bg-white hover:bg-zinc-50 text-zinc-900 hover:scale-105 cursor-pointer" : "bg-zinc-100 text-zinc-300 cursor-not-allowed"}`}
      >
        <Icon name="chevron-right" size={20} />
      </button>
    </div>
  );
}

function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-lg bg-yellow-300 flex items-center justify-center shadow-sm group-hover:shadow-md transition">
        <span className="text-red-600 font-black text-2xl leading-none -mt-0.5">M</span>
      </div>
      <div className="text-left leading-tight">
        <div className="font-bold text-[15px] text-zinc-900">Ars Magna</div>
        <div className="text-[11px] text-zinc-500 -mt-0.5">con Jimmy Marcelo</div>
      </div>
    </button>
  );
}

function NavLink({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`relative text-sm font-medium px-1 py-5 transition ${
        active ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
      }`}
    >
      {children}
      {active && (
        <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-yellow-300 rounded-full" />
      )}
    </button>
  );
}

function Navbar({ page, setPage }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Logo onClick={() => setPage("landing")} />

        <nav className="hidden md:flex items-center gap-2">
          <NavLink active={page === "catalogo"} onClick={() => setPage("catalogo")}>
            Cursos
          </NavLink>
          <NavLink
            onClick={() => {
              setPage("landing");
              setTimeout(
                () => document.getElementById("sobre-jimmy")?.scrollIntoView({ behavior: "smooth" }),
                50
              );
            }}
          >
            Sobre mí
          </NavLink>
          <NavLink
            onClick={() => {
              setPage("landing");
              setTimeout(
                () => document.getElementById("testimonios")?.scrollIntoView({ behavior: "smooth" }),
                50
              );
            }}
          >
            Testimonios
          </NavLink>
          <NavLink
            onClick={() => {
              setPage("landing");
              setTimeout(
                () => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }),
                50
              );
            }}
          >
            Contacto
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setPage("login")}
            className="text-sm font-medium px-4 py-2 rounded-lg border border-zinc-300 hover:bg-zinc-50 transition"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setPage("catalogo")}
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-yellow-300 hover:bg-yellow-400 text-black transition shadow-sm"
          >
            Ver cursos
          </button>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          <Icon name={open ? "x" : "menu"} size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-5 py-3 flex flex-col gap-1">
            <button
              onClick={() => { setPage("catalogo"); setOpen(false); }}
              className="text-left py-2 text-sm font-medium"
            >
              Cursos
            </button>
            <button className="text-left py-2 text-sm font-medium">Sobre mí</button>
            <button className="text-left py-2 text-sm font-medium">Testimonios</button>
            <button className="text-left py-2 text-sm font-medium">Contacto</button>
            <div className="flex gap-2 pt-2 pb-1">
              <button
                onClick={() => { setPage("login"); setOpen(false); }}
                className="flex-1 text-sm font-medium px-4 py-2 rounded-lg border border-zinc-300"
              >
                Iniciar sesión
              </button>
              <button
                onClick={() => { setPage("catalogo"); setOpen(false); }}
                className="flex-1 text-sm font-semibold px-4 py-2 rounded-lg bg-yellow-300 text-black"
              >
                Ver cursos
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
            Enseñar es un arte y una pasión. Preparación premium para preuniversitarios peruanos.
          </p>
          <div className="flex gap-2 mt-5">
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-red-600 hover:border-zinc-400 transition bg-white"
              aria-label="YouTube"
            >
              <Icon name="youtube" size={16} />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-blue-700 hover:border-zinc-400 transition bg-white"
              aria-label="Facebook"
            >
              <Icon name="facebook" size={16} />
            </a>
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-green-600 hover:border-zinc-400 transition bg-white"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={14} />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-900 mb-3">Plataforma</div>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><button onClick={() => setPage && setPage("catalogo")} className="hover:text-zinc-900">Cursos</button></li>
            <li><a href="#" className="hover:text-zinc-900">Universidades</a></li>
            <li><a href="#" className="hover:text-zinc-900">Precios</a></li>
            <li><a href="#" className="hover:text-zinc-900">Material gratis</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-900 mb-3">Soporte</div>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><a href="#" className="hover:text-zinc-900">Centro de ayuda</a></li>
            <li><a href="#" className="hover:text-zinc-900">Contacto</a></li>
            <li><a href="#" className="hover:text-zinc-900">Estado del servicio</a></li>
            <li><a href="#" className="hover:text-zinc-900">WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-900 mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><a href="#" className="hover:text-zinc-900">Términos</a></li>
            <li><a href="#" className="hover:text-zinc-900">Privacidad</a></li>
            <li><a href="#" className="hover:text-zinc-900">Reembolsos</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <div>© 2026 Ars Magna.</div>
          <div>Pago único · Soporte directo</div>
        </div>
      </div>
    </footer>
  );
}

function Stars({ value = 5, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon
          key={n}
          name="star"
          size={size}
          className={n <= value ? "fill-yellow-400" : "fill-transparent text-zinc-300"}
          style={{ fill: n <= value ? "#FACC15" : "transparent" }}
        />
      ))}
    </div>
  );
}

function CourseThumb({ curso, big }) {
  return (
    <div
      className={`relative overflow-hidden ${
        big ? "aspect-[16/9]" : "aspect-[16/10]"
      } w-full bg-gradient-to-br ${curso.color_thumb}`}
    >
      <div className="absolute inset-0 stripes opacity-30" />
      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/85 text-white text-[10px] font-semibold tracking-wide uppercase">
        {curso.universidad}
      </div>
      <div className="absolute bottom-3 right-3 px-1.5 py-0.5 rounded bg-black/85 text-white text-[10px] font-mono">
        {curso.horas}h
      </div>
      <div className="absolute inset-0 flex items-end p-4">
        <div className="text-white font-black leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" style={{ fontSize: big ? 28 : 18, textWrap: "balance" }}>
          {curso.titulo.split(" — ")[0]}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
          <Icon name="play" size={22} className="text-black" style={{ fill: "#000" }} />
        </div>
      </div>
    </div>
  );
}

function CourseCard({ curso, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group text-left flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-zinc-300 transition duration-200"
    >
      <CourseThumb curso={curso} />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-bold text-zinc-900 text-[17px] leading-snug tracking-tight">
          {curso.titulo}
        </h3>
        <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">{curso.descripcion}</p>
        <div className="flex items-center gap-3 text-xs text-zinc-500 mt-1">
          <span className="flex items-center gap-1"><Icon name="play-circle" size={13} />{curso.clases} clases</span>
          <span className="flex items-center gap-1"><Icon name="clock" size={13} />{curso.horas}h</span>
          <span className="flex items-center gap-1"><Icon name="bar-chart-2" size={13} />{curso.nivel}</span>
        </div>
        <div className="flex items-end justify-between pt-3 mt-auto border-t border-zinc-100">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-zinc-900">S/{curso.precio}</span>
            <span className="text-sm text-zinc-400 line-through">S/{curso.precio_antes}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 group-hover:text-red-600 transition">
            Ver curso <Icon name="arrow-right" size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}

Object.assign(window, { Icon, Logo, Navbar, Footer, Stars, CourseThumb, CourseCard, NavLink, WhatsAppIcon, WhatsAppFab, NavArrows, SOCIAL });
