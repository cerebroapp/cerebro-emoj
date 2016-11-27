const React = require('react');

const style = {fontSize: '6em'};

module.exports = (props) => (
  <span style={style}>{props.emoji}</span>
);
