import React from 'react'

export default function Footer() {
    return (
        <footer class="footer">
			<div class="container">
				<div class="row text-muted">
					<div class="text-center">
						<p class="mb-0">
                            &copy; {new Date().getFullYear()} L'ARRU -  
							<a href="index.html" class="text-muted"><strong> Sarra Garbouj </strong></a> 
                             &  
                            <a href="index.html" class="text-muted"><strong> Ghaith Arfaoui</strong></a>
						</p>
					</div>
					
				</div>
			</div>
		</footer>
    )
}
