import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated();

export default function GroupForm() {
    const optionsSpec = [
		{ value: 'Mahdia', label: 'Mahdia' },
		{ value: 'Tunis', label: 'Tunis' },
		{ value: 'Ariana', label: 'Ariana' }
	  ]
	  const optionsRole = [
		{ value: 'Chef projet', label: 'Chef projet' },
		{ value: 'directeur', label: 'directeur' },
		{ value: 'admin', label: 'admin' }
	  ]
	
    return (
        <form>

								
												<div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">titre</label>
                                                    <div class="col-sm-10">
													<Select
													components={animatedComponents}
													options={optionsRole}
												/>
											        </div>
										        </div>
												

										<div class="mb-3 row">
                                            <label class="col-form-label col-sm-2 text-sm-right">specifications</label>
											<div class="col-sm-10">
												<div class="boxes" >
											    <Select
													closeMenuOnSelect={false}
													components={animatedComponents}
													isMulti
													options={optionsSpec}
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