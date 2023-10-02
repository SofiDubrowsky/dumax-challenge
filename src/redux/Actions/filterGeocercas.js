export const FILTER_GEOCERCAS = "FILTER_GEOCERCAS"

export const filterGeocercas = (payload) => {
  return {
    type: FILTER_GEOCERCAS,
    payload,
  };
}