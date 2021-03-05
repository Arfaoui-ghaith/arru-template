import React from 'react'
import '../css_folder/style.css'
import GroupForm from '../components/GroupForm'

export default function Group() {
    return (
        <main class="content">
        <div class="container-fluid p-0">

            <div class="row mb-2 mb-xl-3">
                <div class="col-auto d-none d-sm-block">
                    <h3><strong>Gestion des groupes </strong></h3>
                </div>

            </div>
            <div class="row">
						<div class="col-12 col-xl-12">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Liste des groupes</h5>
								</div>
								<table class="table">
									<thead>
										<tr>
											<th style={{"width":"30%"}}>titre</th>
											<th style={{"width":"60%"}}>specifications</th>
											
											<th style={{"width":"10%"}}><a href="#"><i class="align-middle" data-feather="folder-plus"data-toggle="modal" data-target="#defaultModalPrimary"></i></a></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>chef projet</td>
											<td>
                                            <table class="table">
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
								
											<td class="table-action">
												<a href="#"><i class="align-middle" data-toggle="modal" data-target="#ModalMod" data-feather="edit-2"></i></a>
												<a href="#"><i class="align-middle" data-feather="trash"></i></a>
											</td>
										</tr>
                                        <tr>
											<td>directeur</td>
											<td>
                                            <table class="table">
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
										
											<td class="table-action">
												<a href="#"><i class="align-middle" data-toggle="modal" data-target="#ModalMod" data-feather="edit-2"></i></a>
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
													<h5 class="modal-title">Ajouter role</h5>
													<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div class="card-body">
									        <GroupForm />
								</div>
							</div>
                           
						</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

				<div class="modal fade" id="ModalMod" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        
                        <div class="modal-content">
                            <div class="modal-header">
                                
                                <div class="col-12 col-xl-12">
                                
							         <div class="card">
                                         
									 <div class="modal-header">
													<h5 class="modal-title">Modifier role</h5>
													<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div class="card-body">
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
