const React = require('react');
const Emoji = require('./Emoji');

const styles = {
  textAlign: 'center'
}

module.exports = ({emojis}) => (
  <div style={styles}>
    {emojis.map(e => <Emoji emoji={e} />)}
  </div>
)
