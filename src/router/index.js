import { createRouter, createWebHistory } from "vue-router";
import i18n from "@/plugins/i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      // meta: {
      //   title: "meta.home",
      // },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/products.vue"),
      meta: {
        title: "meta.all_products",
      },
    },
    {
      path: "/hot-deals",
      name: "hot-deals",
      component: () => import("../views/hot-deals.vue"),
      meta: {
        title: "meta.hot_deals",
      },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("../views/contact-us.vue"),
      meta: {
        title: "meta.contact_us",
      },
    },
    {
      path: "/shopping-cart",
      name: "shopping-cart",
      component: () => import("../views/shopping-cart.vue"),
      meta: {
        title: "meta.shopping_cart",
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/checkout.vue"),
      meta: {
        title: "meta.checkout",
      },
    },
    {
      path: "/order-summary",
      name: "order-summary",
      component: () => import("../views/order-summary.vue"),
      meta: {
        title: "meta.order_summary",
      },
    },

    //error-404
    {
      path: "/:catchAll(.*)",
      name: "error-404",
      component: () => import("../views/error-404.vue"),
      meta: {
        title: "meta.page_not_found",
      },
    },
  ],

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
    // return { top: 0, left: 0, behavior: "instant" };
  },
});

// Global afterEach hook to update document title
router.afterEach((to) => {
  const titleKey = to.meta.title;
  // Translate the title using your i18n instance and set document.title.
  document.title = i18n.global.te(titleKey)
    ? i18n.global.t(titleKey)
    : "e-commerce";
  // document.title = i18n.global.t(titleKey) || 'e-ccommerce';
});

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router;
