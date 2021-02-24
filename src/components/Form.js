import React from 'react'
import ReactDOM from 'react-dom'
import Div from '../components/Div'
export default function Form() {
    
    function handleChange(e) {
        
        if(e.target.checked){
        const element= <Div />;
        ReactDOM.render(element, document.getElementById('box'));}
        else{  const element= <div> </div>;
            ReactDOM.render(element, document.getElementById('box'));}
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
                                            <label class="col-form-label col-sm-2 text-sm-right">groupe</label>
											<div class="col-sm-10">
												<div class="boxes" >
													<input type="checkbox" id="box-1" value="chef projet" onChange={(e)=> handleChange(e)}/>
													<label for="box-1">chef projet</label>

													<input type="checkbox" id="box-2" value="admin" onChange={handleChange}/>
													<label for="box-2">admin </label>

													<input type="checkbox" id="box-3" value="directeur" onChange={handleChange}/>
													<label for="box-3">directeur</label>

													<input type="checkbox" id="box-4" value="g1" onChange={handleChange}/>
													<label for="box-4">groupe 1</label>

													<input type="checkbox" id="box-5" value="g2" onChange={handleChange}/>
													<label for="box-5">groupe 2</label>
													
												</div>
											</div>
										</div>

										<div class="mb-3 row">
                                            <label class="col-form-label col-sm-2 text-sm-right">role</label>
											<div class="col-sm-10">
												<div class="boxes" id="box" >
													
													
												</div>
											</div>
										</div>
										
										<div class="mb-3 row">
											<div class="col-sm-10 ml-sm-auto">
												<button type="submit" class="btn btn-primary">Submit</button>
											</div>
										</div>
									</form>
    )
}
