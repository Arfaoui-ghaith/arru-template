import React from 'react'

export default function Login() {
    return (
        <main class="d-flex w-100">
		<div class="container d-flex flex-column">
			<div class="row vh-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Bienvenue</h1>
							<p class="lead">
								connecter pour acceder à votre compte
							</p>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<div class="text-center">
										<img src="img/photos/logo.png" alt="ARRU" class="img-fluid " width="132" height="132" />
									</div>
									<form>
										<div class="mb-3">
											<label class="form-label">Email</label>
											<input class="form-control form-control-lg" type="email" name="email" placeholder="Entrer votre email" />
										</div>
										<div class="mb-3">
											<label class="form-label">Mot de passe </label>
											<input class="form-control form-control-lg" type="password" name="password" placeholder="Entrer votre mot de passe" />
											<small>
            <a href="#">oublier mot de passe ?</a>
          </small>
										</div>
										
											
										<div class="text-center mt-3">
											 <button type="submit" class="btn btn-lg btn-primary">Sign in</button> 
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
