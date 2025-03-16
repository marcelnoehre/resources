import { Injectable } from '@angular/core';
import { AnsiColors } from '../interfaces/ansi-color.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAnsiColors(): AnsiColors {
    return {
      basic: [
        { code: '\\x1b[30m', desc: 'foreground black', color: 'rgb(0, 0, 0)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[40m', desc: 'background black', color: 'rgb(220, 220, 220)', bgColor: 'rgb(0, 0, 0)'},
        { code: '\\x1b[31m', desc: 'foreground red', color: 'rgb(204, 0, 0)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[41m', desc: 'background red', color: 'rgb(220, 220, 220)', bgColor: 'rgb(204, 0, 0)'},
        { code: '\\x1b[32m', desc: 'foreground green', color: 'rgb(0, 204, 0)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[42m', desc: 'background green', color: 'rgb(220, 220, 220)', bgColor: 'rgb(0, 204, 0)'},
        { code: '\\x1b[33m', desc: 'foreground yellow', color: 'rgb(204, 204, 0)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[43m', desc: 'background yellow', color: 'rgb(0, 0, 0)', bgColor: 'rgb(204, 204, 0)'},
        { code: '\\x1b[34m', desc: 'foreground blue', color: 'rgb(0, 0, 204)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[44m', desc: 'background blue', color: 'rgb(220, 220, 220)', bgColor: 'rgb(0, 0, 204)'},
        { code: '\\x1b[35m', desc: 'foreground magenta', color: 'rgb(204, 0, 204)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[45m', desc: 'background magenta', color: 'rgb(220, 220, 220)', bgColor: 'rgb(204, 0, 204)'},
        { code: '\\x1b[36m', desc: 'foreground cyan', color: 'rgb(0, 204, 204)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[46m', desc: 'background cyan', color: 'rgb(0, 0, 0)', bgColor: 'rgb(0, 204, 204)'},
        { code: '\\x1b[37m', desc: 'foreground white', color: 'rgb(255, 255, 255)', bgColor: 'rgb(220, 220, 220)'},
        { code: '\\x1b[47m', desc: 'background white', color: 'rgb(0, 0, 0)', bgColor: ''}
      ],
      special: [
        { code: '\\x1b[0m', desc: 'reset', color: 'rgb(0, 0, 0)', 'bgColor': 'rgb(220, 220, 220)'},
        { code: '\\x1b[1m', desc: 'bold', color: 'rgb(0, 0, 0)', 'bgColor': 'rgb(220, 220, 220)'},
        { code: '\\x1b[4m', desc: 'underline', color: 'rgb(0, 0, 0)', 'bgColor': 'rgb(220, 220, 220)'},
        { code: '\\x1b[5m', desc: 'blink', color: 'rgb(0, 0, 0)', 'bgColor': 'rgb(220, 220, 220)'},
        { code: '\\x1b[7m', desc: 'reverse', color: 'rgb(0, 0, 0)', 'bgColor': 'rgb(220, 220, 220)'},
        { code: '\\x1b[8m', desc: 'hidden', color: 'rgb(0, 0, 0)', 'bgColor': 'rgb(220, 220, 220)'}
      ]
    }
  }
}