import React from "react";
//import ReactToPrint from 'react-to-print-advanced';
import ComponentToPrint from './TableZone';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Button } from 'react-bootstrap';

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
class PrintZone extends React.Component {
    render() {
      return (
        <div>
          <Row className="mt-2">
						<Col>
            </Col>
						<Col md="auto">
              <Button  className="btn btn-primary" size="primary" data-toggle="modal" data-target="#defaultModalPrimary">
								<i className="fas fa-plus"></i> 
							</Button>
            </Col>
						<Col xs lg="1">
              
						</Col>
					</Row>
          
          <ComponentToPrint  />
        </div>
      );
    }
  }
  
  export default PrintZone;
  