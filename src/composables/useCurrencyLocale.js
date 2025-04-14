export function useCurrencyLocale() {
  const { locale } = useI18n();
  const route = useRoute();

  const currencyLocale = computed(() => {
    const marketId = Number(route.params.market) || 1;
    const countryCode = marketId === 2 ? "SA" : "EG";
    const currency = marketId === 2 ? "SAR" : "EGP";

    return {
      locale: `${locale.value}-${countryCode}`,
      currency,
      currencyConfig: {
        style: "currency",
        currency,
        currencyDisplay: "symbol",
      },
    };
  });

  return { currencyLocale };
}
