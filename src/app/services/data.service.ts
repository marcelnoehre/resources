import { Injectable } from '@angular/core';
import { AnsiColorType } from '../enums/ansi-color-type';
import { HttpClient } from '@angular/common/http';
import { AnsiColor } from '../interfaces/ansi-color.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  async getAnsiColors(type: AnsiColorType): Promise<AnsiColor[]> {
    const data = await this.http.get<{ basic?: AnsiColor[] }>('/data/ansi-colors.json').toPromise();
    switch (type) {
      case AnsiColorType.BASIC:
        return data?.basic ?? [];
      default:
        return [];
    }
  }
}
