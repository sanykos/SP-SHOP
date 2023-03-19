type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module "*.svg" {
  export const ReactComponent: SvgrComponent;
  export const src: string;
  export default src;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
