import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserL, UserAuth} from '../../../model/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private readonly router = inject(Router);
  protected user: UserL = new UserL();
  private userAuth: UserAuth | undefined;

  private readonly http = inject(HttpClient);

  protected login() {
    this.http.post<UserAuth>('http://localhost:8080/user/auth', this.user).subscribe({
      next: (response:UserAuth) => {
        localStorage.setItem('token', JSON.stringify(response.token));
        this.router.navigate(['/home']);

      },
      error: (err) => {
        console.error('Authorisation Error:', err);
      }
    });
  }
}
