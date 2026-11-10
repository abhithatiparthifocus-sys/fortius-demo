import { Award, GraduationCap, Lightbulb, Sofa } from 'lucide-react';

const FACILITY_FEATURES = [
  {
    icon: Award,
    title: '21 BWF Standard Indoor Courts',
    text: 'Badminton courts built to international BWF standards for serious training and tournament play.',
  },
  {
    icon: GraduationCap,
    title: 'Premier Academy With Top Coaches',
    text: 'Learn from experienced coaches who train athletes from beginners to pros.',
  },
  {
    icon: Lightbulb,
    title: 'International Standard Lighting',
    text: 'Bright, even lighting on every court so you can play your best at any hour.',
  },
  {
    icon: Sofa,
    title: 'Relaxing Lounge Area',
    text: 'A place to recover between games. Coming soon.',
  },
];

export default function FacilityHighlights() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {FACILITY_FEATURES.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="group rounded-2xl border border-brand-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700 transition-colors duration-300 group-hover:bg-accent-700 group-hover:text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold uppercase text-brand-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-600">{text}</p>
        </div>
      ))}
    </div>
  );
}
