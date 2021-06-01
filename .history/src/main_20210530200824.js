import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./load-icons";
import VueMeta from "vue-meta";
import "./tailwind.css";

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  created: function () {
    // `this` points to the vm instance
    document.body.classList.add("")
  },
  // store,
  render: (h) => h(App),
}).$mount("#app");
