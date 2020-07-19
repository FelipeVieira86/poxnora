import React, {Component} from 'react';

class FactionSelect extends Component {
  render() {
    const { onChange } = this.props
    return (
      <select
        onChange={onChange}
        className="select"
      >
        <option value="all">All</option>
        <option value="Forsaken Wastes">Forsaken Wastes</option>
        <option value="Sundered Lands">Sundered Lands</option>
        <option value="Ironfist Stronghold">Ironfist Stronghold</option>
        <option value="Underdepths">Underdepths</option>
        <option value="K'thir Forest">K'thir Forest</option>
        <option value="Forglar Swamp">Forglar Swamp</option>
        <option value="Savage Tundra">Savage Tundra</option>
        <option value="Shattered Peaks">Shattered Peaks</option>
      </select>
    );
  }
}

export default FactionSelect;
