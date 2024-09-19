export const dateFormatter = new Intl.DateTimeFormat("ca-EN");

export const priceFormatter = new Intl.NumberFormat("ca-EN", {
  style: "currency",
  currency: "CAD",
});
