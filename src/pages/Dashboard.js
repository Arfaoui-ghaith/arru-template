import React from 'react';
import '../css_folder/style.css';
import Form from '../components/Form'

export default function Dashboard() {
	
    return (
        <main class="content">
        <div class="container-fluid p-0">

            <div class="row mb-2 mb-xl-3">
                <div class="col-auto d-none d-sm-block">
                    <h3><strong>Gestion des utilisateurs </strong></h3>
                </div>

            </div>
            <div class="row">
						<div class="col-12 col-xl-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Liste des utilisateurs</h5>
								</div>
								<table class="table">
									<thead>
										<tr>
											<th style={{"width":"30%"}}>Nom</th>
											<th style={{"width":"30%"}}>Adresse</th>
											<th class="d-none d-md-table-cell" style={{"width":"30%"}}>Role</th>
											<th style={{"width":"10%"}}><a href="#"><i class="align-middle" data-feather="user-plus"data-toggle="modal" data-target="#defaultModalPrimary"></i></a></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Vanessa Tucker</td>
											<td>vanessa@gmail.com</td>
											<td class="d-none d-md-table-cell">chef projet</td>
											<td class="table-action">
												<a href="#"><i class="align-middle" data-feather="edit-2"></i></a>
												<a href="#"><i class="align-middle" data-feather="trash"></i></a>
											</td>
										</tr>
										<tr>
											<td>William Harris</td>
											<td>william@gmail.com</td>
											<td class="d-none d-md-table-cell">admin</td>
											<td class="table-action">
												<a href="#"><i class="align-middle" data-feather="edit-2"></i></a>
												<a href="#"><i class="align-middle" data-feather="trash"></i></a>
											</td>
										</tr>
										
									</tbody>
								</table>
                <div class="modal fade" id="defaultModalPrimary" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        
                        <div class="modal-content">
                            <div class="modal-header">
                                
                                <div class="col-12 col-xl-12">
                                
							         <div class="card">
                                         
									 <div class="modal-header">
													<h5 class="modal-title">Ajouter utilisateur</h5>
													<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div class="card-body">
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
