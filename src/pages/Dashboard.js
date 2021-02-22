import React from 'react'

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
                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
							         <div class="card">
                                         
								        <div class="card-header">
                                            <h5 class="card-title">Horizontal form</h5>
                                            <h6 class="card-subtitle text-muted">Horizontal Bootstrap layout.</h6>
								        </div>
								        <div class="card-body">
									        <form>
										        <div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">Email</label>
                                                    <div class="col-sm-10">
												        <input type="email" class="form-control" placeholder="Email"/>
											        </div>
										        </div>
                                                <div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">Password</label>
                                                    <div class="col-sm-10">
                                                    <input type="password" class="form-control" placeholder="Password"/>
                                                </div>
										</div>
										<div class="mb-3 row">
											<label class="col-form-label col-sm-2 text-sm-right">Textarea</label>
											<div class="col-sm-10">
												<textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
											</div>
										</div>
										<fieldset class="mb-3">
											<div class="row">
												<label class="col-form-label col-sm-2 text-sm-right pt-sm-0">Radios</label>
												<div class="col-sm-10">
													<label class="form-check">
                  <input name="radio-3" type="radio" class="form-check-input" checked />
                  <span class="form-check-label">Default radio</span>
                </label>
													<label class="form-check">
                  <input name="radio-3" type="radio" class="form-check-input"/>
                  <span class="form-check-label">Second default radio</span>
                </label>
													<label class="form-check">
                  <input name="radio-3" type="radio" class="form-check-input" disabled />
                  <span class="form-check-label">Disabled radio</span>
                </label>
												</div>
											</div>
										</fieldset>
										<div class="mb-3 row">
											<label class="col-form-label col-sm-2 text-sm-right pt-sm-0">Checkbox</label>
											<div class="col-sm-10">
												<label class="form-check m-0">
                <input type="checkbox" class="form-check-input" />
                <span class="form-check-label">Check me out</span>
              </label>
											</div>
										</div>
										<div class="mb-3 row">
											<div class="col-sm-10 ml-sm-auto">
												<button type="submit" class="btn btn-primary">Submit</button>
											</div>
										</div>
									</form>
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
