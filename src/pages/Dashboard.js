import React from 'react';
import '../css_folder/style.css';
import Form from '../components/Form'
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import { gql, useSubscription } from '@apollo/client'


const UTILISATEURS = gql`
subscription utilisateurs {
	utilisateurs{
    	nom, prenom, email, roles{titre}
  	}
}`

export default function Dashboard() {
	const [users,setUsers]= React.useState([]);

	const [userEdit, setUserEdit] = React.useState({});
	/*const { data: utilisateurs, error: messageError } = useSubscription(
		UTILISATEURS
	  )*/
	

	  //console.log('messageError', typeof(utilisateurs['utilisateurs']));
	  //console.log('messageError', messageError);

	
	React.useEffect(() => {
		fetchUsers();
	},[])

	  
	const fetchUsers = async (e) => {
		try {
			const url ='http://localhost:4000/api/v1/utilisateurs/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'get',
			  	url,
			});
	
			if (res.status === 200) {
			  
				setUsers(res.data.utilisateurs);
			  	console.log(res);

			}

			} catch (err) {
				console.log(err);
				console.log("Alert");
			}
	}

	const updateUser = async (id) => {
		try {
			const url =`http://localhost:4000/api/v1/utilisateurs/${id}`;
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'put',
			  	url,
			});
	
			if (res.status === 200) {
			  
				setUsers(res.data.utilisateurs);
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
                    <h3><strong>Gestion des utilisateurs </strong></h3>
                </div>

            </div>
            <div className="row">
						<div className="col-12 col-xl-12">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Liste des utilisateurs</h5>
								</div>
								<table className="table">
									<thead>
										<tr>
											<th style={{"width":"13%"}}>Nom</th>
											<th style={{"width":"13%"}}>Adresse</th>
											<th style={{"width":"13%"}}>telephone</th>
											<th className="d-none d-md-table-cell" style={{"width":"13%"}}>Role</th>
											<th style={{"width":"10%"}}><a href="#"><i className="align-middle" data-feather="user-plus"data-toggle="modal" data-target="#defaultModalPrimary"></i></a></th>
										</tr>
									</thead>
									<tbody>
									{
											users.map((utilisateur, index) => (
												<tr key={index}>
													<td>{ utilisateur.nom+" "+utilisateur.prenom }</td>
													<td>{ utilisateur.email }</td>
													<td className="d-none d-md-table-cell">{utilisateur.telephone}</td>
													<td className="d-none d-md-table-cell"><ul>{utilisateur.roles.map((role, index) => (
														
															<li key={index}>{role.titre}</li>
													
													))}</ul> </td>
													<td className="table-action">
														<span style={{ "cursor": "pointer" }} data-toggle="modal" data-target="#ModalMod" onClick={(e) => setUserEdit(utilisateur)}><FeatherIcon icon="edit-2" /></span>
														<span style={{ "cursor": "pointer" }} ><FeatherIcon icon="trash" /></span>
													</td>
												</tr>
											))
									}
									</tbody>
								</table>

									<div className="modal fade" id="defaultModalPrimary" tabindex="-1" role="dialog" aria-hidden="true">
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<div className="col-12 col-xl-12">
														<div className="card">
															<div className="modal-header">
																<h5 className="modal-title">Ajouter utilisateur</h5>
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

				<div className="modal fade" id="ModalMod" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <div className="col-12 col-xl-12">
                                
							         <div className="card">
                                         
									 <div className="modal-header">
													<h5 className="modal-title">Modifier utilisateur</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <Form user={userEdit} />
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
