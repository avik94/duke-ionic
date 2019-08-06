import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    showSpinet = true;
    form: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder) {

        this.form = formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }

    goToHome() {
        this.showSpinet = false;
        setTimeout(() => {
            this.showSpinet = true;
            this.router.navigate(['/dashboard']);
        }, 2000);
    }
}
