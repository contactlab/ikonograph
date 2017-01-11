import infos from '../package.json';


const today = new Date()
, paths = {
  'dist': './dist',
  'scss': './scss',
  'banner': ['/*',
      ' * ' + infos.name,
      ' * v' + infos.version,
      ' * ',
      ' * ' + infos.description,
      ' * ' + infos.homepage,
      ' * ',
      ' * ' + infos.license + ' license',
      ' * ' + today.toDateString('yyyy-MM-dd'),
      ' */',
      ''].join('\n')
};

export default paths;
