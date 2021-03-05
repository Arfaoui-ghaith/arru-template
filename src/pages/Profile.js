import React from 'react'

export default function Profile() {
    return (
        <main class="content">
        <div class="container-fluid p-0">

            <h1 class="h3 mb-3">Profile</h1>

            <div class="row">
                <div class="col-md-4 col-xl-3">
                    <div class="card mb-3">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Mon Profile </h5>
                        </div>
                        <div class="card-body text-center">
                            <img src="img/photos/user-01.png" alt="photo de profile" class="img-fluid rounded-circle mb-2" width="128" height="128" />
                            <h5 class="card-title mb-0">Aladin Labidi</h5>
                            <div class="text-muted mb-2">ala@gmail.com </div>

                            <div>
                                <a class="btn btn-primary btn-sm" href="/settings">Modifier mon profile</a>
                                </div>
                        </div>
                        <hr class="my-0" />
                        <div class="card-body">
                            <h5 class="h6 card-title">Mes roles </h5>
                            <a href="#" data-toggle="modal" data-target="#ModalMod" class="badge btn-primary mr-1 my-1">Administrateur</a>
                            <a href="#" data-toggle="modal" data-target="#ModalMod" class="badge btn-primary mr-1 my-1">Informaticien</a>
                        </div>
                        <hr class="my-0" />
                        <div class="card-body">
                            <h5 class="h6 card-title">plus d'iformations</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-1"><span data-feather="home" class="feather-sm mr-1"></span> CIN <span style={{color :"#3B7DDD"}}>12345678</span> </li>

                                <li class="mb-1"><span data-feather="briefcase" class="feather-sm mr-1"></span> telephone <span style={{color :"#3B7DDD"}}>22898972</span> </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div class="col-md-8 col-xl-9">
                    <div class="card">
                        <div class="card-header">

                            <h5 class="card-title mb-0">Activities</h5>
                        </div>
                        <div class="card-body h-100">

                            <div class="d-flex align-items-start">
                                <img src="img/photos/user-01.png" width="36" height="36" class="rounded-circle mr-2" alt="Vanessa Tucker" />
                                <div class="flex-grow-1">
                                    <small class="float-right text-navy">5m ago</small>
                                    <strong>Sarra gb</strong> started following <strong>Ghaith</strong><br />
                                    <small class="text-muted">Today 7:51 pm</small><br />

                                </div>
                            </div>


                            <hr />
                            <a href="#" class="btn btn-primary btn-block">Load more</a>
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
													<h5 class="modal-title">liste des fonctionalités </h5>
													<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div class="card-body">
                                        <table class="table">
									

									<tbody>
										<tr>
											<td>Gestion des projets</td>
											
								
                                        </tr>
                                        <tr>
											<td>Gestion des quartiers</td>
											
								
                                        </tr>
											
											
									</tbody>
                                  
                            </table>
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
