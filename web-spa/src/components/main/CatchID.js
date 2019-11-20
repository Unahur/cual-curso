import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class CatchID extends React.Component {
    state = {
      user: null
    }
    componentDidMount () {
      const { id } = this.props.match.params
  
      fetch(`http://localhost:3001/docentes/${id}`)
        .then((user) => {
          this.setState(() => ({ user }))
        })
    }
    render() {
      return id;
    }
  }

  export default CatchID;