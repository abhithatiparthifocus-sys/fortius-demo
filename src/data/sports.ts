export type SportSlug = 'badminton' | 'pickleball' | 'table-tennis';

export type Sport = {
  slug: SportSlug;
  name: string;
  headline: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
};

export const SPORTS: Sport[] = [
  {
    slug: 'badminton',
    name: 'Badminton',
    headline: '24 Badminton Courts',
    tagline: 'For Endless Smashes!',
    description:
      'Brand-new facility in Alpharetta with 15 badminton courts at the Game & Grill location, plus 9 more badminton courts at Atlanta Recreation Club (ARC). Every court is designed for high-performance play, training and competition.',
    image: 'https://images.pexels.com/photos/8007075/pexels-photo-8007075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/32944292/pexels-photo-32944292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8007494/pexels-photo-8007494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    highlights: [
      '21 BWF standard indoor courts',
      'Premier academy with top coaches',
      'International standard lighting',
    ],
  },
  {
    slug: 'pickleball',
    name: 'Pickleball',
    headline: '4 Pickleball Courts',
    tagline: 'Fun Loaded Dinks!',
    description:
      'Brand-new pickleball courts at our Game & Grill location in Alpharetta, designed to provide a high-performance space to play, train and compete.',
    image: 'https://images.pexels.com/photos/32975182/pexels-photo-32975182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/37390157/pexels-photo-37390157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/29439346/pexels-photo-29439346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    highlights: [
      '7 tournament grade pickleball courts',
      'International standard lighting',
      'Pickleball coaching available for all levels',
    ],
  },
  {
    slug: 'table-tennis',
    name: 'Table Tennis',
    headline: '10 Table Tennis Tables',
    tagline: 'Ping Pong Enthusiasts',
    description:
      'Ten table tennis tables at our facilities, including the Atlanta Recreation Club (ARC) location. Join a membership built for ping pong enthusiasts.',
    image: 'https://images.pexels.com/photos/32843102/pexels-photo-32843102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/3771083/pexels-photo-3771083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/709134/pexels-photo-709134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    highlights: [
      'Ten table tennis tables',
      'Table tennis coaching available',
      'Membership available for ping pong, dink and smash',
    ],
  },
];

export const getSportBySlug = (slug: string | undefined): Sport | undefined =>
  SPORTS.find((sport) => sport.slug === slug);
