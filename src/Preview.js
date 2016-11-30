const React = require('react');
const Emoji = require('./Emoji');

const styles = {
  textAlign: 'center'
}

module.exports = ({emojis, copy}) => (
  <div style={styles}>
    {emojis.map(e => <Emoji emoji={e} key={e} onClick={() => copy(e)} />)}
  </div>
)
