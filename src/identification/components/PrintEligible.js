import React from "react";
import ReactToPrint from 'react-to-print-advanced';
import ComponentToPrint from './TableProjEligible';
import FeatherIcon from 'feather-icons-react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

class PrintEligible extends React.Component {

    render() {

      return (
        <div>
            <Row className="mt-2">
            <Col>
            </Col>
			<Col md="auto">
                
            </Col>
                <Col md="auto">
                    <ReactToPrint
                        trigger={() => <button className="btn btn-primary mr-5" size="primary"><FeatherIcon icon="printer" /></button>}
                        content={() => this.componentRef}
                        style={pageStyle}
                    />
                </Col>
		    </Row>
          
          <ComponentToPrint />
        </div>
      );
    }
  }
  
export default PrintEligible;
  