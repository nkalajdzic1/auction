export function firstUpperRestLower(string: string) {
  return (
    string[0].toLocaleUpperCase() +
    string.slice(1, string.length).toLocaleLowerCase()
  );
}

export function cmp(category: string, subCategory: string) {
  return category.toLocaleUpperCase() == subCategory.toLocaleUpperCase();
}
