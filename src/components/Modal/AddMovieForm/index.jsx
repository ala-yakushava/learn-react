import React from 'react';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { formField } from '../../../data';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      release_date: '',
      url: '',
      genres: '',
      overview: '',
      runtime: '',
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

  handleReset = () => {
    this.setState({
      title: '',
      release_date: '',
      url: '',
      genres: '',
      overview: '',
      runtime: '',
    })
  }

  render() {
    return (
      <form
        className="AddMovieForm"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <Heading>Add Movie</Heading>
        {formField.map(({ name, label, placeholder}, i) => (
          <TextInput
            key={i}
            name={name}
            label={label}
            placeholder={placeholder}
            value={this.state[name]}
            isRequired={true}
            onChange={this.handleInputChange(this.state[name])}
          />
        ))}
        <ModalFooter>
          <Button type="reset" mode="secondary">Reset</Button>
          <Button type="submit" mode="primary">Submit</Button>
        </ModalFooter>
      </form>
    );
  }
}

export default AddMovieForm;
