import stylesheet from './synthwave.css.js'

// Synthwave / outrun color palette
const background = '#150a2b'
const surface = '#1f0f3d'
const currentLine = '#2d1b4e'
const foreground = '#f4eaff'
const comment = '#8b7bb3'
const cyan = '#00f0ff'
const pink = '#ff2e97'
const purple = '#b967ff'
const orange = '#ff8b3d'
const yellow = '#ffe66d'
const red = '#ff2e5b'

// Self-hosted display face for headings/branding, in the outrun-signage
// style; body text stays on the system stack for legibility in dense lists
const AUDIOWIDE_FONT_PATH = 'fonts/Audiowide-Regular.woff2'
const headingFont = '"Audiowide", sans-serif'
const bodyFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',')

// For Album, Playlist play button
const musicListActions = {
  alignItems: 'center',
  '@global': {
    'button:first-child:not(:only-child)': {
      '@media screen and (max-width: 720px)': {
        transform: 'scale(1.5)',
        margin: '1rem',
        '&:hover': {
          transform: 'scale(1.6) !important',
        },
      },
      transform: 'scale(2)',
      margin: '1.5rem',
      minWidth: 0,
      padding: 5,
      transition: 'transform .3s ease',
      backgroundColor: `${pink} !important`,
      color: background,
      borderRadius: 500,
      border: 0,
      '&:hover': {
        transform: 'scale(2.1)',
        backgroundColor: `${pink} !important`,
        border: 0,
      },
    },
    'button:only-child': {
      margin: '1.5rem',
    },
    'button:first-child>span:first-child': {
      padding: 0,
    },
    'button:first-child>span:first-child>span': {
      display: 'none',
    },
    'button>span:first-child>span, button:not(:first-child)>span:first-child>svg':
      {
        color: foreground,
      },
  },
}

