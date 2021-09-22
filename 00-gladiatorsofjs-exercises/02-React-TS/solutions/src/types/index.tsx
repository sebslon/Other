export interface ExerciseModule {
  title: string;
  exercises: { pageName: string }[];
}

export interface ExerciseRoute {
    path: string;
    component: () => JSX.Element,
    exact: boolean,
}