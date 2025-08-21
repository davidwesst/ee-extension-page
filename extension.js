module.exports = {
    name: 'CommonMatchingApp',
    publisher: 'Sample',
    cards: [{
        type: 'CommonMatchingAppCard',
        source: './src/cards/CommonMatchingAppCard',
        title: 'CommonMatchingApp Card',
        displayCardType: 'CommonMatchingApp Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};