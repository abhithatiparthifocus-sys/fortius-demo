import { Check } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';

const BRANDS = [
  {
    name: 'Yonex',
    sport: 'Badminton',
    items: ['Badminton shuttles', 'Rackets', 'Shoes', 'Kitbags', 'T-shirts and shorts', 'Stringing service'],
  },
  {
    name: 'Selkirk Sport',
    sport: 'Pickleball',
    items: ['Pickleball paddles', 'Shoes', 'Kitbags', 'T-shirts and shorts', 'Accessories'],
  },
];

export default function ProShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Gear Up"
        title="Pro Shop"
        description="Gear up for the game with top-quality equipment and apparel. From pickleball and badminton essentials to the latest sports accessories, we have everything you need to play your best."
        image="https://images.pexels.com/photos/6307230/pexels-photo-6307230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        actions={
          <CtaLink to="/membership" variant="accent">
            Join Us
          </CtaLink>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Shop Our Brands</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Premium Equipment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-600">
              We proudly carry premium badminton equipment from Yonex and top-quality pickleball paddles and accessories
              from Selkirk Sport. Visit us in-store for expert advice and premium gear tailored for champions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm sm:p-10">
                <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent-700">{brand.sport}</p>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase text-brand-900">{brand.name}</h3>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {brand.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-brand-700">
                      <Check className="h-4 w-4 shrink-0 text-success-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-brand-600">
            From rackets and shuttlecocks to paddles, grips, bags, and performance gear, everything you need is right
            here at Fortius.
          </p>
        </div>
      </section>
    </>
  );
}
