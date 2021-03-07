import React from 'react'

export default function Login() {
    return (
        <main className="d-flex w-100">
		<div className="container d-flex flex-column">
			<div className="row vh-100">
				<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Bienvenue</h1>
							<p className="lead">
								connecter pour acceder à votre compte
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-4">
									<div className="text-center">
										<img src="img/photos/logo.png" alt="ARRU" className="img-fluid " width="132" height="132" />
									</div>
									<form>
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input className="form-control form-control-lg" type="email" name="email" placeholder="Entrer votre email" />
										</div>
										<div className="mb-3">
											<label className="form-label">Mot de passe </label>
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Entrer votre mot de passe" />
											<small>
            <a href="#">oublier mot de passe ?</a>
          </small>
										</div>
										
											
										<div className="text-center mt-3">
											 <button type="submit" className="btn btn-lg btn-primary">Sign in</button> 
										</div>
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
