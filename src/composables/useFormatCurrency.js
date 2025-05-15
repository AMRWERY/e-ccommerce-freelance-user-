export function useFormatCurrency() {
  const { locale } = useI18n();
  const route = useRoute();

  const currencyLocale = computed(() => {
    const marketId = Number(route.params.market) || 1;
    const countryCode = marketId === 2 ? "SA" : "EG";
    const currency = marketId === 2 ? "SAR" : "EGP";
    
    // Use ar-EG for Arabic, en-US for English
    const baseLocale = locale.value === 'ar' ? 'ar-EG' : 'en-US';

    return {
      locale: baseLocale,
      currency,      currencyConfig: {
        style: "currency",
        currency,
        currencyDisplay: "symbol",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        numberingSystem: locale.value === 'ar' ? 'arab' : 'latn' // This ensures Arabic numerals for Arabic locale
      },
    };
  });

  const formatCurrency = (value) => {
    if (!value) return new Intl.NumberFormat(currencyLocale.value.locale, {
      ...currencyLocale.value.currencyConfig
    }).format(0);

    return new Intl.NumberFormat(currencyLocale.value.locale, {
      ...currencyLocale.value.currencyConfig
    }).format(parseFloat(value));
  };

  const formatPercentage = (value) => {
    return new Intl.NumberFormat(currencyLocale.value.locale, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      numberingSystem: locale.value === 'ar' ? 'arab' : 'latn'
    }).format(value);
  };

  return {
    formatCurrency,
    formatPercentage,
    currencyLocale
  };
} 