export interface AnsiColors {
    basic: AnsiColor[],
    special: AnsiColor[]
}

export interface AnsiColor {
    code: string;
    desc: string;
    color: string;
    bgColor: string;
}
