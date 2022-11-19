import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  @Input() rating: number;

  public calcFullStars(): number[] {
    const quantity = Math.trunc(this.rating);
    return Array(quantity);
  }

  public calcHalfStars(): number[] {
    const quantity = Math.round(this.rating - Math.trunc(this.rating))
    return Array(quantity);
  }

  public calcEmptyStars(): number[] {
    const quantity = 5 - Math.trunc(Math.round(this.rating));
    return Array(quantity);
  }

}
