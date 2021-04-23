import React from "react";
import ReactToPrint from "react-to-print";
import ComponentToPrint from './TableProj';

class Print extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      );
    }
  }
  
  export default Print;
  