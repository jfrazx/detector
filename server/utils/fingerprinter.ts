import { ngramFingerprint } from 'talisman/keyers/fingerprint';

/**
 * fingerprint string contents by n-grams
 *
 * @export
 * @param {string} content
 * @param {number} ngrams
 * @returns {Promise<string>}
 */
export function fingerprint(content: string, ngrams: FingerPrintMethod): Promise<string> {
  return Promise.resolve<string>(ngramFingerprint(ngrams, content));
}

/**
 *
 *
 * @export
 * @enum {number}
 */
export enum FingerPrintMethod {
  unigram = 1,
  bigram,
  trigram,
}
