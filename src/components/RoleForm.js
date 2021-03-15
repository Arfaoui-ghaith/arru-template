import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


export default function RoleForm({ role }) {

	const animatedComponents = makeAnimated();

	const [fonctionalites, setFonctionalites] = React.useState([]);
	const [titre, setTitre] = React.useState('');

	const addRole = async () => {
		
		if(titre === "") return console.log('titre obligatoire !!');
		if(selected.length === 0) return console.log('fonctionalite obligatoire !!');
		const data = { titre, fonctionalites: selected }
		try{
			const url ='http://localhost:4000/api/v1/roles/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'post',
			  	url,
				data
			});

			console.log(res);
			window.location.replace('/Roles');

		}catch(err){
			console.log(err);
		}
	}

	const updateRole = async () => {
		let relations = [];
		for(const fonctionalite_id of selected){
			let obj = { id: uuidv4(), role_id: role.id, fonctionalite_id }
			relations.push(obj);
		}
		console.log(titre, relations);
	}


	const fetchFonctionalites = async () => {
		try {
			const url ='http://localhost:4000/api/v1/fonctionalites/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('tokenARRU')}`},
			  	method: 'get',
			  	url,
			});
	
			//console.log(res.data.fonctionalites);

			if (res.status === 200) {
				let fonctionalites_options = [];
				for(const fonctionalite of res.data.fonctionalites){
					let obj = { value: fonctionalite.id, label: fonctionalite.titre }
					fonctionalites_options.push(obj);
				}
				setFonctionalites(fonctionalites_options);
			}

			} catch (err) {
				console.log(err);
			}
	}

	React.useEffect(() => (
		fetchFonctionalites()
	),[]);

	const [selected, setSelected] = React.useState([]);

	const handleChange = (e) => {
		setSelected(Array.isArray(e) ? e.map(x => x.value) : []);
	}
	
    return (
        <form>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">titre</label>
                <div className="col-sm-10">
					<input type="text" className="form-control" onChange={(e) => setTitre(e.target.value)} placeholder={ role ? role.titre : "Titre" }/>
				</div>
			</div>
												
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">fonctionalites</label>
				<div className="col-sm-10">
					<div className="boxes" >
						<Select
							closeMenuOnSelect={false}
							components={animatedComponents}
							isMulti
							options={fonctionalites}
							onChange={handleChange}
						/>				
					</div>
				</div>
			</div>
			{ role !== undefined && role !== null ? 
			
			<div className="mb-3 row">
				<div className="col-sm-10 ml-sm-auto">
					<span onClick={() => {updateRole()}} className="btn btn-primary">Submit</span>
				</div>
			</div>

			:
		
			<div className="mb-3 row">
				<div className="col-sm-10 ml-sm-auto">
					<span onClick={() => {addRole()}} className="btn btn-primary">Submit</span>
				</div>
			</div>

			}
		</form>
    );
}