import React from 'react'
import { MDBDataTableV5 } from 'mdbreact'
import 'mdbreact/dist/css/mdb.css'
import '@fortawesome/fontawesome-free/css/all.css'
import FeatherIcon from 'feather-icons-react';

    


class TableZone extends React.Component {
  state = {
    datatable:{
      columns: [
        {
          label: 'Gouvernorat',
          field: 'gouvernorat',
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'gouvernorat',
          },
        },
        {
          label: 'Commune',
          field: 'commune',
        },
        {
          label: 'Quartier',
          field: 'quartier',
        },
        {
          label: 'Nombre de quartier',
          field: 'Nombre',
        },
        {
          label: 'Surface Totale (Hectar)',
          field: 'Surfaces',
        },
        {
          label: 'Surface Urbanisée (Hectar)',
          field: 'Surface',
        },
        {
          label: 'Nombre de logements',
          field: 'logement',
        },
        {
          label: 'Nombre des habitants',
          field: 'habitant',
        },
        {
          label: 'Modifier',
          field: 'modifier',
          sort : 'disabled',
          width: 50,
        },
        {
          label: 'Supprimer',
          field: 'supprimer',
          sort : 'disabled',
          width: 50,
        },
      ],
      rows: [
        {
          gouvernorat: 'Tunis',
          commune: 'Tunis',
          quartier: <ul className="ml-n5" style={{"list-style-type":"none"}}>
            <li>quartier 1</li>
            <hr/>
            <li>quartier 2</li>
          </ul>,
          Nombre: '61',
          Surfaces: '580',
          Surface: '400',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2" /></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Beja',
          commune: 'Beja',
          quartier: 'Omran',
          Nombre: '63',
          Surfaces: '320',
          Surface: '170',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Sfax',
          commune: 'Sfax',
          quartier: 'mdina',
          Nombre: '366',
          Surfaces: '410',
          Surface: '86',

logement: '100',
habitant : '3000',

modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,
},
        {
          gouvernorat: 'Tunis',
          commune: 'Tunis',
          quartier: 'Hay el khadhra',
          Nombre: '61',
          Surfaces: '580',
          Surface: '400',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Beja',
          commune: 'Beja',
          quartier: 'Omran',
          Nombre: '63',
          Surfaces: '320',
          Surface: '170',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Sfax',
          commune: 'Sfax',
          quartier: 'mdina',
          Nombre: '366',
          Surfaces: '410',
          Surface: '86',

logement: '100',
habitant : '3000',

modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,           },
        {
          gouvernorat: 'Tunis',
          commune: 'Tunis',
          quartier: 'Hay el khadhra',
          Nombre: '61',
          Surfaces: '580',
          Surface: '400',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Beja',
          commune: 'Beja',
          quartier: 'Omran',
          Nombre: '63',
          Surfaces: '320',
          Surface: '170',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Sfax',
          commune: 'Sfax',
          quartier: 'mdina',
          Nombre: '366',
          Surfaces: '410',
          Surface: '86',

logement: '100',
habitant : '3000',

modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,           },
        {
          gouvernorat: 'Tunis',
          commune: 'Tunis',
          quartier: 'Hay el khadhra',
          Nombre: '61',
          Surfaces: '580',
          Surface: '400',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Beja',
          commune: 'Beja',
          quartier: 'Omran',
          Nombre: '63',
          Surfaces: '320',
          Surface: '170',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Sfax',
          commune: 'Sfax',
          quartier: 'mdina',
          Nombre: '366',
          Surfaces: '410',
          Surface: '86',

logement: '100',
habitant : '3000',

modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,           },
        {
          gouvernorat: 'Tunis',
          commune: 'Tunis',
          quartier: 'Hay el khadhra',
          Nombre: '61',
          Surfaces: '580',
          Surface: '400',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Beja',
          commune: 'Beja',
          quartier: 'Omran',
          Nombre: '63',
          Surfaces: '320',
          Surface: '170',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Sfax',
          commune: 'Sfax',
          quartier: 'mdina',
          Nombre: '366',
          Surfaces: '410',
          Surface: '86',

logement: '100',
habitant : '3000',

modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,           },
        {
          gouvernorat: 'Tunis',
          commune: 'Tunis',
          quartier: 'Hay el khadhra',
          Nombre: '61',
          Surfaces: '580',
          Surface: '400',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Beja',
          commune: 'Beja',
          quartier: 'Omran',
          Nombre: '63',
          Surfaces: '320',
          Surface: '170',
          logement: '100',
          habitant : '3000',
          
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,   
        },
        {
          gouvernorat: 'Sfax',
          commune: 'Sfax',
          quartier: 'mdina',
          Nombre: '366',
          Surfaces: '410',
          Surface: '86',

logement: '100',
habitant : '3000',
modifier :<a data-toggle="modal" data-target="#modif"><FeatherIcon icon="edit-2"/></a>,
supprimer : <FeatherIcon icon="trash-2" />,        },
        
      ],
    }
    
  }
  render() {
    return (
        <div className="p-3">
            
									<MDBDataTableV5 
                  style={{"marginLeft":"1%"}}
                  responsive
                  hover
                  entriesOptions={[5, 20, 25]}
                  striped
                  pagesAmount={5}
                  data={this.state.datatable}
                  paging
                  searchTop
                  searchBottom={false}
                  barReverse />
        </div>
    )
}}

export default TableZone;