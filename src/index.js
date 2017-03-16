'use strict';

const React = require('react');
const Preview = require('./Preview');
const icon = require('./plugin-icon.png');
const { memoize } = require('cerebro-tools');
const id = 'emoj';

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
  let match = term.match(/^emoji?\s(.+)$/);
  match = match || term.match(/^(.+)\semoji?$/);
  if (match) {
    const searchTerm = match[1];
    display({
      id, icon,
      title: `Looking for ${searchTerm} emojis...`
    });
    cachedFetchEmojis(searchTerm).then(emojis => {
      const title = emojis.join('');
      display({
        id, icon, title,
        clipboard: title,
        getPreview: () => (
          <Preview
            emojis={emojis}
            actions={actions}
          />
        )
      });
    });
  }
};

module.exports = {
  icon, fn,
  name: 'Find relevant emoji',
  keyword: 'emoj'
}
