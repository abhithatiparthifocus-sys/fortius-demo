import { COACHING_URLS } from '@/data/links';
import type { SportSlug } from '@/data/sports';

export type CoachingProgram = {
  slug: string;
  sport: SportSlug;
  name: string;
  nickname: string;
  summary: string;
  focus: string[];
  idealFor: string;
  schedule: string;
};

export const COACHING_ENROLL_URLS: Record<SportSlug, string> = {
  badminton: 'https://app.clubworx.com/websites/fortius-sports-academy/waivers/badminton-membership-1/signed_waivers/new',
  pickleball: COACHING_URLS.pickleball,
  'table-tennis': COACHING_URLS['table-tennis'],
};

export const COACHING_PROGRAMS: CoachingProgram[] = [
  {
    slug: 'beginner',
    sport: 'badminton',
    name: 'Beginner Program',
    nickname: 'Shuttle Sparks',
    summary: 'Our foundational program for young or first-time players. Fun, play-based sessions teach the building blocks of the game.',
    focus: ['Basic grip, stance and footwork', 'Racket and shuttle coordination', 'Agility, balance and movement games', 'Confidence through play-based learning'],
    idealFor: 'Children aged 5+ or anyone starting badminton with little to no experience.',
    schedule: '1 hour sessions, minimum 2 per week',
  },
  {
    slug: 'intermediate',
    sport: 'badminton',
    name: 'Intermediate Program',
    nickname: 'Smash Starters',
    summary: 'Takes students beyond the basics into structured gameplay, technique refinement and tactical awareness.',
    focus: ['Clears, drops, smashes and net shots', 'Footwork drills and movement patterns', 'Matchplay basics and scoring', 'Physical conditioning and discipline'],
    idealFor: 'Players who have finished beginner training or have basic playing experience.',
    schedule: '1 hour sessions, minimum 2 per week',
  },
  {
    slug: 'advanced',
    sport: 'badminton',
    name: 'Advanced Program',
    nickname: 'Court Commanders',
    summary: 'Built for athletes ready to play at a competitive level, with deeper strategy, match temperament and endurance.',
    focus: ['Advanced shot selection, deception and rallies', 'On-court tactical understanding', 'Mental strength and match preparation', 'Regular sparring and match analysis'],
    idealFor: 'Tournament-ready players who want to step up their performance and consistency.',
    schedule: '1 to 2 hour sessions, minimum 3 per week',
  },
  {
    slug: 'high-performance',
    sport: 'badminton',
    name: 'High Performance Program',
    nickname: 'Fortius Strikers',
    summary: 'Our invitation or assessment based program for serious athletes aiming for state, national or international levels.',
    focus: ['Game-specific training plans and periodization', 'Match strategy and opponent analysis', 'Peak fitness conditioning and recovery planning', 'National-level exposure and tournament support'],
    idealFor: 'Top junior players, national ranking athletes and those preparing for elite tournaments.',
    schedule: 'Assessment based, personalized plan',
  },
  {
    slug: 'junior',
    sport: 'badminton',
    name: 'Junior Program',
    nickname: 'Catch Them Young',
    summary: 'A grassroots program that builds a strong badminton foundation, so young players can enter competition within 2 to 3 years.',
    focus: ['Age-appropriate drills and games', 'Grip, footwork, basic strokes and coordination', 'Strength, agility and endurance for young athletes', 'Discipline, focus and sportsmanship', 'Parent partnership and guidance'],
    idealFor: 'Kids who have completed beginner lessons or have basic playing experience.',
    schedule: '1 hour sessions, minimum 2 per week',
  },
  {
    slug: 'private',
    sport: 'badminton',
    name: '1-on-1 Private Training',
    nickname: 'Your Game. Your Goals. Your Coach.',
    summary: 'A personalized one-on-one program tailored to the goals, pace and potential of each player.',
    focus: ['Customized training plans', 'Full coach attention in every session', 'Video analysis and technique feedback', 'Progress tracking and regular assessments'],
    idealFor: 'Beginners needing strong fundamentals, players fixing specific gaps and athletes returning from injury.',
    schedule: '1 hour sessions, need based',
  },
  {
    slug: 'paddle-foundation',
    sport: 'pickleball',
    name: 'Beginner Program',
    nickname: 'Paddle Foundation',
    summary: 'Introduces players to pickleball in a supportive, fun environment, building strong mechanics through drills and games.',
    focus: ['Forehand, backhand, dinks, drops and serves', 'Balance, positioning and agility basics', 'Scoring, boundaries and respectful play', 'Milestone badges and game-readiness check-ins'],
    idealFor: 'New players, young athletes and recreational learners building confidence.',
    schedule: '1 hour sessions, minimum 2 per week, max batch 12',
  },
  {
    slug: 'paddle-rise',
    sport: 'pickleball',
    name: 'Intermediate Program',
    nickname: 'Paddle Rise',
    summary: 'Takes baseline skills to the next level with game understanding, movement strategy and physical conditioning.',
    focus: ['Returns, overheads, resets and volleys', 'Court coverage, split steps and lateral agility', 'Shot selection and partner communication', 'Endurance, flexibility and mobility'],
    idealFor: 'Players with basic game experience who want to improve technique and start competing.',
    schedule: '1 hour sessions, minimum 2 per week, batch size 6 to 8',
  },
  {
    slug: 'paddle-commanders',
    sport: 'pickleball',
    name: 'Advanced Program',
    nickname: 'Paddle Commanders',
    summary: 'Blends high-level technical training with match tactics and pressure simulation.',
    focus: ['Rolls, flicks, lobs, blocks and deceptive shots', 'Constructing points and exploiting weaknesses', 'Real match simulation under scoreboard pressure', 'Strength, power and recovery routines'],
    idealFor: 'Tournament players and advanced club competitors.',
    schedule: '1 to 2 hour sessions, minimum 3 per week, batch size 8 to 10',
  },
  {
    slug: 'paddle-titans',
    sport: 'pickleball',
    name: 'High Performance Program',
    nickname: 'Paddle Titans',
    summary: 'An elite program that combines sport science, analytics and psychological training with on-court mastery.',
    focus: ['Advanced technical mastery and full-court play', 'Game plans and opponent scouting', 'Periodized conditioning and recovery protocols', 'Pressure drills and mindset training'],
    idealFor: 'Serious competitors aiming for national, collegiate or pro-level success.',
    schedule: '2 hour sessions, minimum 4 per week, batch size 10 to 12',
  },
  {
    slug: 'catch-them-young',
    sport: 'pickleball',
    name: 'Junior Program',
    nickname: 'Catch Them Young',
    summary: 'A grassroots development program for children aged 5 to 8, building early talent, skills and athleticism.',
    focus: ['Playful drills and hand-eye coordination games', 'Paddle grip, footwork, dinks and serves', 'Agility, coordination and endurance', 'Focus, sportsmanship and friendly play'],
    idealFor: 'Children aged 5 to 8 starting their pickleball journey.',
    schedule: '1 hour sessions, minimum 2 per week, batch size 10 to 12',
  },
  {
    slug: 'private',
    sport: 'pickleball',
    name: '1-on-1 Private Coaching',
    nickname: 'Own the Kitchen. Control the Court.',
    summary: 'A personalized one-on-one experience that builds your game from the ground up.',
    focus: ['Tailored training plans', 'Full coach focus with certified coaches', 'Video analysis and tactical feedback', 'Flexible scheduling and progress tracking'],
    idealFor: 'New players, recreational players stepping up, and competitors preparing for matches.',
    schedule: '1 hour sessions, need based, one player per session',
  },
  {
    slug: 'beginner',
    sport: 'table-tennis',
    name: 'Beginner Program',
    nickname: 'Build Your Foundation',
    summary: 'Fundamentals and proper technique through guided practice, clear instruction and hands-on drills.',
    focus: ['Posture for control and balance', 'Basic forehand and backhand strokes', 'Introducing the push for defensive play', 'Fundamental serves and strength for agility'],
    idealFor: 'New players, young athletes and recreational learners.',
    schedule: 'Mon-Fri 4pm to 9pm, Sat-Sun 9am to 12pm and 5pm to 8pm',
  },
  {
    slug: 'intermediate',
    sport: 'table-tennis',
    name: 'Intermediate Program',
    nickname: 'Refine Your Mechanics',
    summary: 'Refines mechanics, improves anticipation and introduces spin, positioning and match strategy.',
    focus: ['Forehand and backhand counter and block techniques', 'Understanding spin and shot variations', 'Developing footwork for mobility', 'Serve and receive fundamentals'],
    idealFor: 'Players with basic game experience who want to begin competitive play.',
    schedule: 'Mon-Fri 4pm to 9pm, Sat-Sun 9am to 12pm and 5pm to 8pm',
  },
  {
    slug: 'advanced',
    sport: 'table-tennis',
    name: 'Advanced Program',
    nickname: 'Tournament Ready',
    summary: 'Tailored for experienced athletes aiming for tournament-level performance, with precision, speed and strategy.',
    focus: ['Counter, block, loop and flick on both wings', 'High-level footwork coordination and speed', 'Advanced serve and receive strategies', 'Advanced game strategy and tactical execution'],
    idealFor: 'Tournament players and advanced club competitors.',
    schedule: 'Mon-Fri 4pm to 9pm, Sat-Sun 9am to 12pm and 5pm to 8pm',
  },
  {
    slug: 'private',
    sport: 'table-tennis',
    name: 'Private & Semi-Private Training',
    nickname: 'Your Pace. Your Potential.',
    summary: 'Personalized coaching tailored to each player, with focused attention and customized guidance.',
    focus: ['Customized training plans', 'Direct coach attention', 'Physical conditioning and recovery guidance'],
    idealFor: 'Beginners, intermediate players fixing gaps, and advanced players sharpening their edge.',
    schedule: 'Mon-Fri 4pm to 9pm, Sat-Sun 9am to 12pm and 5pm to 8pm',
  },
];

export const getProgramsForSport = (sport: SportSlug) => COACHING_PROGRAMS.filter((program) => program.sport === sport);

export const getProgram = (sport: SportSlug, programSlug: string | undefined) =>
  COACHING_PROGRAMS.find((program) => program.sport === sport && program.slug === programSlug);
