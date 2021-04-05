import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

const animatedComponents = makeAnimated();
export default function FormProjet() {
const [selectedLabels,setSelectedLabels]=React.useState([]);
const [roles, setRoles] = React.useState([]);
const [roles_specifications, setRoles_specifications] = React.useState([]);
const [relations, setRelations] = React.useState([]);
const [utilisateur, setUtilisateur] = React.useState({});
const [showDiv, setShowDiv]= React.useState(false);
const [rolesDefault, setRolesDefault] = React.useState([]);

	
  	const handleChange = (e) => {
		setRelations(Array.isArray(e) ? e.map(x => { return {role_id: x.value, specification_id: null}}) : []);
		setSelectedLabels(Array.isArray(e) ? e.map(x => { return {label: x.label, value: x.value}}) : []);
  	}

	const handleRolesDefault = (roles) => {
		setRelations(roles.map(x => { return {role_id: x.value, specification_id: null}}));
		setSelectedLabels(roles.map(x => { return {label: x.label, value: x.value}}));
  	}

	const handleRelations = (e,index) => {
		relations[index].specification_id = e.target.value;
	}




    return (
        <div>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Nom :</label>
                <div className="col-sm-9">
					<input type="text" className="form-control"
                      placeholder= "Nom"/>
				</div>
			</div>
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Gouvernorat</label>
				<div className="col-sm-9">
					<div className="boxes" >
						<Select
							defaultValue="options"
							components={animatedComponents}
							
						/>							
					</div>
				</div>
			</div>
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Municipalité</label>
				<div className="col-sm-9">
					<div className="boxes" >
						<Select
							defaultValue="options"
							components={animatedComponents}
							
						/>							
					</div>
				</div>
			</div>
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Commune</label>
				<div className="col-sm-9">
					<div className="boxes" >
						<Select
							defaultValue="options"
							components={animatedComponents}
							
						/>							
					</div>
				</div>
			</div>
			
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Nombre quartiers :</label>
                <div className="col-sm-9">
					<input type="number" className="form-control" placeholder="Nombre quartiers"/>
				</div>
			</div>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Nombre maisons :</label>
                <div className="col-sm-9">
					<input type="number" className="form-control" placeholder="Nombre maisons"/>
				</div>
			</div>
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Nombre habitants :</label>
                <div className="col-sm-9">
					<input type="number" className="form-control" placeholder="Nombre habitants"/>
				</div>
			</div>
			
			

			

			
			<div className="mb-3 row">
				<div className="col-sm-9">
					<span  className="btn btn-primary">Envoyer</span>
				</div>
			</div>

		</div>
    );
}
