import { companiesLogos } from "@assets/companies";
import { CompaniesListWrapper, CompanyLogo } from "./styled";


export const CompaniesList = () => {
  return (
    <CompaniesListWrapper>
      {companiesLogos.map((logo, index) => (
        <CompanyLogo key={index} src={logo} />
      ))}
    </CompaniesListWrapper>
  );
};
