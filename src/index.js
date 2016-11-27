'use strict';

const React = require('react');
const Emoji = require('./Emoji');
const memoize = require('memoizee');

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

const emojiPlugin = ({term, display}) => {
  const match = term.match(/^emoji?\s(.+)/);
  if (match) {
    cachedFetchEmojis(match[1]).then(emojis => {
      const items = emojis.map(emoji => ({
        title: emoji,
        clipboard: emoji,
        getPreview: () => <Emoji emoji={emoji} />
      }));

      display(items);
    });
  }
};

module.exports = {
  fn: emojiPlugin
}
