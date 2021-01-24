import { Component } from "react";
import { verifyUser } from "../../Auth/Auth";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      status: null,
    };
  }

  componentDidMount() {
    verifyUser().then((rep) => {
      this.setState({ msg: rep.data, status: rep.status });
    });
  }

  render() {
    if (this.state.status === 401 || this.state.status === 403) {
      return <>{this.state.msg}</>;
    }

    if (this.state.status === 200) {
      return <>Good: {this.state.msg}</>;
    }

    return null;
  }
}

export default Dashboard;
