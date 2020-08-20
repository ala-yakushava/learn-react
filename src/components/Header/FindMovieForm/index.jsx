import React from 'react';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import Button from '../../Button';

class FindMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleInputChange = () => (evt) => {
    const { target: { name, value } } = evt;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (evt) => {
    console.log(this.state);
    evt.preventDefault();
  }

  render() {
    return (
      <form className="FindMovieForm" onSubmit={this.handleSubmit}>
        <Heading className="FindMovieForm_title">Find your movie</Heading>
        <TextInput
          name="text"
          className="FindMovieForm_input"
          placeholder="What do you want to watch?"
          value={this.state.text}
          isRequired={true}
          onChange={this.handleInputChange(this.state.text)}
        />
        <Button type="submit" mode="primary">Search</Button>
      </form>
    );
  }
}

export default FindMovieForm;
