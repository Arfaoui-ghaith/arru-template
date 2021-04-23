import React, { useRef } from 'react';
import Carte from '../components/Carte';
import Form from '../components/FormProjet'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-smart-data-table/dist/react-smart-data-table.css'
import Print from '../components/Print'
import { Container, Row, Col, Modal, Card, Button } from 'react-bootstrap';

export default function Projets(ref) {

	const [projets, setProjets] = React.useState([]);
	const [show, setShow] = React.useState(false);
	const [projet, setProjet] = React.useState({});

	const fetchProjets = async () => {
		try {
			const url ='http://localhost:4000/api/v1/projets/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'get',
			  	url,
			});

			if (res.status === 200) {
				setProjets(res.data.projets);
			}

			} catch (err) {
				console.log(err.response.data.message);
			}
	}

	const deleteProjet = async () => {
		try {
			const url =`http://localhost:4000/api/v1/projets/${projet.id}`;
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'delete',
			  	url,
			});

			if (res.status === 203) {
				toast.success('Success', {
					position: 'top-right',
					autoClose: 5000,
					draggable: false
				});
				window.location.replace('/Projets');
			}

			} catch (err) {
				toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				setShow(false);
			}
	}

	React.useEffect(() => {
		fetchProjets();
	},[])

	
    return (
        <main class="content">
				<div class="container-fluid p-0">

					<h1 class="h3 mb-3">Gestion des projets</h1>

					<div class="row">

						<div class="col-3">
							<Carte />
						</div>
					
						<div class="col-9">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Liste des projets</h5>
									</div>
									
								
									<Print />
							</div>
						
					</div>
					</div>

					<div className="modal fade" id="defaultModalPrimary" tabIndex="-1" role="dialog" aria-hidden="true">
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<div className="col-12 col-xl-12">
														<div className="card">
															<div className="modal-header">
																<h5 className="modal-title">Ajouter projet</h5>
																<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
															</div>
															<div className="card-body">
																<Form   />
															</div>
														</div>
													</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

				</div>
				<Modal show={show} onHide={() => setShow(false)}>
					<Modal.Header closeButton>
					<Modal.Title>Confirmation</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are you sure you want delete {projet.nom}!</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={() => { deleteProjet() }}>
						Save Changes
					</Button>
					</Modal.Footer>
				</Modal>
			</main>
    )
}
