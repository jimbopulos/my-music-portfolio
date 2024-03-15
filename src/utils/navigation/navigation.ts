export interface NavProps {
  id: number;
  title: string;
  href: string;
}

export const navItems: NavProps[] = [
  {
    id: 1,
    title: 'Bio',
    href: '/',
  },
  {
    id: 2,
    title: 'Lessons',
    href: '/lessons',
  },
  {
    id: 3,
    title: 'Recording',
    href: '/recording',
  },
  {
    id: 4,
    title: 'Contact',
    href: '/contact',
  },
];
