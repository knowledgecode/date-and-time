import { exec } from '@/plugin.ts';
import type { ParserPluginObject } from '@/plugin.ts';

export const parser = {
  SSSS (str: string) {
    const result = exec(/^\d{1,4}/, str, 'S');

    result.value = Math.trunc(result.value / 10);
    return result;
  },

  SSSSS (str: string) {
    const result = exec(/^\d{1,5}/, str, 'S');

    result.value = Math.trunc(result.value / 100);
    return result;
  },

  SSSSSS (str: string) {
    const result = exec(/^\d{1,6}/, str, 'S');

    result.value = Math.trunc(result.value / 1000);
    return result;
  },

  f (str: string) {
    return exec(/^\d/, str);
  },

  ff (str: string) {
    return exec(/^\d\d?/, str);
  },

  fff (str: string) {
    return exec(/^\d{1,3}/, str);
  }
} satisfies ParserPluginObject;
