
const PageLayout = ({children}) => {
    return (
        <div className="container mx-auto px-4 py-16 lg:py-20 xl:px-0">
            {children}
        </div>
    );
};

export default PageLayout;