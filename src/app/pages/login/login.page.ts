import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }

    goToHome() {
        this.showSpinet = false;
        if (this.form.value.email === "Novatec" || this.form.value.email === "DukeMedicalEquimentInternational" || this.form.value.email === "prop-new") {
            localStorage.setItem('companyName', this.form.value.email)
            setTimeout(() => {
                this.showSpinet = true;
                this.router.navigate(['/dashboard']);
            }, 1000);
        } else {
            alert("Wrong User Id");
            this.showSpinet = true;            
        }

    }
}
