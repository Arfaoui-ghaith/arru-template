import React, { useRef } from 'react';
import Carte from '../components/Carte';
import Form from '../components/FormProjet'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-smart-data-table/dist/react-smart-data-table.css'
import Print from '../components/PrintProjet'
import FeatherIcon from 'feather-icons-react';
import { Container, Row, Col, Modal, Card, Button } from 'react-bootstrap';

export default function Eligible() {
    return (
        <main className="content">
        <div className="container-fluid p-0">

            <h1 className="h3 mb-3">Gestion des projets</h1>

            <div className="row">
            
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Liste des projets éligibles</h5>
                            
                            </div>
                            <Print />
                    </div>
                
                </div>
                <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Liste des projets non éligibles</h5>
                                
                                </div>
                                <Print />
                        </div>
                    
                </div>
            </div>

        </div>
    </main>
    )
}
