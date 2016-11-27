'use strict';

const emojiPlugin = ({term, display}) => {
  const match = term.match(/^emoji?\s(.+)/);
  if (match) {
    const searchTerm = match[1];
    const q = encodeURIComponent(searchTerm);
    fetch(`http://emoji.getdango.com/api/emoji?q=${q}`)
      .then(response => response.json())
      .then(data => {
        const items = data.results.map(x => ({
          title: x.text,
          getPreview: () => `<span style='font-size: 6em;'>${x.text}</span>`
        }));

        display(items);
      });
  }
};

module.exports = {
  fn: emojiPlugin
}
