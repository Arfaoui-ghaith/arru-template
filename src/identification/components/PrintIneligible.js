import React from "react";
//import ReactToPrint from 'react-to-print-advanced';
import ComponentToPrint from './TableProjetIneligible';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Button } from 'react-bootstrap';
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

class PrintIneligible extends React.Component {

    render() {

      return (
        <div>
          <ToastContainer />
          <Row className="mt-2">
			<Col>
            </Col>
			<Col md="auto">
                
            </Col>
         
			<Col md="auto">
              
			</Col>
			</Row>
          
          <ComponentToPrint />
        </div>
      );
    }
  }
  
export default PrintIneligible;
  