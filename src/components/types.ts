import type { HTMLAttributes, HTMLTag } from 'astro/types';

export type PartialAstroProps = Pick<HTMLAttributes<HTMLTag>, 'class' | 'class:list'>;
