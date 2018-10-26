import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/api-user-service.service'
import { GoogleApiService } from 'ng-gapi';
import { driveService } from '../services/google-drive-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fileList: any = []
  isLoggedInUser: boolean = false;
  constructor(private userService: UserService,
    private gapiService: GoogleApiService,
    private driveService: driveService) {
    this.gapiService.onLoad().subscribe();
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  ngOnInit() {
    // Validates whether user has already logged in or not
    if (!this.isLoggedIn()) {
      // call consent if not logged in
      this.signIn();
    } else {
      // call getDriveFiles and load data into table
      this.isLoggedInUser = true;
      this.getDriveFiles();
    }
    // Triggers after a success login
    this.userService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.getDriveFiles();
        window.location.reload();
      }
    })
  }

  public signIn() {
    this.userService.signIn();
  }

  // Call drive API in driveService and load data into table
  getDriveFiles() {
    this.driveService.getDriveFiles(this.userService.getToken())
      .subscribe((data) => {
        this.fileList = data.files
      });
  }

  // Logout from the system
  logout() {
    this.fileList = []
    this.userService.signOut()
    this.isLoggedInUser = false;
  }

}
