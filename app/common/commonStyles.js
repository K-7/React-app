import { colours, dimensions, fonts } from './themes';

var HEADER_HEIGHT = dimensions.headerHeight;

module.exports = {
    container: {
        flex: 1,        
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        padding: dimensions.contentPadding,
    },
    footer: {
        position: 'absolute',
        height: dimensions.footerHeight,
        bottom: 0,
        left: 0,
        right: 0
    },
    input: {
        height: dimensions.inputHeight,
        padding: dimensions.controlPadding,
        marginBottom: dimensions.controlMargin,
        borderColor: colours.fillBlue,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    label: {
        color: colours.textDarkBlue,
        padding: dimensions.labelPadding,
        fontWeight: fonts.weightBold,
        fontStyle: 'italic'
    },
    errorText: {
        color: colours.errorCoral,
        padding: dimensions.labelPadding,
        fontWeight: fonts.weightBold,
        fontStyle: 'italic'
    },
    loaderIcon: {
        width: 70,
        height: 70,
        margin: dimensions.controlMargin,
        marginTop: 40,
        alignItems: 'stretch',
    }
};