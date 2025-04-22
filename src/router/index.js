import { createRouter, createWebHashHistory } from "vue-router";
import i18n from "@/plugins/i18n";
import home from "../views/home.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:market",
      children: [
        {
          path: "",
          name: "home",
          component: home,
        },
        {
          path: "products",
          name: "products",
          component: () => import("../views/products/index.vue"),
          meta: {
            title: "meta.all_products",
          },
        },
        {
          path: "product/:id",
          name: "product-details",
          component: () => import("../views/products/id.vue"),
          props: true,
          meta: {
            title: "meta.product_details",
          },
        },
        {
          path: "hot-deals",
          name: "hot-deals",
          component: () => import("../views/hot-deals.vue"),
          meta: {
            title: "meta.hot_deals",
          },
        },
        // {
        //   path: "contact-us",
        //   name: "contact-us",
        //   component: () => import("../views/contact-us.vue"),
        //   meta: {
        //     title: "meta.contact_us",
        //   },
        // },
        {
          path: "shopping-cart",
          name: "shopping-cart",
          component: () => import("../views/shopping-cart.vue"),
          meta: {
            title: "meta.shopping_cart",
          },
        },
        {
          path: "checkout",
          name: "checkout",
          component: () => import("../views/checkout.vue"),
          meta: {
            title: "meta.checkout",
          },
        },
        {
          path: "order-summary",
          name: "order-summary",
          component: () => import("../views/order-summary.vue"),
          meta: {
            title: "meta.order_summary",
          },
        },
      ],
    },

    //redirection
    {
      path: "/",
      redirect: () => ({
        name: "home",
        params: { market: localStorage.getItem("selectedMarket") || "1" },
      }),
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
  },
});

// Global afterEach hook to update document title
router.afterEach((to) => {
  const titleKey = to.meta.title;
  document.title = i18n.global.te(titleKey)
    ? i18n.global.t(titleKey)
    : "BRAND SHOP";
});

// Add this before router export
router.beforeEach(async (to, from, next) => {
  const validMarkets = ["1", "2"]; // Egypt (1) and KSA (2)
  const marketParam = to.params.market;

  // Skip market validation for error page
  if (to.name === "error-404") {
    return next();
  }

  // Validate market parameter
  if (marketParam && validMarkets.includes(marketParam)) {
    // Update currency format when market changes
    const currency = marketParam === "2" ? "SAR" : "EGP";
    i18n.global.mergeNumberFormat("en", {
      currency: {
        style: "currency",
        currency,
        currencyDisplay: "symbol",
      },
    });
    // Update number formats using the imported i18n instance
    i18n.global.mergeLocaleMessage("en", {
      numberFormats: {
        currency: {
          style: "currency",
          currency,
          currencyDisplay: "symbol",
        },
      },
    });
    localStorage.setItem("selectedMarket", marketParam);
    return next();
  }

  // Handle invalid/missing market
  const defaultMarket = localStorage.getItem("selectedMarket") || "1";
  const redirectPath = {
    path: to.fullPath.replace(/^\/[^/]*/, `/${defaultMarket}`),
  };
  next(redirectPath);
});

export default router;
