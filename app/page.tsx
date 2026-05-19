export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-5 pb-90">
      <h1 className="text-4xl font-bold tracking-tight text-primary">
        Multi-thème en Tailwind&nbsp;v4
      </h1>

      <p className="mt-4 text-lg text-secondary">
        Utilise l'encart en bas à droite pour switcher entre
        <strong className="text-primary"> Classique</strong>,
        <strong className="text-primary"> Sombre </strong>
        et <strong className="text-tertiary">Coloré</strong>.
      </p>

      {/* Example cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {["Composant A", "Composant B"].map((title) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-surface p-6 shadow-sm hover:bg-surface-hover"
          >
            <h2 className="text-lg font-semibold text-text">{title}</h2>
            <p className="mt-2 text-sm text-text-muted">
              Les couleurs, bordures et ombres s'adaptent automatiquement au
              thème actif grâce aux tokens CSS.
            </p>
            <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover">
              Action
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
