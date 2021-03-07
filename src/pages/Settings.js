import React from 'react'

export default function Settings() {

	const [selectedImg, setSelectedImg]=React.useState("img/photos/user-01.png");
function handleChange(event) {
  setSelectedImg( URL.createObjectURL(event.target.files[0]));
}
    return (
        <main className="content">
        <div className="container-fluid p-0">

            <h1 className="h3 mb-3">Modifier profile</h1>

            <div className="row">
                <div className="col-md-3 col-xl-2">

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Profile </h5>
                        </div>

                        <div className="list-group list-group-flush" role="tablist">
                            <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account" role="tab">
                                S'identifier
                            </a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#info" role="tab">
                                Mes informations
                            </a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#password" role="tab">
                                Mot de passe 
                            </a> 
                        </div>
                    </div>
                </div>

                <div className="col-md-9 col-xl-10">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="account" role="tabpanel">

                            <div className="card">
                                <div className="card-header">

                                    <h5 className="card-title mb-0">S'identifier</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-8">
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label" for="inputFirstName">Nom</label>
                                                <input type="text" className="form-control" id="inputFirstName" placeholder="Nom" />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label" for="inputLastName">Prenom</label>
                                                <input type="text" className="form-control" id="inputLastName" placeholder="Prenom" />
                                            </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="text-center">
                                                    <img src={selectedImg} className="rounded-circle img-responsive mt-2" width="128" height="128" alt="image" />
                                                    <div className="mt-2">
                                                        <input type="file" onChange={handleChange}  />
                                                          
                                                    </div>
                                                    <small>Pour une meilleur resultat, utiliser une image d'au moins 128px  avec .jpg format</small>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Enregistrer</button>
                                    </form>

                                </div>
                           
                        </div>

                        </div>
                        <div className="tab-pane fade" id="info" role="tabpanel">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Mes informations</h5>
                    </div>
                <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label" for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="inputAddress2">CIN</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="CIN" />
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label className="form-label" for="inputCity">Telephone</label>
                            <input type="phone" className="form-control" id="inputCity" />
                        </div>
                        <div className="mb-3 col-md-4">
                            <label className="form-label" for="inputState">role</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                </form>

                </div>
            </div>
        </div>

                        <div className="tab-pane fade" id="password" role="tabpanel">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Mot de passe </h5>

                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label" for="inputPasswordCurrent">Mot de passe actuel</label>
                                            <input type="password" className="form-control" id="inputPasswordCurrent" />
                                            <small><a href="#">Oublier mot de passe?</a></small>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" for="inputPasswordNew">Nouveau mot de passe</label>
                                            <input type="password" className="form-control" id="inputPasswordNew" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" for="inputPasswordNew2">Comfirmer mot de passe</label>
                                            <input type="password" className="form-control" id="inputPasswordNew2" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Enregistrer</button>
                                    </form>

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
