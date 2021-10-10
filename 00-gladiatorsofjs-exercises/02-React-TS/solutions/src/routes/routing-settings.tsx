import { ExerciseModule, ExerciseRoute } from "types";

import {
  HomePage,
  RatingStars,
  TwitterClone,
  authTokenRoutes,
  useMemoStateCheck,
  useGeoVisualization,
  TableWithPagination,
  ModalVisualization,
  SearchWithDropdownVis
} from "pages";

export const routes: ExerciseRoute[] = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/TwitterClone",
    component: TwitterClone,
    exact: true,
  },
  {
    path: "/RatingStars",
    component: RatingStars,
    exact: true,
  },
  ...authTokenRoutes,
  {
    path: "/useMemoState",
    component: useMemoStateCheck,
    exact: true,
  },
  {
    path: "/useGeo",
    component: useGeoVisualization,
    exact: true,
  },
  {
    path: "/TableWithPagination",
    component: TableWithPagination,
    exact: true,
  },
  {
    path: "/Modal",
    component: ModalVisualization,
    exact: true,
  },
  {
    path: "/SearchWithDropdown",
    component: SearchWithDropdownVis,
    exact: true,
  },
];

const firstModuleExercises = [
  { pageName: "TwitterClone" },
  { pageName: "RatingStars" },
  { pageName: "AuthToken" },
  { pageName: "useMemoState" },
  { pageName: "useGeo" },
  { pageName: "TableWithPagination" },
  { pageName: "Modal" },
  { pageName: "SearchWithDropdown" },
  { pageName: "MasonryGrid" },
  { pageName: "PasswordInput" },
  { pageName: "InfiniteList" },
  { pageName: "useIntersectionObserver" },
  { pageName: "MultistepForm" },
];

const secondModuleExercises = [
  { pageName: "ReducerTutorial" },
  { pageName: "AuthContext" },
  { pageName: "ContextAsRedux" },
  { pageName: "MultilangComponents" },
  { pageName: "RouterSelectFromStore" },
  { pageName: "CompoundSidebar" },
  { pageName: "ReactRouterAffiliateLinks" },
  { pageName: "ContextParallaxBgImg" },
  { pageName: "FormReducer" },
];

export const exercisesModules: ExerciseModule[] = [
  {
    title: "React TS Fundamentals",
    exercises: firstModuleExercises,
  },
  {
    title: "App State Handling",
    exercises: secondModuleExercises,
  },
];
