import React, { useRef } from 'react';
import Carte from '../components/Carte';
import Form from '../components/FormZone'
import FormUpdate from '../components/FormUpdateZone'
import 'react-toastify/dist/ReactToastify.css';
import 'react-smart-data-table/dist/react-smart-data-table.css'
import Print from '../components/PrintZone'
import LoadingBar from 'react-top-loading-bar';


export default function Zone(ref) {
    const [zone, setZone] = React.useState([]);
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		setProgress(100);
		return () => setProgress(0);
	},[]);

    return (
        <main className="content">
			<LoadingBar color='#1a2e8a' height='4px' progress={progress}  />
				<div className="container-fluid p-0">

					<h1 className="h3 mb-3">Gestion des Zones d'intervention</h1>

					<div className="row">
					
						<div className="col-12">
							<div className="card">
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
																<h5 className="modal-title">Ajouter une zone</h5>
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

									<div className="modal fade" id="modif" tabIndex="-1" role="dialog" aria-hidden="true">
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<div className="col-12 col-xl-12">
														<div className="card">
															<div className="modal-header">
																<h5 className="modal-title">Modifier la zone</h5>
																<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
															</div>
															<div className="card-body">
																<FormUpdate   />
															</div>
														</div>
													</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

				</div>
				
			</main>
    )
}
