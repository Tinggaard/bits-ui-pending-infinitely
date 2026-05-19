import type Base from './Base.svelte';
import type { ComponentProps } from 'svelte';

export type Props = Omit<ComponentProps<typeof Base>, 'pending'>;
