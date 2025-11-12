export const objHasEntries = (o: any) => o != null
  && typeof o === 'object'
  && !Array.isArray(o)
  && Object.keys(o).length > 0
  && Object.values(o).some(e => e != null)
