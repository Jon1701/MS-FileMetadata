// React.
import React from 'react';

// Components.
import Jumbotron from './Jumbotron.jsx';
import UserInput from './UserInput.jsx';
import Results from './Results.jsx';
import TabLayout from './TabLayout/TabLayout.jsx';

export default class App extends React.Component {

  // Constructor.
  constructor(props) {
    super(props);

    // Initial state.
    this.state = {
      data: null  // EXIF data.
    };

    // Bind methods to component instance.
    this.updateData = this.updateData.bind(this);
  };

  // Callback to update data in state.
  updateData(data) {
    this.setState({
      data: data
    });
  };

  // Component Render.
  render() {
    return (
      <div>
        <Jumbotron/>
        <UserInput handleUpdateData={this.updateData}/>
        <Results data={this.state.data}/>
        <TabLayout/>
      </div>
    )
  };// End Component Render.

}
