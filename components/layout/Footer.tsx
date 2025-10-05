import AKCSEUofTFooterSocial from "./AKCSEUofTFooterSocial";
import AKCSEFooterSocial from "./AKCSEFooterSocial";

export default function Footer() {
  return (
    <footer className="footer bg-black py-12 text-white">
      <div className="wrap grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="mb-2 sm:mb-8 md:col-span-2">
          <p className="text-xl sm:text-3xl leading-none tracking-tighter">
            Association of Korean-Canadian <br />
            Scientists and Engineers at the <br />
            University of Toronto
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Contact</p>
          <p>akcse.utoronto@gmail.com</p>
          <p>100 St. George Street</p>
          <p>Toronto, Ontario M5S 3G3</p>
        </div>

        <div className="space-y-2">
          <div className="space-y-1">
            <p className="font-medium">Follow AKCSE UofT</p>
            <AKCSEUofTFooterSocial />
          </div>
          <div className="space-y-1">
            <p className="font-medium">Follow AKCSE</p>
            <AKCSEFooterSocial />
          </div>
        </div>

        <p className="md:col-span-4">© 2025 AKCSE. All rights reserved.</p>
      </div>
    </footer>
  );
}