export default {
  themeName: 'Synthwave',
  palette: {
    primary: {
      main: pink,
      contrastText: background,
    },
    secondary: {
      main: cyan,
      contrastText: background,
    },
    warn: {
      main: yellow,
      contrastText: background,
    },
    error: {
      main: red,
    },
    type: 'dark',
    background: {
      default: background,
      paper: surface,
    },
  },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont },
    h2: { fontFamily: headingFont },
    h3: { fontFamily: headingFont },
    h4: { fontFamily: headingFont },
    h5: { fontFamily: headingFont },
    h6: { fontFamily: headingFont },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'Audiowide',
          fontStyle: 'normal',
          fontWeight: 400,
          fontDisplay: 'swap',
          src: `url('${AUDIOWIDE_FONT_PATH}') format('woff2')`,
        },
      },
    },
    MuiPaper: {
      root: {
        color: foreground,
        backgroundColor: surface,
      },
    },
    MuiAppBar: {
      positionFixed: {
        backgroundColor: `${surface} !important`,
        backgroundImage: `linear-gradient(90deg, ${purple}22, ${pink}22)`,
        boxShadow:
          'rgba(255, 46, 151, 0.25) 0px 4px 6px, rgba(0, 240, 255, 0.1) 0px 5px 7px',
      },
    },
    MuiDrawer: {
      root: {
        background: background,
      },
    },
    MuiButton: {
      textPrimary: {
        color: pink,
      },
      textSecondary: {
        color: cyan,
      },
    },
    MuiIconButton: {
      root: {
        color: foreground,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: currentLine,
      },
    },
    MuiFormGroup: {
      root: {
        color: foreground,
      },
    },
    MuiFormLabel: {
      root: {
        color: comment,
        '&$focused': {
          color: pink,
        },
      },
    },
    MuiFormHelperText: {
      error: {
        color: red,
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: `${surface} !important`,
      },
    },
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: currentLine,
        },
        '&:hover $notchedOutline': {
          borderColor: comment,
        },
        '&$focused $notchedOutline': {
          borderColor: pink,
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: currentLine,
        '&:hover': {
          backgroundColor: comment,
        },
        '&$focused': {
          backgroundColor: currentLine,
        },
      },
    },
    MuiTableRow: {
      root: {
        transition: 'background-color .3s ease',
        '&:hover': {
          backgroundColor: `${currentLine} !important`,
        },
      },
    },
    MuiTableHead: {
      root: {
        color: foreground,
        background: surface,
      },
    },
    MuiTableCell: {
      root: {
        color: foreground,
        background: `${surface} !important`,
        borderBottom: `1px solid ${currentLine}`,
      },
      head: {
        color: `${cyan} !important`,
        background: `${currentLine} !important`,
      },
      body: {
        color: `${foreground} !important`,
      },
    },
    MuiSwitch: {
      colorSecondary: {
        '&$checked': {
          color: cyan,
        },
        '&$checked + $track': {
          backgroundColor: cyan,
        },
      },
    },
    NDAlbumGridView: {
      albumName: {
        marginTop: '0.5rem',
        fontWeight: 700,
        color: foreground,
      },
      albumSubtitle: {
        color: comment,
      },
      albumContainer: {
        backgroundColor: surface,
        borderRadius: '8px',
        padding: '.75rem',
        transition: 'background-color .3s ease',
        '&:hover': {
          backgroundColor: currentLine,
        },
      },
      albumPlayButton: {
        backgroundColor: pink,
        borderRadius: '50%',
        boxShadow: '0 8px 8px rgb(0 0 0 / 30%)',
        padding: '0.35rem',
        transition: 'padding .3s ease',
        '&:hover': {
          background: `${pink} !important`,
          padding: '0.45rem',
        },
      },
    },
    NDPlaylistDetails: {
      container: {
        background: `linear-gradient(${currentLine}, transparent)`,
        borderRadius: 0,
        paddingTop: '2.5rem !important',
        boxShadow: 'none',
      },
      title: {
        fontFamily: headingFont,
        fontWeight: 400,
        color: foreground,
      },
      details: {
        fontSize: '.875rem',
        color: comment,
      },
    },
    NDAlbumDetails: {
      root: {
        background: `linear-gradient(${currentLine}, transparent)`,
        borderRadius: 0,
        boxShadow: 'none',
      },
      cardContents: {
        alignItems: 'center',
        paddingTop: '1.5rem',
      },
      recordName: {
        fontFamily: headingFont,
        fontWeight: 400,
        color: foreground,
      },
      recordArtist: {
        fontSize: '.875rem',
        fontWeight: 700,
        color: cyan,
      },
      recordMeta: {
        fontSize: '.875rem',
        color: comment,
      },
    },
    NDCollapsibleComment: {
      commentBlock: {
        fontSize: '.875rem',
        color: comment,
      },
    },
    NDAlbumShow: {
      albumActions: musicListActions,
    },
    NDPlaylistShow: {
      playlistActions: musicListActions,
    },
    NDAudioPlayer: {
      audioTitle: {
        color: foreground,
        fontSize: '0.875rem',
      },
      songTitle: {
        fontWeight: 400,
      },
      songInfo: {
        fontSize: '0.675rem',
        color: comment,
      },
    },
    NDLogin: {
      systemNameLink: {
        color: pink,
        fontFamily: headingFont,
        fontSize: '1.5rem',
      },
      welcome: {
        color: foreground,
      },
      card: {
        minWidth: 300,
        background: surface,
      },
      button: {
        boxShadow: '3px 3px 5px #0c0619',
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background: `linear-gradient(to bottom, rgba(21 10 43 / 72%), ${background})!important`,
      },
    },
    RaLayout: {
      content: {
        padding: '0 !important',
        background: background,
      },
      root: {
        backgroundColor: background,
      },
    },
    RaList: {
      content: {
        backgroundColor: background,
      },
    },
    RaListToolbar: {
      toolbar: {
        backgroundColor: background,
        padding: '0 .55rem !important',
      },
    },
    RaSidebar: {
      fixed: {
        backgroundColor: background,
      },
      drawerPaper: {
        backgroundColor: `${background} !important`,
      },
    },
    MuiTableSortLabel: {
      root: {
        color: `${cyan} !important`,
        '&:hover': {
          color: `${pink} !important`,
        },
        '&$active': {
          color: `${pink} !important`,
          '&& $icon': {
            color: `${pink} !important`,
          },
        },
      },
    },
    RaMenuItemLink: {
      root: {
        color: foreground,
        '&[aria-current="page"]': {
          color: `${pink} !important`,
        },
        '&[aria-current="page"] .MuiListItemIcon-root': {
          color: `${pink} !important`,
        },
      },
      active: {
        color: `${pink} !important`,
        '& .MuiListItemIcon-root': {
          color: `${pink} !important`,
        },
      },
    },
    RaLink: {
      link: {
        color: cyan,
      },
    },
    RaButton: {
      button: {
        margin: '0 5px 0 5px',
      },
    },
    RaPaginationActions: {
      currentPageButton: {
        border: `2px solid ${pink}`,
      },
      button: {
        backgroundColor: currentLine,
        minWidth: 48,
        margin: '0 4px',
      },
    },
  },
  player: {
    theme: 'dark',
    stylesheet,
  },
}
