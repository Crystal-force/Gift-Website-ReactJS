import {
  createMuiTheme,
} from '@material-ui/core/styles';
import ThemeColors from './ThemeColors'
export default createMuiTheme({
  palette: {
    primary: ThemeColors.primary,
    secondary: ThemeColors.secondary,
  },
  typography: {
    fontSize: 20,
    fontFamily: 'Poppins'
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
    },
    MuiOutlinedInput: {
      style: {
        borderRadius: "6px"
      }
    },
    MuiButton: {
      variant: "contained",
      color: "primary",
      style: {
        fontFamily: 'Poppins',
        borderRadius: '9px',
        borderWidth: '2px'
      },
    },
    MuiSelect: {
      variant: "outlined",
      size: "small",
      fullWidth: true,
    },
    MuiCheckbox: {
      color: "primary"
    }
  }
});