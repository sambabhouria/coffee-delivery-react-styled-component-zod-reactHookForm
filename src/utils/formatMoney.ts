export function formatMoney(value: number) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
  });
}
