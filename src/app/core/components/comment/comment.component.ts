import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Rating } from '@core/models/rating.model';
import { UsersApiService } from '@core/services/users.api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {

  email: string = ''
  @Input() rating: Rating;

  constructor(
    private usersApiService: UsersApiService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.usersApiService.fetchUserById(this.rating.userId).subscribe(user => {this.email = user.email;
      this.cd.detectChanges();
      console.log(this.email)})
  }

}
