import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

const animatedComponents = makeAnimated();
export default function Form({ user }) {
const [selectedLabels,setSelectedLabels]=React.useState([]);
const [roles, setRoles] = React.useState([]);
const [roles_specifications, setRoles_specifications] = React.useState([]);
const [relations, setRelations] = React.useState([]);
const [utilisateur, setUtilisateur] = React.useState({});

	const fetchRoles = async () => {
		try {
			const url ='http://localhost:4000/api/v1/roles/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'get',
			  	url,
			});
	
			setRoles_specifications(res.data.roles);

			if (res.status === 200) {
				
				let roles_options = [];
				for(const role of res.data.roles){
					let obj = { value: role.id, label: role.titre }
					roles_options.push(obj);
				}
				setRoles(roles_options);
				
			}

			console.log('roles_specifications',roles_specifications);
			} catch (err) {
				console.log(err);
			}
	}

	React.useEffect(() => {
		fetchRoles()
	},[]);

  	const handleChange = (e) => {
		setRelations(Array.isArray(e) ? e.map(x => { return {role_id: x.value, specification_id: null}}) : []);
		setSelectedLabels(Array.isArray(e) ? e.map(x => { return {label: x.label, value: x.value}}) : []);
  	}

	const handleRelations = (e,index) => {
		console.log(e.target.value);
		relations[index].specification_id = e.target.value;
	}

	const addUser = async() => {
		console.log({utilisateur, relations});
		try{
			const url ='http://localhost:4000/api/v1/utilisateurs/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'post',
			  	url,
				data: {utilisateur, relations}
			});

			console.log(res);
			window.location.replace('/Utilisateurs');

		}catch(err){
			console.log(err.response.data.message);
		}
	}

    return (
        <div>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">CIN</label>
                <div className="col-sm-10">
					<input type="number" className="form-control" onChange={(e) => setUtilisateur({ ...utilisateur, cin: e.target.value })} placeholder={user ? user.cin : "CIN"}/>
				</div>
			</div>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">Nom</label>
                <div className="col-sm-10">
					<input type="text" className="form-control" onChange={(e) => setUtilisateur({ ...utilisateur, nom: e.target.value })} placeholder={user ? user.nom : "Nom"}/>
				</div>
			</div>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">Prénom</label>
                <div className="col-sm-10">
					<input type="text" className="form-control" onChange={(e) => setUtilisateur({ ...utilisateur, prenom: e.target.value })} placeholder={user ? user.prenom : "Prénom"}/>
				</div>
			</div>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">Email</label>
                <div className="col-sm-10">
					<input type="email" className="form-control" onChange={(e) => setUtilisateur({ ...utilisateur, email: e.target.value })} placeholder={user ? user.email : "Email"}/>
				</div>
			</div>
            <div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => setUtilisateur({ ...utilisateur, password: e.target.value })}/>
                </div>
			</div>
			
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">telephone</label>
                <div className="col-sm-10">
                    <input type="tel" className="form-control" onChange={(e) => setUtilisateur({ ...utilisateur, telephone: e.target.value })} placeholder={user ? user.telephone : "telephone"}/>
                </div>
			</div>

			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">roles</label>
				<div className="col-sm-10">
					<div className="boxes" >
						<Select
							closeMenuOnSelect={false}
							components={animatedComponents}
							isMulti
							options={roles}
							onChange={handleChange}
						/>							
					</div>
				</div>
			</div>

			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Specifications :</label>
				<div className="col-sm-10">
					<div className="boxes" id="box" >
						{selectedLabels && <div style={{ marginTop: 20, lineHeight: '25px' }}>
							<div>{
									selectedLabels.map((role,index) =>( 
										<div className="mb-3 row">
											{ `${role.label} :` }
											<div className="row">
											{
												roles_specifications.filter((el) => {
													return el.titre === role.label
												})[0].specification.map((sp) => (
													<span><input className="col" type="radio" onClick={(e) => handleRelations(e,index)} name={role.label} value={sp.id} /> { sp.titre}</span>
												))
											}
											</div>
										</div>
									))
							}</div>
						</div>}								
					</div>
				</div>
			</div>
				
			<div className="mb-3 row">
				<div className="col-sm-10 ml-sm-auto">
					<span onClick={addUser} className="btn btn-primary">Submit</span>
				</div>
			</div>

		</div>
    );
}
