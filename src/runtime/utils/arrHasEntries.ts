export const arrHasEntries = (a: any) => a != null && Array.isArray(a) && a.length > 0 && a.every(e => e != null)
