import { addAliases } from 'module-alias';

export default function addPathAliases() {
  addAliases({
    '@app-types': `${__dirname}/src/types`,
    '@helpers': `${__dirname}/src/helpers`,
  });
}
