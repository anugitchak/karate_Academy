import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  if (!companyLogos || companyLogos.length === 0) {
    console.error("No company logos available.");
    return null; // Early return if no data is available
  }

  return (
    <div className={`${className} py-8 px-4`}>
      <h5 className="tagline mb-6 text-center text-n-1/70 text-lg md:text-xl">
        Our Associations
      </h5>
      <ul className="flex flex-wrap justify-center gap-6">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center w-1/2 sm:w-1/4 md:w-1/5"
            key={index}
            style={{ maxWidth: "140px" }}
          >
            <img src={logo} className="w-full h-auto" alt={`Logo ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
