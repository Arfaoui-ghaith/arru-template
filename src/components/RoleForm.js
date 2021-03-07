import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated();
export default function RoleForm() {
    const options = [
		{ value: 'ajouter', label: 'ajouter' },
		{ value: 'modifier', label: 'modifier' },
		{ value: 'supprimer', label: 'supprimer' }
	  ]
	
    return (
        <form>
			
			<div className="mb-3 row">
                 <label className="col-form-label col-sm-2 text-sm-right">titre</label>
                <div className="col-sm-10">
					<input type="text" className="form-control" placeholder="titre du role"/>
				</div>
			</div>
												
			<div className="mb-3 row">
                <label className="col-form-label col-sm-2 text-sm-right">interfaces</label>
					<div className="col-sm-10">
						<div className="boxes" >
							<Select closeMenuOnSelect={false} components={animatedComponents} isMulti options={options}
									onChange={(e) => console.log(e.selectedOptions)} />				
						</div>
					</div>
			</div>
						
			<div className="mb-3 row">
				<div className="col-sm-10 ml-sm-auto">
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</div>
		</form>
    );
}