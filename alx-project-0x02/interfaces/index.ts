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