export function naturalSort(values: readonly string[]): string[] {
  if (!Array.isArray(values) || values.some((value) => typeof value !== 'string'))
    throw new TypeError('Expected string array');
  const compare = (a: string, b: string) => {
    const ax = a.match(/\d+|\D+/g) ?? [],
      bx = b.match(/\d+|\D+/g) ?? [];
    for (let i = 0; i < Math.min(ax.length, bx.length); i++) {
      const x = ax[i]!,
        y = bx[i]!;
      const xn = /^\d+$/.test(x),
        yn = /^\d+$/.test(y);
      const result =
        xn && yn
          ? Number(x) - Number(y)
          : x.toLowerCase() < y.toLowerCase()
            ? -1
            : x.toLowerCase() > y.toLowerCase()
              ? 1
              : 0;
      if (result) return result;
    }
    return ax.length - bx.length;
  };
  return values
    .map((value, index) => ({ value, index }))
    .sort((a, b) => compare(a.value, b.value) || a.index - b.index)
    .map((item) => item.value);
}
