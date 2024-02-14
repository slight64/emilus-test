import {
  DashboardOutlined,
  FileTextOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const extraNavTree = [
  {
    key: 'extra',
    path: `${APP_PREFIX_PATH}/user-pages`,
    title: 'sidenav.pages',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'extra-pages',
        path: `${APP_PREFIX_PATH}/user-pages`,
        title: 'sidenav.pages',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-list',
            path: `${APP_PREFIX_PATH}/user-pages/user-list`,
            title: 'sidenav.pages.userlist',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
    ],
  },
  {
    key: 'planner',
    path: `${APP_PREFIX_PATH}/planner`,
    title: 'planner',
    icon: FileTextOutlined,
    breadcrumb: false,
    submenu: [],
  },
];
const navigationConfig = [...dashBoardNavTree, ...extraNavTree];

export default navigationConfig;
