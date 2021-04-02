import React from 'react'
import Map from '../componet/Map'

export default function Quartiers() {
    return (
        <main class="content">
        <div class="container-fluid p-0">

            <h1 class="h3 mb-3">Gestion des quartiers</h1>

            <div class="row">
                <div class="col-12 col-lg-12" >
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">Default Map</h5>
                            <h6 class="card-subtitle text-muted">Displays the default road map view.</h6>
                        </div>
                    </div>
                    <div class="content" id="default_map" style={{"height": "300px", "position": "relative", "overflow": "hidden", "margin":"0px"}}>
                            <div style={{"height": "100%", "width": "100%", "position": "absolute", "top": "0px", "left": "0px", "background-color": "rgb(229, 227, 223)"}}>
                                <div class="gm-err-container">
                                    <div class="gm-err-content">
                                        <div class="gm-err-icon">
                                        <Map class="px-3 card-body" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                </div>
                
            </div>

            <div className="modal fade" id="ModalMod" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                        
                    <div className="modal-content">
                        <div className="modal-header">
                                
                            <div className="col-12 col-xl-12">
                                
							    <div className="card">
                                         
									<div className="modal-header">
													<h5 className="modal-title">Ajouter Quartier</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
									</div>
								    <div className="card-body">
									        
								    </div>
							    </div>
                           
						    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
