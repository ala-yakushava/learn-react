import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Select from '../../Select';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      sort: 'release date'
    };
  }

  handleChange = (evt) => {
    this.setState({
      sort: evt.target.value,
    });
    console.log(evt.target.value);
  }

  handleClick = (value) => () => {
    this.setState({
      filter: value,
    });
    console.log(value);
  }

  render() {
    const cn = (value) => {
      const isActive = this.state.filter === value;
      return isActive ? 'Filter_item active' : 'Filter_item';
    }

    const { genres, options } = this.props;

    return (
      <div className="Filter">
        <div className="Filter_list">
          { genres.map(({ id, value, label }) =>
          <a className={cn(value)} key={ id } onClick={this.handleClick(value)}>
            { label }
          </a>) }
        </div>
        <div className="Filter_select">
          <span className="Filter_label">Sort by</span>
          <Select options={options} value={this.state.sort} onChange={this.handleChange} />
        </div>
      </div>
    )
  };
}

Filter.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  options: PropTypes.arrayOf(PropTypes.object),
};

export default Filter;
