
const PageLayout = ({children}) => {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-18 xl:px-0">
            {children}
        </div>
    );
};

export default PageLayout;