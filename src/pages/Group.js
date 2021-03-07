import React from 'react'
import '../css_folder/style.css'
import GroupForm from '../components/GroupForm'

export default function Group() {
    return (
        <main className="content">
        <div className="container-fluid p-0">

            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3><strong>Gestion des groupes </strong></h3>
                </div>

            </div>
            <div className="row">
						<div className="col-12 col-xl-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Liste des groupes</h5>
								</div>
								<table className="table">
									<thead>
										<tr>
											<th style={{"width":"30%"}}>titre</th>
											<th style={{"width":"60%"}}>specifications</th>
											
											<th style={{"width":"10%"}}><a href="#"><i className="align-middle" data-feather="folder-plus"data-toggle="modal" data-target="#defaultModalPrimary"></i></a></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>chef projet</td>
											<td>
                                            <table className="table">
									<tbody>
										<tr>
											<td>Mahdia</td>
                                            </tr>
                                            <tr>
											<td>Tunis</td>
											
										</tr>
										
									</tbody>
								</table>
                                            </td>
								
											<td className="table-action">
												<a href="#"><i className="align-middle" data-toggle="modal" data-target="#ModalMod" data-feather="edit-2"></i></a>
												<a href="#"><i className="align-middle" data-feather="trash"></i></a>
											</td>
										</tr>
                                        <tr>
											<td>directeur</td>
											<td>
                                            <table className="table">
									<tbody>
										<tr>
											<td>financier</td>
                                            </tr>
                                            <tr>
											<td>Traveaux</td>
											
										</tr>
										
									</tbody>
								</table>
                                            </td>
										
											<td className="table-action">
												<a href="#"><i className="align-middle" data-toggle="modal" data-target="#ModalMod" data-feather="edit-2"></i></a>
												<a href="#"><i className="align-middle" data-feather="trash"></i></a>
											</td>
										</tr>
										
									</tbody>
								</table>
                <div className="modal fade" id="defaultModalPrimary" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <div className="col-12 col-xl-12">
                                
							         <div className="card">
                                         
									 <div className="modal-header">
													<h5 className="modal-title">Ajouter role</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <GroupForm />
								</div>
							</div>
                           
						</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

				<div className="modal fade" id="ModalMod" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <div className="col-12 col-xl-12">
                                
							         <div className="card">
                                         
									 <div className="modal-header">
													<h5 className="modal-title">Modifier role</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <GroupForm />
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
