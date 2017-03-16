const React = require('react');
const Emoji = require('./Emoji');

const styles = {
  textAlign: 'center'
}

module.exports = ({emojis, actions}) => (
  <div style={styles}>
    {emojis.map(e => <Emoji emoji={e} key={e} onClick={() => {actions.copyToClipboard(e); actions.hideWindow()}} />)}
  </div>
)
