const mainColors = {
    green1: '#0BCAD4',
    green2: '#CEEEEF',
    green3: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    dark3: '#0066CB',
    grey1: '#7D8797',
    grey2: '#e9e9e9',
    grey3: '#EDEEF0',
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    white: 'white',
    black: 'black',
    disable: mainColors.grey3,
    active: mainColors.dark3,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.dark2,
        menuActive: mainColors.green1,
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: 'white',
        },
        secondary: {
            background: mainColors.green2,
            text: mainColors.dark1
        },
    },
    chatbox: {
        primary: mainColors.green3,
        secondary: mainColors.green1,
    },
    border: mainColors.grey2,
    cardLight: mainColors.green3,
}

