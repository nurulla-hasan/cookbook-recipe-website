import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p className="text-6xl font-bold text-primary">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-6 text-base text-muted-foreground">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button>
                        <Link to="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Go back home
                        </Link>
                    </Button>
                    <Button variant="outline">
                        <Link to="/faq">
                            Need help?
                        </Link>
                        <Link to="/contact">
                            Contact support
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;