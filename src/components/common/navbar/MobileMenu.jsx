import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useState } from "react"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const MobileMenu = ({navigationItems}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">Mobile menu for navigation and user profile.</SheetDescription>
                    <div className="flex flex-col space-y-4">
                        {/* Mobile User Profile */}
                        <div className="flex items-center space-x-3 py-4.5 border-b px-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="/user-avatar.jpg" alt="Mr. Mike" />
                                <AvatarFallback>MM</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Mr. Mike</p>
                                <p className="text-sm text-muted-foreground">User Profile</p>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="px-4 space-y-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="flex items-center space-x-3 text-sm font-medium text-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent/10 border"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon && <item.icon className="h-5 w-5" />}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>


                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileMenu;