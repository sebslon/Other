export interface ExerciseModule {
  title: string;
  linksArray: { pageName: string }[];
}

export interface ExerciseRoute {
    path: string;
    component: () => JSX.Element,
    exact: boolean,
}