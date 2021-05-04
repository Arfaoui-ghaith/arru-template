import React from 'react'
import FeatherIcon from 'feather-icons-react'
import Form from '../components/FormProjet'
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
															<a className="avatar-title" data-toggle="modal" data-target="#modif">
															<div className="avatar-title rounded-circle bg-primary-light">
																<FeatherIcon icon="edit" />
																</div>
															</a>
                                                            
														</div>
													</div>
												</div>
												<h1 className="mt-1 mb-3">{nbr}</h1>
												<div className="mb-0">
													<span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 105 </span>
													<span className="text-muted">projet trouvé</span>
												</div>
											</div>
											<div className="modal fade" id="modif" tabIndex="-1" role="dialog" aria-hidden="true">
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<div className="col-12 col-xl-12">
														<div className="card">
															<div className="modal-header">
																<h5 className="modal-title">Modifier le critére</h5>
																<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
															</div>
															<div className="card-body">
															<div className="row">
                <label className="col-form-label col-sm-3 text-sm-left">le minimum</label>
                <div className="col-sm-9">
					<input type="number" className="form-control" placeholder="..."/>
				</div>
			</div>
			<div className="mb-3 row mt-3">
				<div className="col-2">
					<span  className="btn btn-primary" >Submit</span>
				</div>
				<div className="col-3">
					<span  className="btn btn-danger" >desactiver</span>
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
    )
}
