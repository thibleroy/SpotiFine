interface IExplicitContent {
    filter_enabled: boolean;
    filter_locked: boolean;
}

interface IExternalUrls {
    spotify: string;
}

interface IFollowers {
    href?: any;
    total: number;
}

interface IImage {
    height?: any;
    url: string;
    width?: any;
}

export interface IAccount {
    country: string;
    display_name: string;
    email: string;
    explicit_content: IExplicitContent;
    external_urls: IExternalUrls;
    followers: IFollowers;
    href: string;
    id: string;
    images: IImage[];
    product: string;
    type: string;
    uri: string;
}