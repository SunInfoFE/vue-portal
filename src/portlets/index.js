let AccountStatus = () => import('./AccountStatus');
let Chart = () => import('./Chart');
let Empty = () => import('./Empty');

const portlets = [
  AccountStatus,
  Chart,
  Empty
];

const install = function (Vue) {
  portlets.map(portlet => {
    if (portlet.name) {
      Vue.component(portlet.name, portlet);
    }
  });
};

export default {
  install
};
