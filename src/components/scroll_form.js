import React, { Component, PropTypes } from 'react';
import EmailView from './signup/email';
import PersonalDetails from './signup/personal_details';
import Completion from './signup/completion';

class ScrollForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  prevPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <EmailView onSubmit={this.nextPage}/>}
        {page === 2 && <PersonalDetails prevPage={this.prevPage} onSubmit={this.nextPage}/>}
        {page === 3 && <Completion prevPage={this.prevPage} onSubmit={onSubmit}/>}
      </div>
    );
  }
}

ScrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ScrollForm;

