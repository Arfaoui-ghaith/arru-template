import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
export default function Critere({title,nbr}){
    return (
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card-body">
												<div class="row">
													<div class="col mt-0">
														<h5 class="card-title">{title}</h5>
													</div>

													<div class="col-auto">
														<div class="avatar">
															<div class="avatar-title">
															<Dropdown>
                                                                <Dropdown.Toggle  id="dropdown-basic">
																
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Modifier</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Supprimer</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            </div>
														</div>
													</div>
												</div>
												<h1 class="mt-1 mb-3">{nbr}</h1>
												<div class="mb-0">
													<span class="text-success"> <i class="mdi mdi-arrow-bottom-right"></i> 105 </span>
													<span class="text-muted">projet trouvé</span>
												</div>
											</div>
                                            
						</div>
    )
}
