import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'egp',
    standalone: true
})
export class EgpPipe implements PipeTransform {
   
    transform(value: number | null | undefined, rate: number = 1, locale: string = 'en-EG'): string {
        if (value == null || isNaN(Number(value))) return '';
        const amount = Number(value) * rate;
        return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EGP', maximumFractionDigits: 2 }).format(amount);
    }
}
