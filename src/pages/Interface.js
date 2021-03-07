import React from 'react'

import '../css_folder/style.css'

export default function Interface() {
    return (
        <main className="content">
        <div className="container-fluid p-0">

            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3><strong>Les Interfaces </strong></h3>
                </div>

            </div>
            <div className="row">
					<div className="col-12 col-xl-12">
						<div className="card">
								<div className="card-header">
									<h5 className="card-title">Liste des Interfaces</h5>
								</div>
                            <table className="table">
									<thead>
										<tr>
											<th style={{"width":"100%"}}>titre</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>Gestion des projets</td>
											
								
                                        </tr>
                                        <tr>
											<td>Gestion des quartiers</td>
											
								
                                        </tr>
											
											
									</tbody>
                                  
                            </table>
										
										
					    </div>
                    </div>
                </div>
                </div>
                    </main>
    )
}

