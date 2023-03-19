import cn from "classnames";
import { IconProps } from "./interfaces";
import { useDynamicSvgImport } from "./utils/useDynamicImport";
import styles from "./styles.module.scss";
import {
  DEFAULT_TEST_ID,
  IconSizeToStyleObjectAssoc,
  ICON_NAME,
} from "./constants";

const Icon: React.FC<IconProps> = (props) => {
  const {
    id,
    name,
    size = 20,
    className = "",
    color = "black",
    dataTestId = "",
  } = props;

  const { loading, SvgIcon } = useDynamicSvgImport(ICON_NAME[name]);

  const style =
    IconSizeToStyleObjectAssoc[size] || IconSizeToStyleObjectAssoc[20];

  const groupedProps = {
    id,
    style,
    "data-icon-name": name,
    "data-testid": `${DEFAULT_TEST_ID}.${dataTestId}`,
  };

  return (
    <>
      {loading && <div>loading</div>}
      {SvgIcon && (
        <SvgIcon className={cn(styles[color], className)} {...groupedProps} />
      )}
    </>
  );
};

export default Icon;
