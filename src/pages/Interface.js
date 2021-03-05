import React from 'react'

import '../css_folder/style.css'

export default function Interface() {
    return (
        <main class="content">
        <div class="container-fluid p-0">

            <div class="row mb-2 mb-xl-3">
                <div class="col-auto d-none d-sm-block">
                    <h3><strong>Les Interfaces </strong></h3>
                </div>

            </div>
            <div class="row">
					<div class="col-12 col-xl-12">
						<div class="card">
								<div class="card-header">
									<h5 class="card-title">Liste des Interfaces</h5>
								</div>
                            <table class="table">
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

