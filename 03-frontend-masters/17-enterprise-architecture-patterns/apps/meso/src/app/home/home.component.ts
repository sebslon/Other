import { Component, OnInit } from "@angular/core";

interface BaseEntity {
  id: string | null;
}
interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
}

const peter: Client = {
  id: "1",
  firstName: "Peter",
  lastName: "Parker",
  company: "Acme, Inc",
};

const john: Client = {
  id: "1",
  firstName: "John",
  lastName: "Parker",
  company: "Acme, Inc",
};

const clients: Client[] = [peter, john];

interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

const newClient: Client = {
  id: null,
  firstName: "",
  lastName: "",
  company: "",
};

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient,
};

class ClientsStore {
  state: ClientsState;

  constructor(state: ClientsState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

const clientsStore = new ClientsStore(initialClientsState);
const currentClient = clientsStore.select("currentClient");
// clientsStore.load(clients);
// clientsStore.select(peter);
// PROJECT

interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
}

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}

const superProject = {
  id: "1",
  title: "Project 1",
  description: "Project",
  completed: false,
};
const superProject2 = {
  id: "2",
  title: "Project 2",
  description: "Project",
  completed: false,
};

const projects: Project[] = [superProject, superProject2];
const newProject: Project = {
  id: null,
  title: "",
  description: "",
  completed: false,
};

const initialProjectsState: ProjectsState = {
  projects,
  currentProject: newProject,
};

interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
}

const appState: AppState = {
  clientsState: initialClientsState,
  projectsState: initialProjectsState,
};

const tango = clientsStore;

@Component({
  selector: "fem-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  echo = tango;
}
