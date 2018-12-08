import { Component, OnInit, isDevMode , Inject, PLATFORM_ID  } from '@angular/core'
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{
	constructor(@Inject(PLATFORM_ID) private platformId: Object, public router: Router){}

	ngOnInit() {
		// if (isDevMode()) {
		// 	console.log('👋 Development!');
		// } else {
		// 	console.log('💪 Production!');
		// }
		this.router.events.subscribe(event => {
			if (isPlatformBrowser(this.platformId)) {
				if (event instanceof NavigationEnd) {
					ga('set', 'page', event.urlAfterRedirects);
					ga('send', 'pageview');
				}
			 }

		});
	}
}
