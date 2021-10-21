class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      backgroundColor: "#212121",
      color: "white",
    };
    this.heightStyle = {};
  }

  render() {
    return (
      <div
        className="container-fluid fill-remaining"
        style={this.containerStyle}
      >
        <div
          className="row text-center align-items-center fill-remaining justify-content-center flex-grow-1"
          style={this.style}
        >
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto text-center">
            <h1>{config.notfoundError}</h1>
            <h4>{config.notfoundTitle}</h4>
            <h4>{config.notfoundText}</h4>
          </div>
        </div>
      </div>
    );
  }
}
