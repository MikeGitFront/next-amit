export const filterEdge = <T>(edge: T | null | undefined): edge is T => !!edge

export const filterEdges = <T>(edges: (T | null | undefined)[] | null | undefined) => edges?.filter(filterEdge) ?? []
