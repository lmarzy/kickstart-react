import { Home, About } from '@views/index';

export const appRoutes = [
  {
    path: '/',
    component: Home,
    linkName: 'Home',
  },
  {
    path: '/about',
    component: About,
    linkName: 'About',
  },
];
