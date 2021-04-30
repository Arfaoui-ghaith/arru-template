import React from 'react'
import Carte from '../components/Carte'
import Critere from '../components/Critere'
export default function Criteres() {
    return (
        <main className="content">
			<div className="container-fluid p-0">

					<div className="mb-3">
						<h1 className="h3 d-inline align-middle">Critéres d'éligibilité</h1>
                       
					</div>
                <div className="row">

                    <div className="col-3">
                        <Carte />
                    </div>

                    <div className="col-9">
                        <div className="row">
                       <Critere title="Nombre de quartiers" nbr="3"/>
                       <Critere title="Nombre de logements" nbr="206"/>
                       <Critere title="Nombre d'habitant" nbr="1400"/>
                       <Critere title="Surface du quartier (hectares)" nbr="780"/>
                       <Critere title="Surface urbanisée (hectares)" nbr="600"/>
					</div>
				</div>
            </div>  </div>
		</main>
    )
}
