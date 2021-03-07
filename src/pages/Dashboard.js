import React from 'react';
import '../css_folder/style.css';
import Form from '../components/Form'

export default function Dashboard() {
	
    return (
        <main className="content">
        <div className="container-fluid p-0">

            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3><strong>Gestion des utilisateurs </strong></h3>
                </div>

            </div>
            <div className="row">
						<div className="col-12 col-xl-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Liste des utilisateurs</h5>
								</div>
								<table className="table">
									<thead>
										<tr>
											<th style={{"width":"13%"}}>Nom</th>
											<th style={{"width":"13%"}}>Adresse</th>
											<th style={{"width":"13%"}}>telephone</th>
											<th className="d-none d-md-table-cell" style={{"width":"13%"}}>Role</th>
											<th style={{"width":"14%"}}>date de creation</th>
											<th style={{"width":"17%"}}>derniere modification </th>
											<th style={{"width":"10%"}}><a href="#"><i className="align-middle" data-feather="user-plus"data-toggle="modal" data-target="#defaultModalPrimary"></i></a></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Vanessa Tucker</td>
											<td>vanessa@gmail.com</td>
											<td className="d-none d-md-table-cell">22 898 972</td>
											<td className="d-none d-md-table-cell">chef projet</td>
											<td className="d-none d-md-table-cell">12/07/2019</td>
											<td className="d-none d-md-table-cell">10/11/2019</td>
											<td className="table-action">
												<a href="#"><i className="align-middle" data-toggle="modal" data-target="#ModalMod" data-feather="edit-2"></i></a>
												<a href="#"><i className="align-middle" data-feather="trash"></i></a>
											</td>
										</tr>
										<tr>
											<td>William Harris</td>
											<td>william@gmail.com</td>
											<td className="d-none d-md-table-cell">22 898 972</td>
											<td className="d-none d-md-table-cell">admin</td>
											<td className="d-none d-md-table-cell">12/07/2019</td>
											<td className="d-none d-md-table-cell">10/11/2019</td>
											<td className="table-action">
												<a href="#"><i className="align-middle" data-toggle="modal" data-target="#ModalMod" data-feather="edit-2"></i></a>
												<a href="#"><i className="align-middle" data-feather="trash"></i></a>
											</td>
										</tr>
										
									</tbody>
								</table>
                <div className="modal fade" id="defaultModalPrimary" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <div className="col-12 col-xl-12">
                                
							         <div className="card">
                                         
									 <div className="modal-header">
													<h5 className="modal-title">Ajouter utilisateur</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <Form />
								</div>
							</div>
                           
						</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

				<div className="modal fade" id="ModalMod" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <div className="col-12 col-xl-12">
                                
							         <div className="card">
                                         
									 <div className="modal-header">
													<h5 className="modal-title">Modifier utilisateur</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <Form />
								</div>
							</div>
                           
						</div>

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
