import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  moduleId: module.id,
  templateUrl: "auth.component.html"
})

export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router) {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      //perform authentication
      this.router.navigateByUrl("admin/main");
    } else {
      this.errorMessage = "Form data invalid";
    }



  }
}
