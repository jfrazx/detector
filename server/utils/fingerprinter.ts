import { ngramFingerprint } from 'talisman/keyers/fingerprint';
import { IFingerPrint, SubmissionFileModel } from '../models';

/**
 *
 * @class FingerPrinter
 */
class FingerPrinter {
  private prints: IFingerPrint[] = [];

  constructor(private files: SubmissionFileModel[], private method: string, private ngrams: FingerPrintMethod) {}

  async finger(): Promise<IFingerPrint[]> {
    for (const file of this.files) {
      this.prints.push(
        {
          file,
          filename: file.filename,
          method: this.method,
          contents: await this.impression(file.contents),
        }
      );
    }

    return this.prints;
  }

  private impression(content: string): Promise<string> {
    return Promise.resolve<string>(ngramFingerprint(this.ngrams, content));
  }
}

/**
 *
 *
 * @param {SubmissionFileModel[]} files
 * @returns
 */
export async function baseline(files: SubmissionFileModel[]) {
  // hackey...
  const keys = Object.keys(FingerPrintMethod).filter(k => isNaN(parseInt(k, 10)));
  const prints: IFingerPrint[][] = [];

  for (let index = 0; index < keys.length; index++) {
    prints.push(
      await new FingerPrinter(files, keys[index], FingerPrintMethod[keys[index]]).finger()
    );
  }

  return prints;
}

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
  none,
  unigram,
  bigram,
  trigram,
}
