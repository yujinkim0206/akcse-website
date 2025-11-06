import AKCSEUofTFooterSocial from "./AKCSEUofTFooterSocial";
import AKCSEFooterSocial from "./AKCSEFooterSocial";

export default function Footer() {
  return (
    <footer className="footer bg-black py-8 text-white sm:py-12">
      <div className="wrap grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-4">
        <div className="mb-2 sm:mb-8 md:col-span-2">
          <p className="text-[6vw] leading-none tracking-tighter sm:text-3xl">
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

        <div className="md:col-span-4 space-y-1">
          <p>© 2025 AKCSE. All rights reserved.</p>
          <p className="text-[#a3a3a3]">
            Created by Yujin Kim, Daniel (Euichan) Kim, Lucy (Siyoung) Lee
          </p>
        </div>
      </div>
    </footer>
  );
}
