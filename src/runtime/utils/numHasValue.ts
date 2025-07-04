export const numHasValue = (n: any, strict = false) => {
  if (n == null || n === undefined) return false
  if (!strict) {
    const a = Number(n)
    return a > 0 && !Number.isNaN(a)
  }
  else {
    return typeof n === 'number' && n > 0
  }
}
