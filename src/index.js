'use strict';

const React = require('react');
const Preview = require('./Preview');
const icon = require('./plugin-icon.png');
const { memoize } = require('cerebro-tools');

/**
 * Fetch emojis from getdango API
 *
 * @param  {Function} searchTerm
 * @return {Promise}
 */
const fetchEmojis = searchTerm => {
  const q = encodeURIComponent(searchTerm);
  return fetch(`http://emoji.getdango.com/api/emoji?q=${q}`)
    .then(response => response.json())
    .then(data => data.results.map(x => x.text))
};

/**
 * Version of fetchEmojis with caching
 *
 * @type {Function}
 */
const cachedFetchEmojis = memoize(fetchEmojis);

const fn = ({term, display, actions}) => {
  const match = term.match(/^emoji?\s(.+)/);
  if (match) {
    cachedFetchEmojis(match[1]).then(emojis => {
      const all = emojis.join('');
      const items = emojis.map(emoji => ({
        title: all,
        clipboard: all,
        getPreview: () => <Preview emojis={emojis} copy={actions.copyToClipboard} />
      }));

      display(items);
    });
  }
};

module.exports = {
  icon,
  fn,
  name: 'Find relevant emoji',
  keyword: 'emoj'
}
