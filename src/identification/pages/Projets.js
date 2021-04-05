import React from 'react';
import Carte from '../componet/Carte';
import Form from '../componet/FormProjet'
import FeatherIcon from 'feather-icons-react';

export default function Projets() {
    return (
        <main class="content">
				<div class="container-fluid p-0">

					<h1 class="h3 mb-3">Gestion des projets</h1>

					<div class="row">

						<div class="col-6">
							<Carte />
						</div>
					
						<div class="col-6">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title">Liste des projets</h5>
									</div>
								<div class="table-responsive">
									<table class="table mb-0">
										<thead>
											<tr>
												<th scope="col">ID</th>
												<th scope="col">Nom</th>
												<th scope="col">Gouvernorat</th>
												<th scope="col">Commune</th>
												<th scope="col">Municipalité</th>
												<th scope="col">Nombre de quartier</th>
												<th scope="col">Nombre de maison</th>
												<th scope="col">Nombre d'habitants</th>
												<th scope="col"><span data-toggle="modal" data-target="#defaultModalPrimary" style={{ "cursor": "pointer" }}><FeatherIcon icon="plus"/></span></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td><span style={{ "cursor": "pointer" }} data-toggle="modal" data-target="#ModalMod" ><FeatherIcon icon="edit-2" /></span>
														<span style={{ "cursor": "pointer" }} ><FeatherIcon icon="trash" /></span>
											</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td>Cell</td>
												<td><span style={{ "cursor": "pointer" }} data-toggle="modal" data-target="#ModalMod" ><FeatherIcon icon="edit-2" /></span>
														<span style={{ "cursor": "pointer" }} ><FeatherIcon icon="trash" /></span>
											</td>
											</tr>

											
										</tbody>
									</table>

								</div>
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
			</main>
    )
}
