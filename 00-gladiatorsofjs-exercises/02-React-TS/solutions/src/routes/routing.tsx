import { HomePage } from "pages";
import { TwitterClone } from "pages/TwitterClone/TwitterClone";
import { ExerciseModule, ExerciseRoute } from "types";

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
  { pageName: "InfiniteList"},
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
  ];

export const exercisesLinks: ExerciseModule[] = [
  {
    title: "React TS Fundamentals",
    linksArray: firstModuleExercises
  },
  {
    title: "App State Handling",
    linksArray: secondModuleExercises
  },
]