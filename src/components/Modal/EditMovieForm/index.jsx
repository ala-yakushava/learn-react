import React from 'react';

import './style.scss';
import Heading from '../../Heading';
import TextInput from '../../TextInput';
import ModalFooter from '../ModalFooter';
import Button from '../../Button';
import { formField } from '../../../data';

class EditMovieForm extends React.Component {
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
        className="EditMovieForm"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <Heading>Edit Movie</Heading>
        <TextInput
          value={this.props.movieId}
          isReadonly={true}
          label="Movie ID" />
        {formField.map(({ id, name, label, placeholder}) => (
          <TextInput
            key={id}
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
          <Button type="submit" mode="primary">Save</Button>
        </ModalFooter>
      </form>
    );
  }
}

export default EditMovieForm;
