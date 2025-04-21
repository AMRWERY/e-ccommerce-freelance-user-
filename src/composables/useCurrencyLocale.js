export function useCurrencyLocale() {
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
      currency,
      currencyConfig: {
        style: "currency",
        currency,
        currencyDisplay: "symbol",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        numberingSystem: locale.value === 'ar' ? 'arab' : 'latn' // This ensures Arabic numerals for Arabic locale
      },
    };
  });

  return { currencyLocale };
}
