import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Apple, Smartphone } from "lucide-react"
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#C1D7AB] to-[#E6F9D3]/50 text-foreground">
      {/* Newsletter Section */}
      <div className="px-4 py-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center md:flex-row md:justify-between md:space-x-4 md:space-y-0">
            <h3 className="text-xl font-medium text-foreground md:text-4xl font-caladea">Subscribe to our Newsletter</h3>
            <div className="flex w-full max-w-md space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Main Footer Content */}
      <div className="px-4 py-12 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Social */}
            <div className="space-y-4 flex flex-col">
                <img src={Logo} alt="" className="h-16 w-16 rounded-full object-contain"/>
              <p className="text-sm text-foreground">Find Us On</p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary bg-inherit text-primary"
                >
                  <Facebook/>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary bg-inherit text-primary"
                >
                  <Twitter/>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary bg-inherit text-primary"
                >
                  <Instagram/>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary bg-inherit text-primary"
                  >
                  <Linkedin/>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-foreground" />
                  <span className="text-sm text-foreground">+60 3-4567 8901</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-foreground" />
                  <span className="text-sm text-foreground">hello@blueoak.edu.my</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-foreground mt-0.5" />
                  <span className="text-sm text-foreground">
                    Jalan Damansara, Kuala Lumpur,
                    <br />
                    Malaysia
                  </span>
                </div>
              </div>
            </div>

            {/* About & Legal */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">About & Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-foreground transition-colors hover:text-muted-foreground">
                  About Us
                </a>
                <a href="#" className="block text-sm text-foreground transition-colors hover:text-muted-foreground">
                  Terms & Conditions
                </a>
                <a href="#" className="block text-sm text-foreground transition-colors hover:text-muted-foreground">
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Help & Support */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Help & Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-foreground transition-colors hover:text-muted-foreground">
                  Contact Us
                </a>
                <a href="#" className="block text-sm text-foreground transition-colors hover:text-muted-foreground">
                  Help Center
                </a>
                <a href="#" className="block text-sm text-foreground transition-colors hover:text-muted-foreground">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator/>

      {/* App Download Section */}
      <div className="px-4 py-8 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h4 className="mb-6 text-lg font-semibold text-foreground">Download our App from</h4>
            <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-secondary bg-card text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Apple className="h-5 w-5" />
                <span>App Store</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-2 border-secondary bg-card text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Smartphone className="h-5 w-5" />
                <span>Google Play</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator/>

      {/* Copyright */}
      <div className="px-4 py-6 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm text-foreground">© 2025 Cookbook Recipe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;