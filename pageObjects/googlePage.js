module.exports = {
  /**
   * This is the page object for Google.
   * Selectors are usually named by the labels on the page.
   */
  url: function () {
    return `http://www.google.com`;
  },

  elements: {
    body: {
      selector: 'body',
    },

    listItem: {
      selector: '#lst-ib',
    },

    main: {
      selector: '#main',
    },

    searchBox: {
      selector: 'input[type=text]',
    },

    searchButton: {
      selector: 'button[name=btnG]',
    },
  },
};
