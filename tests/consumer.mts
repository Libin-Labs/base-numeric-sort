import * as api from '@lp-labs/base-numeric-sort';
import { naturalSort } from '@lp-labs/base-numeric-sort';
console.log(naturalSort(['file10', 'file2', 'file1']));
// @ts-expect-error invalid argument must be rejected by declarations
api.naturalSort('files');
