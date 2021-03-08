import React from 'react'
import '../css_folder/style.css'
import GroupForm from '../components/GroupForm'
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';

export default function Group() {

	const [roles, setRoles] = React.useState([]);

	React.useEffect(() => {
		fetchRoles();
	},[])

	  
	const fetchRoles = async (e) => {
		try {
			const url ='http://localhost:4000/api/v1/roles/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'get',
			  	url,
			});
	
		
			if (res.status === 200) {
			  
				setRoles(res.data.roles);
			  	console.log(res);

			}
			} catch (err) {
				console.log(err);
				console.log("Alert");
			}
	}

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
									{roles.map((role,index) => (
										<tr>
											<td>{role.titre}</td>
											<td>
                                            	<table className="table">
													<tbody>
														{role.specification.map((specification,index) => (
														<tr>
															<td>{specification.titre}</td>
														</tr>
														))}
													</tbody>
												</table>
                                            </td>
								
											<td className="table-action">
												<span style={{ "cursor": "pointer" }} data-toggle="modal" data-target="#ModalMod"><FeatherIcon icon="edit-2" /></span>
												<span style={{ "cursor": "pointer" }} ><FeatherIcon icon="trash" /></span>
											</td>
										</tr>
										))}
										
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
