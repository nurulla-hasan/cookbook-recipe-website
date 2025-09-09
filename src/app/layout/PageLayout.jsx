

const PageLayout = ({children}) => {
    return (
        <div className="container mx-auto px-4 pb-12 pt-4 md:pt-6 md:pb-16 xl:px-0">
            {children}
        </div>
    );
};

export default PageLayout;