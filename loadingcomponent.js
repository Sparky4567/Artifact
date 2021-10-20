class LoadingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      inject: `.fill-remaining {
	            height: calc(100vh - 56px);}
                .loader {
				border: 16px solid #f3f3f3; 
				border-top: 16px solid #212121; 
				border-radius: 50%;
				width: 120px;
				height: 120px;
				animation: spin 2s linear infinite;
				}
				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}`,
    };
  }

  render() {
    return (
      <div>
        <style>{this.settings.inject}</style>
        <div className="container-fluid fill-remaining">
          <div className="row text-center pt-4 pb-2 align-items-center fill-remaining justify-content-center flex-grow-1">
            <div className="col-lg-4 text-center col-md-4 mx-auto col-sm-12 col-xs-12">
              <div className="col-lg-4 text-center col-md-4 mx-auto col-sm-12 col-xs-12">
                <p>
                  <div className="loader" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
