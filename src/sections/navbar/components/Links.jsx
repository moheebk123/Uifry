import Link from "../../../utils/Link/Link";

const Links = () => {
  const links = ["Home", "About Us", "Pricing", "Features"];
  return (
    <div className="link-box">
      {links.map((link, index) => {
        if (link === "Home") {
          return <Link key={index} link={link} navHome={true} />;
        }
        return <Link key={index} link={link} />;
      })}
    </div>
  );
};

export default Links;
