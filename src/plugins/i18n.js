import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

function loadLocaleMessages() {
  // const locales = [{ en: en }, { ar: ar }];
  // const messages = {};
  // locales.forEach((lang) => {
  //   const key = Object.keys(lang);
  //   messages[key] = lang[key];
  // });
  // return messages;
  return { en, ar };
}

const datetimeFormats = {
  "en-US": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    },
  },
  "ar-EG": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    },
  },
  "ar-SA": {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    },
  },
};

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "EGP",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
  ar: {
    currency: {
      style: "currency",
      currency: "EGP",
      useGrouping: true,
      currencyDisplay: "symbol",
    },
    decimal: {
      style: "decimal",
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 5,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
};

export default createI18n({
  legacy: false,
  locale: "ar",
  // locales: ["en", "ar"],
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
  datetimeFormats,
  numberFormats,
});
