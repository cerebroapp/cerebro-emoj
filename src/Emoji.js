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
  border: 'var(--main-border)'
};

module.exports = ({emoji}) => (
  <div style={style}>{emoji}</div>
);
