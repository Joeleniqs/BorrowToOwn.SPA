export const amountFormatter = (value) =>
  `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
