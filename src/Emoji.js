const React = require('react');

/**
 * CSS Styles for emoji block
 *
 * @type {Object}
 */
const style = {
  display: 'inline-block',
  width: '75px',
  height: '75px',
  lineHeight: '75px',
  textAlign: 'center',
  fontSize: '3em',
  border: 'var(--main-border)',
  cursor: 'pointer'
};

module.exports = ({emoji, onClick}) => (
  <div style={style} onClick={onClick}>{emoji}</div>
);
