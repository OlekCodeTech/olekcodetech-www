import { Container } from "./ui";

/** Systemy, z którymi najczęściej łączymy sklepy, strony i programy klientów. */
const integrations = [
  "WooCommerce",
  "Allegro",
  "InPost",
  "DPD",
  "Furgonetka",
  "Przelewy24",
  "PayU",
  "Subiekt nexo",
  "Microsoft 365",
  "SharePoint",
  "Google Workspace",
  "n8n",
  "Make",
  "REST API",
  "CSV / XML",
];

export default function IntegrationsStrip() {
  return (
    <section className="border-t border-line/60 py-12 lg:py-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Łączymy systemy m.in. z</p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {integrations.map((name) => (
            <li key={name} className="rounded-pill border border-line bg-ink-2/60 px-4 py-2 font-display text-sm font-semibold text-snow">
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-sm text-muted">Nie ma Twojego programu na liście? Jeśli udostępnia API, eksport plików albo bazę danych, zwykle da się go podłączyć – sprawdzamy to na bezpłatnej konsultacji.</p>
      </Container>
    </section>
  );
}
