import Vue from "vue";
import Router from "vue-router";
import EventList from "./views/EventList.vue";
//import EventShow from "./views/EventShow.vue";
import EventCreate from "./views/EventCreate.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event/:id",
      name: "event-show",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/EventShow.vue"),
      props: true
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate
    }
  ]
});
