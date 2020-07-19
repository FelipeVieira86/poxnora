import React, { Component } from 'react';

const devs = [
  ['Felipe Vieira', 'https://github.com/FelipeVieira86/'],
  ['Lizzard Medeiros', 'https://github.com/LizzardMedeiros/'],
];

class Footer extends Component {
  render() { 
    return ( <footer className="footer">
    Made by:{' '}
    {
      <a href={devs[0][1]} target="_blank">
        {' '}
        {devs[0][0]}
      </a>
    }{' '}
    {` and `}{' '}
    {
      <a href={devs[1][1]} target="_blank">
        {' '}
        {devs[1][0]}
      </a>
    }
  </footer> );
  }
}
 
export default Footer;