import { ParserPlugin, exec } from '@/plugin.ts';

class Parser extends ParserPlugin {
  SSSSSSS (str: string) {
    const result = exec(/^\d{1,7}/, str, 'S');

    result.value = Math.trunc(result.value / 10000);
    return result;
  }

  SSSSSSSS (str: string) {
    const result = exec(/^\d{1,8}/, str, 'S');

    result.value = Math.trunc(result.value / 100000);
    return result;
  }

  SSSSSSSSS (str: string) {
    const result = exec(/^\d{1,9}/, str, 'S');

    result.value = Math.trunc(result.value / 1000000);
    return result;
  }

  F (str: string) {
    return exec(/^\d/, str);
  }

  FF (str: string) {
    return exec(/^\d\d?/, str);
  }

  FFF (str: string) {
    return exec(/^\d{1,3}/, str);
  }
}

export const parser = new Parser();
