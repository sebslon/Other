import { FormikYupForm } from "./1-ReactTS_Fundamentals/13-multistepForm/form-implementations/formik-yup";
import { ReactHookMultistepForm } from "./1-ReactTS_Fundamentals/13-multistepForm/form-implementations/react-hook-form";
import { MultistepFormWithoutLibrary } from "./1-ReactTS_Fundamentals/13-multistepForm/form-implementations/without-library";

export { HomePage } from "./0-Homepage";
export { TwitterClone } from "./1-ReactTS_Fundamentals/01-TwitterClone";
export { RatingStars } from "./1-ReactTS_Fundamentals/02-RatingStars";
export { authTokenRoutes } from "./1-ReactTS_Fundamentals/03-AuthToken/routes";
export { useMemoStateCheck } from "./1-ReactTS_Fundamentals/04-useMemoState";
export { useGeoVisualization } from "./1-ReactTS_Fundamentals/05-useGeo/useGeo";
export { TableWithPagination } from "./1-ReactTS_Fundamentals/06-TableWithPagination";
export { ModalVisualization } from "./1-ReactTS_Fundamentals/07-Modal";
export { SearchWithDropdownVis } from "./1-ReactTS_Fundamentals/08-SearchWithDropdown";
export { MasonryGridVis } from "./1-ReactTS_Fundamentals/09-MasonryGrid";
export { PasswordInputVis } from "./1-ReactTS_Fundamentals/10-PasswordInput";
export { InfiniteList } from "./1-ReactTS_Fundamentals/11-InfiniteList";
export { IntersectionObserverPresentation } from "./1-ReactTS_Fundamentals/12-useIntersectionObserver";
export { MultistepForms } from "./1-ReactTS_Fundamentals/13-multistepForm";

export const multistepForms = {
  withoutLibrary: MultistepFormWithoutLibrary,
  formikYup: FormikYupForm,
  reactHookForm: ReactHookMultistepForm,
};
