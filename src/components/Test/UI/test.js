import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { onTextChange } from '../Actions/actions';
import './test.scss';

class Test extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onTextChange = e => {
    this.setState({ text: e.target.value });
    this.props.handleTextChange(e);
  };

  suggestionSelected = value => {
    console.log('selected---');
  };

  renderSuggestions() {
    const { suggestions } = this.props;
    if (suggestions.length === 0) {
      return null;
    }

    let data = Object.keys(suggestions);

    console.log('data', data);
    console.log(suggestions);
    return (
      <div className="srchList">
        <ul>
          {data.map((item, index) => (
            <li onClick={() => this.suggestionSelected(item)}>data</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-12 input">
              <input
                value={this.state.text}
                onChange={this.onTextChange}
                type="text"
                placeHolder="Search"
              />
            </div>
            <div className="col-md-12 justify-content-md-center">
              {this.renderSuggestions()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  suggestions: state.suggestions,
  text: state.text
});

const mapDispatchToProps = dispatch => ({
  handleTextChange: e => dispatch(onTextChange(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
