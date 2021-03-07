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

								
												<div className="mb-3 row">
                                                    <label className="col-form-label col-sm-2 text-sm-right">CIN</label>
                                                    <div className="col-sm-10">
													<input type="number" className="form-control" placeholder="CIN"/>
											        </div>
										        </div>
												<div className="mb-3 row">
                                                    <label className="col-form-label col-sm-2 text-sm-right">Nom</label>
                                                    <div className="col-sm-10">
													<input type="text" className="form-control" placeholder="Nom"/>
											        </div>
										        </div>
												<div className="mb-3 row">
                                                    <label className="col-form-label col-sm-2 text-sm-right">Prénom</label>
                                                    <div className="col-sm-10">
													<input type="text" className="form-control" placeholder="Prénom"/>
											        </div>
										        </div>
										        <div className="mb-3 row">
                                                    <label className="col-form-label col-sm-2 text-sm-right">Email</label>
                                                    <div className="col-sm-10">
												        <input type="email" className="form-control" placeholder="Email"/>
											        </div>
										        </div>
                                                <div className="mb-3 row">
                                                    <label className="col-form-label col-sm-2 text-sm-right">Password</label>
                                                    <div className="col-sm-10">
                                                    <input type="password" className="form-control" placeholder="Password"/>
                                                </div>
										</div>
										<div className="mb-3 row">
                                                    <label className="col-form-label col-sm-2 text-sm-right">image</label>
                                                    <div className="col-sm-10">
                                                    <input type="file" className="form-control" placeholder="image"/>
                                                </div>
										</div>
										<div className="mb-3 row">
                                                <label className="col-form-label col-sm-2 text-sm-right">telephone</label>
                                                <div className="col-sm-10">
                                                    <input type="tel" className="form-control" placeholder="telephone"/>
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
													options={options}
													onChange={handleChange}
												/>
														
												</div>
											</div>
										</div>

										<div className="mb-3 row">
                                            <label className="col-form-label col-sm-2 text-sm-right">specifications</label>
											<div className="col-sm-10">
												<div className="boxes" id="box" >
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
										
										<div className="mb-3 row">
											<div className="col-sm-10 ml-sm-auto">
												<button type="submit" className="btn btn-primary">Submit</button>
											</div>
										</div>
									</form>
    );
}
