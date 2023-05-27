import { ReactNode } from "react";

import { Card } from "antd";

import styles from "./card.module.scss";

type Props = {
  title?: string;
  children?: ReactNode;
  actionTemplate?: any; 
  footerTemplate?: any; 
  headerTemplate?: any;
  footerClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  className?: string;
  loader?: boolean;
};

const PzCard = ({
  children,
  footerClassName,
  footerTemplate,
  className,
  bodyClassName,
}: Props) => {
  return (
    <>
      <Card
        className={`${styles.cardWrapper} ${className}`}
        bodyStyle={{ padding: 0 }}
      >
        <div className={`${styles.bodyWrapper} ${bodyClassName}`}>
          {children}
        </div>
        {footerTemplate && (
          <div className={`${styles.footerWrapper} ${footerClassName}`}>
            {footerTemplate()}
          </div>
        )}
      </Card>
    </>
  );
};

export default PzCard;
