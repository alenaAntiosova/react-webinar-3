export function getPluralizeItem(num) {
  if (num % 100 > 10 && num % 100 < 20) {
    return ` раз`;
  }
  const endNumb = num % 10;
  if (endNumb >= 2 && endNumb <= 4) {
    return ` раза`;
  } else {
    return ` раз`;
  }
}
