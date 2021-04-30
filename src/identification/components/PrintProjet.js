import React from "react";
import ReactToPrint from 'react-to-print-advanced';
import ComponentToPrint from './TableProj';
import FeatherIcon from 'feather-icons-react';


const pageStyle = `
  @page {
    size: 80mm 50mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;
class PrintProjet extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <button class="btn btn-primary float-right mr-5 mt-n3" size="primary"><FeatherIcon icon="printer" /></button>}
            content={() => this.componentRef}
            style={pageStyle}
          />
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      );
    }
  }
  
  export default PrintProjet;
  