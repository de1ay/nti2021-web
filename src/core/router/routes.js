import TheLayout from '@core/components/TheLayout.vue';
import LandingRoutes from '@modules/landing/routes';
import ProfileRoutes from '@modules/profile/routes';
import WarehouseRoutes from '@modules/warehouse/routes';
import ScheduleRoutes from '@modules/schedule/routes';
import BroadcastRoutes from '@modules/broadcast/routes';
import AboutRoutes from '@modules/about/routes';
import RegirationRoutes from '@modules/registration/routes';

const routes = [
  {
    path: '/',
    component: TheLayout,
    redirect: { name: 'Landing' },
    children: [
      ...LandingRoutes,
      ...ProfileRoutes,
      ...WarehouseRoutes,
      ...ScheduleRoutes,
      ...BroadcastRoutes,
      ...AboutRoutes,
    ],
  },
  ...RegirationRoutes,
];

export default routes;
