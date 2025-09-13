import { cn } from "@/lib/utils";

const PageLayout = ({ children, className, paddingSize = "default" }) => {
    const paddingMap = {
      default: "px-4 py-12 lg:py-18 xl:px-0",
      compact: "px-4 pt-5 pb-12 lg:pb-18 xl:px-0",
      none: "px-4 xl:px-0 py-12",
    };
  
    return (
      <div className={cn("container max-w-7xl mx-auto", paddingMap[paddingSize], className)}>
        {children}
      </div>
    );
  };
  
  export default PageLayout;