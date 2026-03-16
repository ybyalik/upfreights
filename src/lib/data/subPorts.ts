/**
 * Sub-port mappings used across route listing components.
 * Single source of truth for origin and destination sub-port relationships.
 */

/** Origin sub-port name → parent city */
export const originSubPortMap: Record<string, string> = {
  'Shekou': 'Shenzhen',
  'Yantian': 'Shenzhen',
  'Nansha': 'Guangzhou',
};

/** Destination sub-port name → parent destination city */
export const destSubPortMap: Record<string, string> = {
  'Vado Ligure': 'Genoa',
};

/** Origin sub-ports with their anchor IDs, grouped by parent city */
export const originSubPorts = [
  { name: 'Shekou', anchor: 'shekou', parentCity: 'Shenzhen' },
  { name: 'Yantian', anchor: 'yantian', parentCity: 'Shenzhen' },
  { name: 'Nansha', anchor: 'nansha', parentCity: 'Guangzhou' },
] as const;

/** Get sub-ports that apply for a given origin city */
export function getSubPortsForCity(originCity: string): typeof originSubPorts[number][] {
  return originSubPorts.filter(sp => sp.parentCity === originCity);
}
