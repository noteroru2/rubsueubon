const nestedModelSlugs = {
  'iphone-ubon': [],
  'ipad-ubon': [],
  'macbook-ubon': ['macbook-air-m1', 'macbook-pro-m1', 'macbook-intel'],
  'b2b-lot-ubon': [],
} as const;

export type NestedModelParent = keyof typeof nestedModelSlugs;

export function isNestedModelSlugAllowed(parent: NestedModelParent, slug: string) {
  return (nestedModelSlugs[parent] as readonly string[]).includes(slug);
}
