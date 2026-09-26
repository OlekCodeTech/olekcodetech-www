import { ArrowRight } from "lucide-react";
import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-7xl font-semibold text-cyan sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">Nie znaleźliśmy tej strony</h1>
        <p className="mt-4 max-w-md text-body">Adres mógł się zmienić albo strona została usunięta. Wróć na stronę główną lub sprawdź naszą ofertę.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">
            Strona główna
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/oferta/" variant="outline">
            Oferta
          </Button>
        </div>
      </Container>
    </section>
  );
}
