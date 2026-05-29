'use client'

function scrollToAnchor(href, e) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const id = href.slice(1);
  document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
  history.replaceState(null, "", href);
}

export function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      onClick={(e) => scrollToAnchor(href, e)}
      className="inline-flex items-center justify-center rounded-lg border border-tertiary bg-tertiary px-6 py-3 text-sm font-medium text-white shadow-sm shadow-tertiary/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-tertiary/25"
    >
      {children}
    </a>
  );
}

export function SecondaryLink({ href, children }) {
  return (
    <a
      href={href}
      onClick={(e) => scrollToAnchor(href, e)}
      className="inline-flex items-center gap-1 text-sm font-medium text-secondary underline-offset-4 transition hover:text-primary hover:underline"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
