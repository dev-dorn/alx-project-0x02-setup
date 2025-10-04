export interface NavLink{
    label: string;
    href: string;

}
export interface HeaderProps {
    title: string;
    links ?: NavLink[];
    logUrl?: string ;
    alt?: string;


}
export interface  ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}
export interface CardProps {
    title: string;
    content?: string;
    location: string;
    price: number;
    nights: number;
    rating: number;
    image: string;
    isGuestFavorite?:boolean;
}