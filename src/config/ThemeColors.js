const ThemeColors = {
  primary: {
    light: '#ff5b70',
    main: '#F63A58',
    dark: '#d50741',
    contrastText: '#fff'
  },
  secondary: {
    light: '#fffc82',
    main: '#FFDE65',
    dark: '#e3c34b',
    contrastText: '#fff'
  },
  success: {
    light: '#0acf97',
    main: '#0acf97',
    dark: '#089e74',
    contrastText: '#fff'
  },
  error: {
    light: '#fa5c7c',
    main: '#fa5c7c',
    dark: '#f9375e',
    contrastText: '#fff'
  }
}

export default ThemeColors;

export const styles = () => {
  const style = {
    "--panda-gray-color": '#ececec',
    "--panda-red-color": '#a00',
    "--panda-third-color": '#EBF3FA',
    "--panda-fourth-color": '#2A4B6A',
  };
  for (let key in ThemeColors) {
    for (let field in ThemeColors[key]) {
      style[`--panda-${key}-${field}`] = ThemeColors[key][field]
    }
  }
  return style
}