
const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Reggie James. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.fiverr.com/reggie_dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Fiverr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
