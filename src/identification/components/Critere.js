import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
export default function Critere({title,nbr}){
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card-body">
												<div className="row">
													<div className="col mt-0">
														<h5 className="card-title">{title}</h5>
													</div>

													<div className="col-auto">
														<div className="avatar">
															<div className="avatar-title">
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
												<h1 className="mt-1 mb-3">{nbr}</h1>
												<div className="mb-0">
													<span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 105 </span>
													<span className="text-muted">projet trouvé</span>
												</div>
											</div>
                                            
						</div>
    )
}
