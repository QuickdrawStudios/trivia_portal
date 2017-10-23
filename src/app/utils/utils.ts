export function routeHomeIfLoggedIn(_userService, _router): void {
    if (localStorage.getItem("token")) {
        _userService.getAuthenticatedUser().subscribe(
            response => {
                if(response.status == "ok"){
                    if(!response.message.active){ 
                        _router.navigateByUrl('/demo');
                    } else {
                        _router.navigateByUrl('/home');
                    }
                } else {
                    localStorage.removeItem('token');
                }
            }, err => {
                console.log(err);
            });
    }
}

export function routeLoginIfNotLoggedIn(_userService, _router, currentRoute: string): void {
    if (!localStorage.getItem("token")) {
        _router.navigateByUrl('/login');
    } else {
        _userService.getAuthenticatedUser().subscribe(
            response => {
                if(response.status != "ok"){
                    localStorage.removeItem('token');
                     _router.navigateByUrl('/login');
                } else {
                    if(currentRoute == '/home' && !response.message.active) _router.navigateByUrl('/demo');
                    if(currentRoute == '/demo' && response.message.active) _router.navigateByUrl('/home');
                }
            }, err => {
                console.log(err);
            });
    }
}