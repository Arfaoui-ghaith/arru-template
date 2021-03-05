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

								
												<div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">titre</label>
                                                    <div class="col-sm-10">
													<input type="text" class="form-control" placeholder="titre du role"/>
											        </div>
										        </div>
												

										<div class="mb-3 row">
                                            <label class="col-form-label col-sm-2 text-sm-right">interfaces</label>
											<div class="col-sm-10">
												<div class="boxes" >
											    <Select
													closeMenuOnSelect={false}
													components={animatedComponents}
													isMulti
													options={options}
													onChange={(e) => console.log(e.selectedOptions)}
												/>
														
												</div>
											</div>
										</div>

									
										
										<div class="mb-3 row">
											<div class="col-sm-10 ml-sm-auto">
												<button type="submit" class="btn btn-primary">Submit</button>
											</div>
										</div>
									</form>
    );
}