import LazyLoad from './LazyLoad';
export default [
  {
    path: "/B",
    component: LazyLoad(()=>import('./b.js'))
  },
  {
    path: "/C",
    component: LazyLoad(()=>import('./c.js')),
    routes: [
      {
        path: "/C/D",
        component: LazyLoad(()=>import('./d.js'))
      },
      {
        path: "/C/:id",
        component: LazyLoad(()=>import('./e.js'))
      }
    ]
  }
];