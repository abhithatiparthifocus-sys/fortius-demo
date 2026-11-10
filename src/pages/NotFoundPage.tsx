import CtaLink from '@/components/CtaLink';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-brand-50/60 px-4 py-24 text-center">
      <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Error 404</p>
      <h1 className="font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">Page not found</h1>
      <p className="max-w-md text-base text-brand-600">The page you are looking for has moved or does not exist.</p>
      <CtaLink to="/" variant="primary">
        Back to home
      </CtaLink>
    </section>
  );
}
