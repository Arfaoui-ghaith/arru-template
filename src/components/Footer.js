import React from 'react'

export default function Footer() {
    return (
        <footer class="footer">
			<div class="container">
				<div class="row text-muted">
					<div class="text-center">
						<p class="mb-0">
                            &copy; {new Date().getFullYear()} L'ARRU -  
							<a href="https://www.linkedin.com/in/sarra-garbouj-9136101bb/" target="_blank" class="text-muted"><strong> Sarra Garbouj </strong></a> 
                             &  
                            <a href="https://www.linkedin.com/in/ghaith-arfaoui-%F0%9F%9A%80-7501aa180/" target="_blank" class="text-muted"><strong> Ghaith Arfaoui</strong></a>
						</p>
					</div>
					
				</div>
			</div>
		</footer>
    )
}
