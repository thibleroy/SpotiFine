export interface IParam {
    name: string;
    value: any;
    editable: boolean;
    endpoint: string;
}
interface IText {
    color: string;
    value: string;
}
export interface IItem {
    h1?: IText;
    h2?: IText;
    h3?: IText;
    p?: IText;
    color?: string;
    btn_icon?: string;
    thumbnail?: string;
    href?: string;
}
