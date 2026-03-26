 export function formatPrice(value) {
  if (value < 100000) return value.toString();

  const format = (num) => {
    return Number(num.toFixed(2)).toString();
  };

  if (value < 10000000) {
    return format(value / 100000) + " L";
  } else {
    return format(value / 10000000) + " Cr";
  }
}