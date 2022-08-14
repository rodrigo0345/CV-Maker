import Header from '../components/Header/Header.jsx';
import Form from '../components/Form/Form.jsx';
import new_user from '../Data/user.js';

import { Component } from 'react';

class App extends Component {
  
  constructor() {
    super();
    this.state = { 
      data: [],
      experiences: 1,
      schools: 1,
      projects: 1
    }
    
    this.user = new new_user();
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  changeHandler(e) {
    const element = e.target;

    const name = element.className;
    console.log(name)
    
    if(name.includes('add')) {
      const code = name.split('--')[1];

      if(code.includes('exp')) {
        this.setState({
          experiences: this.state.experiences + 1
        });
      }
      else if(code.includes('edu')) {
        this.setState({
          schools: this.state.schools + 1
        });
      }
      else if(code.includes('prj')) {
        this.setState({
          projects: this.state.projects + 1
        });
      }

      return;
    }
    else if(name.includes('del')) {
      const code = name.split('--')[1];

      if(code.includes('exp')) {
        this.setState({
          experiences: this.state.experiences - 1
        });
      }
      else if(code.includes('edu')) {
        this.setState({
          schools: this.state.schools - 1
        });
      }
      else if(code.includes('prj')) {
        this.setState({
          projects: this.state.projects - 1
        });
      }

      return;
    }

    const value = element.value;

    if(!element) return;
    if(!value || !name) return;

    this.setState({
      data: this.user.updateData(name, value)
    });
  }

  render()
  {
    return (
      <div className="App">

        <Header />
        <Form changeHandler={this.changeHandler} saveHandler={this.saveHandler} loadExample={this.loadExample} generatePDF={this.generatePDF} experiences={this.state.experiences} schools={this.state.schools} projects={this.state.projects} />

      </div>
    );
  }
}

export default App;
