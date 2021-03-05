import React from 'react'

export default function Settings() {

	const [selectedImg, setSelectedImg]=React.useState("img/photos/user-01.png");
function handleChange(event) {
  setSelectedImg( URL.createObjectURL(event.target.files[0]));
}
    return (
        <main class="content">
        <div class="container-fluid p-0">

            <h1 class="h3 mb-3">Modifier profile</h1>

            <div class="row">
                <div class="col-md-3 col-xl-2">

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Profile </h5>
                        </div>

                        <div class="list-group list-group-flush" role="tablist">
                            <a class="list-group-item list-group-item-action active" data-toggle="list" href="#account" role="tab">
  S'identifier
</a>
                            <a class="list-group-item list-group-item-action" data-toggle="list" href="#info" role="tab">
  Mes informations
</a>
                            <a class="list-group-item list-group-item-action" data-toggle="list" href="#password" role="tab">
  Mot de passe 
</a>
                           
                        </div>
                    </div>
                </div>

                <div class="col-md-9 col-xl-10">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="account" role="tabpanel">

                            <div class="card">
                                <div class="card-header">

                                    <h5 class="card-title mb-0">S'identifier</h5>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-8">
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label" for="inputFirstName">Nom</label>
                                                <input type="text" class="form-control" id="inputFirstName" placeholder="Nom" />
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="form-label" for="inputLastName">Prenom</label>
                                                <input type="text" class="form-control" id="inputLastName" placeholder="Prenom" />
                                            </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="text-center">
                                                    <img src={selectedImg} class="rounded-circle img-responsive mt-2" width="128" height="128" alt="image" />
                                                    <div class="mt-2">
                                                        <input type="file" onChange={handleChange}  />
                                                          
                                                    </div>
                                                    <small>Pour une meilleur resultat, utiliser une image d'au moins 128px  avec .jpg format</small>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary">Enregistrer</button>
                                    </form>

                                </div>
                           
                        </div>

                        </div>
                        <div class="tab-pane fade" id="info" role="tabpanel">
<div class="card">
    <div class="card-header">

        <h5 class="card-title mb-0">Mes informations</h5>
    </div>
    <div class="card-body">
        <form>
            <div class="mb-3">
                <label class="form-label" for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="inputAddress2">CIN</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="CIN" />
            </div>
            <div class="row">
                <div class="mb-3 col-md-6">
                    <label class="form-label" for="inputCity">Telephone</label>
                    <input type="phone" class="form-control" id="inputCity" />
                </div>
                <div class="mb-3 col-md-4">
                    <label class="form-label" for="inputState">role</label>
                    <select id="inputState" class="form-control">
<option selected>Choose...</option>
<option>...</option>
</select>
                </div>
                
            </div>
            <button type="submit" class="btn btn-primary">Enregistrer</button>
        </form>

    </div>
</div>
</div>

                        <div class="tab-pane fade" id="password" role="tabpanel">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Mot de passe </h5>

                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label" for="inputPasswordCurrent">Mot de passe actuel</label>
                                            <input type="password" class="form-control" id="inputPasswordCurrent" />
                                            <small><a href="#">Oublier mot de passe?</a></small>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="inputPasswordNew">Nouveau mot de passe</label>
                                            <input type="password" class="form-control" id="inputPasswordNew" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="inputPasswordNew2">Comfirmer mot de passe</label>
                                            <input type="password" class="form-control" id="inputPasswordNew2" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Enregistrer</button>
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
