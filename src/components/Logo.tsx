import { Link } from 'react-router-dom';

type LogoProps = {
  variant?: 'dark' | 'light';
};

export default function Logo({ variant = 'dark' }: LogoProps) {
  const image = (
    <img
      src="/fortius-logo.png"
      alt="Fortius Sports Academy"
      className="h-10 w-auto sm:h-12"
    />
  );

  return (
    <Link to="/" className="inline-flex items-center transition-transform duration-300 hover:scale-[1.03]" aria-label="Fortius Sports Academy home">
      {variant === 'light' ? <span className="rounded-2xl bg-white px-4 py-2 shadow-md">{image}</span> : image}
    </Link>
  );
}
