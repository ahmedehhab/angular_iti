import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-star-rating',
    standalone: true,
    imports: [DecimalPipe],
    template: `
    <span class="star-rating">
      @for (star of stars; track $index) {
        @if (star === 'full') {
          <i class="bi bi-star-fill"></i>
        } @else if (star === 'half') {
          <i class="bi bi-star-half"></i>
        } @else {
          <i class="bi bi-star"></i>
        }
      }
      <span class="ms-1 text-muted">({{ rating | number:'1.1-1' }})</span>
    </span>
  `,
    styles: []
})
export class StarRating {
    @Input({ required: true }) rating: number |undefined = 0;

    get stars(): string[] {
        const result: string[] = [];
        const fullStars = Math.floor(this.rating || 0 );
        const hasHalfStar = this.rating || 0 % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            result.push('full');
        }

        if (hasHalfStar && result.length < 5) {
            result.push('half');
        }

        while (result.length < 5) {
            result.push('empty');
        }

        return result;
    }
}
