import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from '../services/api-user-service.service'
import { GoogleApiService } from 'ng-gapi';
import { driveService } from '../services/google-drive-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService,
    private gapiService: GoogleApiService,
    private driveService: driveService) {
    this.gapiService.onLoad().subscribe();

  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  ngOnInit() {
  }

  public signIn() {
    this.userService.signIn();
  }

   getDriveFiles() {
    this.driveService.getDriveFiles(this.userService.getToken())
      .subscribe((data) => {
        
      });
  }
  
  logout() {
    this.userService.signOut()
  }

}
