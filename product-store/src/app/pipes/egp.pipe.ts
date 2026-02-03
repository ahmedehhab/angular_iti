import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'egp',
    standalone: true
})
export class EgpPipe implements PipeTransform {
    /**
     * Formats a number as Egyptian Pounds (EGP).
     * @param value The value to format (assumed currently in the same currency as the input).
     * @param rate Optional conversion rate to multiply the value by (default 1).
     * @param locale Optional locale for formatting (default 'en-EG').
     */
    transform(value: number | null | undefined, rate: number = 1, locale: string = 'en-EG'): string {
        if (value == null || isNaN(Number(value))) return '';
        const amount = Number(value) * rate;
        return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EGP', maximumFractionDigits: 2 }).format(amount);
    }
}
