"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsWidgetStyles = function (theme) { return ({
    icon: {
        background: theme.palette.primary.dark,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        color: '#fff',
    },
    statContent: {
        padding: 12,
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    statValue: {
        fontWeight: 500,
        marginBottom: 10,
    },
    statTitle: {
        color: 'rgba(0, 0, 0, 0.6)',
    },
    clickable: {
        cursor: 'pointer',
    },
}); };
//# sourceMappingURL=statsWidget.styles.js.map