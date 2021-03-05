import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
export default function Form() {
const [selected,setSelected]=React.useState([]);
	const options = [
		{ value: 'chef de projet', label: 'chef de projet' },
		{ value: 'directeur', label: 'directeur' },
		{ value: 'admin', label: 'admin' }
	  ]
	  const optionsSpec = [
		{ value: 'Mahdia', label: 'Mahdia' },
		{ value: 'Ariana', label: 'Ariana' },
		{ value: 'Tunis', label: 'Tunis' }
	  ]
	 
  const handleChange = (e) => {
    setSelected(Array.isArray(e) ? e.map(x => x.value) : []);
  }

    return (
        <form>

								
												<div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">CIN</label>
                                                    <div class="col-sm-10">
													<input type="number" class="form-control" placeholder="CIN"/>
											        </div>
										        </div>
												<div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">Nom</label>
                                                    <div class="col-sm-10">
													<input type="text" class="form-control" placeholder="Nom"/>
											        </div>
										        </div>
												<div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">Prénom</label>
                                                    <div class="col-sm-10">
													<input type="text" class="form-control" placeholder="Prénom"/>
											        </div>
										        </div>
										        <div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">Email</label>
                                                    <div class="col-sm-10">
												        <input type="email" class="form-control" placeholder="Email"/>
											        </div>
										        </div>
                                                <div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">Password</label>
                                                    <div class="col-sm-10">
                                                    <input type="password" class="form-control" placeholder="Password"/>
                                                </div>
										</div>
										<div class="mb-3 row">
                                                    <label class="col-form-label col-sm-2 text-sm-right">image</label>
                                                    <div class="col-sm-10">
                                                    <input type="file" class="form-control" placeholder="image"/>
                                                </div>
										</div>
										<div class="mb-3 row">
                                                <label class="col-form-label col-sm-2 text-sm-right">telephone</label>
                                                <div class="col-sm-10">
                                                    <input type="tel" class="form-control" placeholder="telephone"/>
                                                </div>
										</div>

										<div class="mb-3 row">
                                            <label class="col-form-label col-sm-2 text-sm-right">roles</label>
											<div class="col-sm-10">
												<div class="boxes" >
											    <Select
													closeMenuOnSelect={false}
													components={animatedComponents}
													isMulti
													options={options}
													onChange={handleChange}
												/>
														
												</div>
											</div>
										</div>

										<div class="mb-3 row">
                                            <label class="col-form-label col-sm-2 text-sm-right">specifications</label>
											<div class="col-sm-10">
												<div class="boxes" id="box" >
												{selected && <div style={{ marginTop: 20, lineHeight: '25px' }}>
													<div>{
														selected.map((role) =>( 
														<li> {role}  <Select
														closeMenuOnSelect={false}
														components={animatedComponents}
														options={optionsSpec}
													/></li> 
														
														))
														}</div>
												</div>}
													
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
